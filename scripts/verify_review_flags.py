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


def get_pr_info():
    return json.loads(gh("pr", "view", PR_NUMBER, "--json", "body,files,headRefOid"))


def parse_flags(body):
    # 「要確認」の直後に括弧書きの注釈が付く形式(daily.yml)と付かない形式(product/seo)の両方に対応
    m = re.search(r"要確認[^\n]*\n(.+?)(?:\n##|\Z)", body, re.S)
    if not m:
        return []
    flags = []
    for line in m.group(1).splitlines():
        line = line.strip("- ").strip()
        if not line:
            continue
        # [7] のようなブラケット表記と、「出典7」のような文中表記の両方を拾う
        cites = re.findall(r"\[(\d+)\]", line) + re.findall(r"出典(\d+)", line)
        cites = sorted(set(int(c) for c in cites))
        flags.append({"text": line, "cites": cites})
    return flags


def parse_sources(markdown):
    """SEO/製品紹介記事: 末尾の「N. [title](url)」形式の出典リスト"""
    sources = {}
    for m in re.finditer(r"^(\d+)\.\s*\[.*?\]\((https?://[^\s)]+)\)", markdown, re.M):
        sources[int(m.group(1))] = m.group(2)
    return sources


def parse_news_sources(markdown):
    """ニュース記事: 本文中に「**出典：** [title](url)」が記事ごとに1個ずつ現れる形式。
    出現順＝「ニュース1」「ニュース2」…の番号に対応する。"""
    urls = re.findall(r"出典：\*\*\s*\[.*?\]\((https?://[^\s)]+)\)", markdown)
    return {i + 1: url for i, url in enumerate(urls)}


def get_article_markdown(files, head_sha):
    """PRで変更されたsrc/content/blog/*.mdのうち、新規追加された記事本体を取得する。
    (重複表示されている既公開記事ではなく、本来の対象記事を取るため、
    最も'要確認'の出典数が多い=本文が長いものを優先的に全部候補にする)
    """
    candidates = [f["path"] for f in files if re.match(r"^src/content/blog/.+\.md$", f["path"])]
    texts = {}
    for path in candidates:
        out = subprocess.run(
            ["gh", "api", f"repos/{REPO}/contents/{path}?ref={head_sha}", "--jq", ".content"],
            capture_output=True, text=True,
        )
        if out.returncode != 0:
            continue
        import base64
        try:
            texts[path] = base64.b64decode(out.stdout.strip()).decode("utf-8", errors="ignore")
        except Exception:
            continue
    return texts


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
    last_err = None
    for attempt in range(3):
        try:
            with urllib.request.urlopen(req, timeout=45) as r:
                data = json.load(r)
            content = data["choices"][0]["message"]["content"]
            return json.loads(content)
        except Exception as e:
            last_err = e
            continue
    raise last_err


def main():
    info = get_pr_info()
    body = info["body"]
    flags = parse_flags(body)

    if not flags:
        print("要確認の指摘なし。対象外")
        return

    article_texts = get_article_markdown(info["files"], info["headRefOid"])
    # 全記事本体を連結して出典リストを探す(どのファイルに出典節があるか不明なため)
    combined_markdown = "\n".join(article_texts.values())
    sources = parse_sources(combined_markdown)
    news_sources = parse_news_sources(combined_markdown)

    results = []
    for flag in flags:
        news_m = re.match(r"ニュース(\d+)", flag["text"])
        if news_m and not flag["cites"]:
            n = int(news_m.group(1))
            source_texts = {n: fetch_text(news_sources[n])} if n in news_sources else {}
        else:
            source_texts = {n: fetch_text(sources[n]) for n in flag["cites"] if n in sources}
        if not source_texts:
            results.append({
                "flag": flag["text"],
                "verdict": "ISSUE",
                "reason": f"出典{flag['cites']}が記事本文から見つからず裏取り不能(人の確認が必要)" if flag["cites"] else "指摘に出典番号が無く裏取り不能(人の確認が必要)",
            })
            continue
        try:
            verdict = ask_deepseek(flag["text"], source_texts)
        except Exception as e:
            verdict = {"verdict": "ISSUE", "reason": f"AI裏取り呼び出しが失敗(人の確認が必要): {e}"}
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
        gh("pr", "ready", PR_NUMBER)
        gh("pr", "merge", PR_NUMBER, "--squash", "--delete-branch")
        print("全指摘が誤検知と判定されたため自動マージしました")
    elif issues:
        print(f"::warning::{len(issues)}件の要確認事項が裏取りで実際の問題と判定されました。人のレビューが必要です")
    else:
        print("::warning::mainと衝突しているため自動マージをスキップしました")


if __name__ == "__main__":
    main()
