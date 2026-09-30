#!/usr/bin/env python3
"""「要確認」PRの指摘を、引用元ソースを実際に取得してDeepSeekに裏取りさせる。
全指摘が「問題なし」ならPRを自動マージし、1件でも実際の誤りがあれば人のレビューに残す。

使い方: python3 verify_review_flags.py <PR番号>
環境変数: GITHUB_TOKEN, DEEPSEEK_API_KEY, GITHUB_REPOSITORY
"""
import json, os, re, subprocess, sys, urllib.request

REPO = os.environ["GITHUB_REPOSITORY"]
PR_NUMBER = sys.argv[1]
DEEPSEEK_KEY = os.environ["DEEPSEEK_API_KEY"]


def gh(*args):
    out = subprocess.run(["gh", *args, "--repo", REPO], capture_output=True, text=True)
    if out.returncode != 0:
        print(out.stderr, file=sys.stderr)
        sys.exit(1)
    return out.stdout


def get_pr_body():
    return json.loads(gh("pr", "view", PR_NUMBER, "--json", "body"))["body"]


def parse_flags(body):
    m = re.search(r"要確認\s*\n(.+?)(?:\n##|\Z)", body, re.S)
    if not m:
        return []
    flags = []
    for line in m.group(1).splitlines():
        line = line.strip("- ").strip()
        if not line:
            continue
        cites = re.findall(r"\[(\d+)\]", line)
        flags.append({"text": line, "cites": [int(c) for c in cites]})
    return flags


def parse_sources(body):
    sources = {}
    for m in re.finditer(r"^(\d+)\.\s*\[.*?\]\((https?://[^\s)]+)\)", body, re.M):
        sources[int(m.group(1))] = m.group(2)
    return sources


def fetch_text(url, max_chars=6000):
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=20) as r:
            raw = r.read().decode("utf-8", errors="ignore")
        text = re.sub(r"<script.*?</script>|<style.*?</style>", "", raw, flags=re.S)
        text = re.sub(r"<[^>]+>", " ", text)
        text = re.sub(r"\s+", " ", text)
        return text[:max_chars]
    except Exception as e:
        return f"(取得失敗: {e})"


def ask_deepseek(flag_text, source_texts):
    sources_block = "\n\n".join(f"--- 出典{n} ---\n{t}" for n, t in source_texts.items())
    prompt = f"""以下は記事の自動ファクトチェックが「要確認」と判定した指摘です。実際の出典本文を示すので、この指摘が本当に問題（記事の誤り）なのか、それとも誤検知（実際は正しい）なのかを判定してください。

【要確認の指摘】
{flag_text}

【出典本文（該当箇所の抜粋）】
{sources_block}

出力は次のJSON形式のみ：
{{"verdict": "OK" または "ISSUE", "reason": "短い理由（日本語1-2文）"}}
"OK" = 記事の記述は出典と矛盾しない、誤検知だった。
"ISSUE" = 記事の記述が出典と食い違っている、本当に修正が必要。
"""
    req = urllib.request.Request(
        "https://api.deepseek.com/chat/completions",
        data=json.dumps({
            "model": "deepseek-chat",
            "messages": [{"role": "user", "content": prompt}],
            "temperature": 0,
            "response_format": {"type": "json_object"},
        }).encode(),
        headers={"Authorization": f"Bearer {DEEPSEEK_KEY}", "Content-Type": "application/json"},
    )
    with urllib.request.urlopen(req, timeout=60) as r:
        data = json.load(r)
    content = data["choices"][0]["message"]["content"]
    return json.loads(content)


def main():
    body = get_pr_body()
    flags = parse_flags(body)
    sources = parse_sources(body)

    if not flags:
        print("要確認の指摘なし。対象外")
        return

    results = []
    for flag in flags:
        source_texts = {n: fetch_text(sources[n]) for n in flag["cites"] if n in sources}
        if not source_texts:
            results.append({"flag": flag["text"], "verdict": "ISSUE", "reason": "出典URLが取得できず裏取り不能"})
            continue
        verdict = ask_deepseek(flag["text"], source_texts)
        results.append({"flag": flag["text"], **verdict})

    issues = [r for r in results if r["verdict"] != "OK"]

    mergeable = json.loads(gh("pr", "view", PR_NUMBER, "--json", "mergeable"))["mergeable"]

    report_lines = ["🤖 **AI裏取りチェック結果**\n"]
    for r in results:
        mark = "✅" if r["verdict"] == "OK" else "⚠️"
        report_lines.append(f"{mark} {r['flag'][:60]}\n   → {r['reason']}\n")

    if issues:
        report_lines.append("\n**判定：実際に問題ありの可能性 → 自動マージせず人のレビューへ**")
    elif mergeable == "CONFLICTING":
        report_lines.append("\n**判定：指摘はすべて誤検知でしたが、mainとの衝突があるため自動マージできません → 人の対応が必要**")
    else:
        report_lines.append("\n**判定：全指摘が誤検知 → 自動マージします**")

    comment = "\n".join(report_lines)
    with open("/tmp/_comment.txt", "w") as f:
        f.write(comment)
    gh("pr", "comment", PR_NUMBER, "--body-file", "/tmp/_comment.txt")

    if not issues and mergeable != "CONFLICTING":
        gh("pr", "merge", PR_NUMBER, "--squash", "--delete-branch")
        print("全指摘が誤検知と判定されたため自動マージしました")
    elif issues:
        print(f"::warning::{len(issues)}件の要確認事項が裏取りで実際の問題と判定されました。人のレビューが必要です")
    else:
        print("::warning::mainと衝突しているため自動マージをスキップしました")


if __name__ == "__main__":
    main()
