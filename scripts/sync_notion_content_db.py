#!/usr/bin/env python3
"""src/lib/blog-posts-data.json の新着記事を Notion コンテンツ管理DB に同期する。
state/notion_synced_slugs.json で「登録済みslug」を記録し、二重登録を防ぐ。
"""
import json, os, re, urllib.request

DB_ID = "3eb457e7-0a28-81e2-b753-dd34f08eb0b1"
NOTION_TOKEN = os.environ["NOTION_TOKEN"]
DATA_PATH = "src/lib/blog-posts-data.json"
STATE_PATH = "state/notion_synced_slugs.json"


def classify(slug):
    if slug.startswith("product-"):
        return "製品紹介記事"
    if re.match(r"^\d{8}-\d{6}$", slug):
        return "ニュース記事"
    return "SEO記事"


def notion_call(method, path, body=None):
    req = urllib.request.Request(
        f"https://api.notion.com/v1{path}",
        data=json.dumps(body).encode() if body else None,
        headers={
            "Authorization": f"Bearer {NOTION_TOKEN}",
            "Notion-Version": "2022-06-28",
            "Content-Type": "application/json",
        },
        method=method,
    )
    with urllib.request.urlopen(req) as r:
        return json.load(r)


def main():
    os.makedirs("state", exist_ok=True)
    synced = set()
    if os.path.exists(STATE_PATH):
        synced = set(json.load(open(STATE_PATH)))

    posts = json.load(open(DATA_PATH))
    new_posts = [p for p in posts if p["slug"] not in synced]

    if not new_posts:
        print("新着記事なし")
        return

    for p in new_posts:
        date_only = p["date"].split(" ")[0]
        body = {
            "parent": {"type": "database_id", "database_id": DB_ID},
            "properties": {
                "タイトル": {"title": [{"text": {"content": p["title"]}}]},
                "公開日": {"date": {"start": date_only}},
                "記事種別": {"select": {"name": classify(p["slug"])}},
                "カテゴリ": {"rich_text": [{"text": {"content": p.get("category", "")}}]},
                "URL": {"url": f"https://ai-survival.org/blog/{p['slug']}"},
                "備考": {"rich_text": [{"text": {"content": "自動同期(sync_notion_content_db.py)"}}]},
            },
        }
        result = notion_call("POST", "/pages", body)
        if "id" in result:
            print(f"登録: {p['title'][:30]} -> {result.get('url')}")
            synced.add(p["slug"])
        else:
            print(f"失敗: {p['title'][:30]} -> {result}")

    json.dump(sorted(synced), open(STATE_PATH, "w"), ensure_ascii=False, indent=2)


if __name__ == "__main__":
    main()
