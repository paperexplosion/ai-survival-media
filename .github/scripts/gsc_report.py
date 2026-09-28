"""Search Console 週次レポート：サイトマップの全URLのインデックス登録状況を URL 検査 API で調べ、
先週との差分を GitHub Issue「Search Console 週次レポート」にコメントとして書き足す。
前回の結果は、前回コメントの末尾に埋め込んだ JSON から読む（別の保存場所を持たない）。"""
import base64, collections, json, os, re, sys, zlib
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timedelta, timezone
import requests
from google.oauth2 import service_account
from google.auth.transport.requests import AuthorizedSession

SITE = "https://ai-survival.org/"
REPO = os.environ["GITHUB_REPOSITORY"]
GH = {"Authorization": f"Bearer {os.environ['GH_TOKEN']}", "Accept": "application/vnd.github+json"}
TITLE = "Search Console 週次レポート（ai-survival.org）"
JST = timezone(timedelta(hours=9))
OK = "送信して登録されました"
LABEL = {OK: "✅ 検索に載っている", "クロール済み - インデックス未登録": "読まれたが載っていない", "検出 - インデックス未登録": "見つけたがまだ読んでいない",
         "代替ページ（適切な canonical タグあり）": "別ページの複製扱い", "URL が Google に認識されていません": "まだ知られていない"}

cred = service_account.Credentials.from_service_account_info(json.loads(os.environ["GSC_SA_JSON"]), scopes=["https://www.googleapis.com/auth/webmasters"])
gsc = AuthorizedSession(cred)
urls = re.findall(r"<loc>([^<]+)", requests.get(SITE + "sitemap.xml", timeout=60).text)

def inspect(u):
    for _ in range(3):
        r = gsc.post("https://searchconsole.googleapis.com/v1/urlInspection/index:inspect",
                     json={"inspectionUrl": u, "siteUrl": SITE, "languageCode": "ja"}, timeout=90)
        if r.status_code == 200:
            return u, r.json()["inspectionResult"]["indexStatusResult"].get("coverageState") or "不明"
    return u, f"取得失敗({r.status_code})"

with ThreadPoolExecutor(6) as ex:
    now = dict(ex.map(inspect, urls))

def kind(u):
    p = u.replace(SITE, "")
    if p.startswith("blog/category/"): return "カテゴリ"
    if p.startswith("blog/product-"): return "製品紹介"
    if re.match(r"blog/\d{8}", p): return "ニュース"
    if p.startswith("blog/"): return "解説・特集"
    return "固定ページ"

# 前回
issue = next((i for i in requests.get(f"https://api.github.com/repos/{REPO}/issues", headers=GH, params={"state": "open", "per_page": 100}).json()
              if i.get("title") == TITLE and "pull_request" not in i), None)
if not issue:
    issue = requests.post(f"https://api.github.com/repos/{REPO}/issues", headers=GH, json={"title": TITLE, "body":
        "毎週月曜の朝に、GitHub Actions（.github/workflows/gsc-report.yml）が Google Search Console で全記事のインデックス登録状況を調べ、ここに書き足します。"}).json()
prev = {}
comments = requests.get(issue["comments_url"], headers=GH, params={"per_page": 100}).json()
for c in reversed(comments):
    m = re.search(r"<!--data:([A-Za-z0-9+/=]+)-->", c.get("body", ""))
    if m:
        prev = json.loads(zlib.decompress(base64.b64decode(m.group(1))))
        break

cnt, pcnt = collections.Counter(now.values()), collections.Counter(prev.values())
idx_now, idx_prev = cnt.get(OK, 0), pcnt.get(OK, 0)
newly = [u for u, s in now.items() if s == OK and prev.get(u) != OK]
lost = [u for u, s in prev.items() if s == OK and now.get(u) != OK and u in now]
today = datetime.now(JST).strftime("%Y年%m月%d日")

L = [f"## {today} の結果", "",
     f"**検索に載っている記事：{idx_now} / {len(now)} 本**" + (f"（先週 {idx_prev} 本 → {idx_now - idx_prev:+d}）" if prev else "（初回・基準値）"), "",
     "| 状態 | 本数 | 先週比 |", "|---|---:|---:|"]
for s, n in cnt.most_common():
    L.append(f"| {LABEL.get(s, s)} | {n} | {(n - pcnt.get(s, 0)):+d} |" if prev else f"| {LABEL.get(s, s)} | {n} | — |")
L += ["", "**種類別（載っている／全体）**", ""]
by = collections.defaultdict(lambda: [0, 0])
for u, s in now.items():
    by[kind(u)][1] += 1; by[kind(u)][0] += s == OK
L += [f"- {k}：{a} / {b}" for k, (a, b) in sorted(by.items())]
if newly:
    L += ["", f"**新しく載った記事（{len(newly)} 本）**", ""] + [f"- {u}" for u in newly[:30]] + (["- …ほか"] if len(newly) > 30 else [])
if lost:
    L += ["", f"**⚠ 検索から外れた記事（{len(lost)} 本）**", ""] + [f"- {u}（{LABEL.get(now[u], now[u])}）" for u in lost[:20]]
guides = [(u, s) for u, s in now.items() if kind(u) in ("解説・特集", "製品紹介") and not u.split("/")[-1].startswith("post-")]
if guides:
    L += ["", "<details><summary>解説記事・製品紹介の状態</summary>", ""] + [f"- {'✅' if s == OK else '・'} {u.replace(SITE, '/')}：{LABEL.get(s, s)}" for u, s in guides] + ["", "</details>"]
L += ["", "<!--data:" + base64.b64encode(zlib.compress(json.dumps(now, ensure_ascii=False).encode())).decode() + "-->"]
r = requests.post(issue["comments_url"], headers=GH, json={"body": "\n".join(L)})
print(r.status_code, issue["html_url"]); print("\n".join(L[:12]))
