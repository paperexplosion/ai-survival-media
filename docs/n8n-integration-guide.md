# n8n自動投稿ガイド

## 概要

このドキュメントは、n8nからGitHubリポジトリの`src/content/blog/`ディレクトリへ自動的にブログ記事を投稿するための設定ガイドです。

---

## システム構成

```
n8n → GitHub (src/content/blog/) → Netlify/Vercel自動デプロイ → サイト更新
```

1. n8nがMarkdownファイルを生成
2. GitHubの`main`ブランチへpush
3. Netlify/Vercelが自動的にビルド開始
4. `prebuild`スクリプトで`blog-posts-data.json`を自動生成
5. サイトに記事が反映

---

## 必須frontmatter項目

記事のMarkdownファイルには、以下のfrontmatterが**必須**です：

```yaml
---
title: "記事のタイトル"
lead: "記事の要約・リード文（150-300文字推奨）"
date: "2026-02-22"
category: "AI時代のキャリア"
---
```

### 各項目の説明

| 項目 | 必須 | 説明 | 例 |
|-----|------|------|-----|
| `title` | ✅ | 記事のタイトル | `"AI時代を生き抜く転職戦略"` |
| `lead` | ✅ | 記事の概要・リード文 | `"これからの時代、AIによる..."` |
| `date` | ✅ | 公開日（YYYY-MM-DD形式） | `"2026-02-22"` |
| `category` | ✅ | カテゴリ名（下記5種類から選択） | `"AI時代のキャリア"` |
| `affiliates` | ❌ | アフィリエイト情報（配列） | 後述 |

---

## カテゴリ一覧

記事は以下の**5つのカテゴリ**のいずれかに分類されます：

1. **マインドセット**
   - 心構え、考え方、生き方に関する記事
   - キーワード例: マインド、価値観、成長、変化、サバイバル

2. **ハイクラス転職**
   - 転職、年収アップ、キャリアアップに関する記事
   - キーワード例: 転職、エージェント、年収、外資、コンサル

3. **AI時代のキャリア**
   - AI、テクノロジー、自動化に関する記事
   - キーワード例: AI、人工知能、自動化、ChatGPT、DX

4. **職種別戦略**
   - 特定の職種に特化した戦略記事
   - キーワード例: エンジニア、デザイナー、営業、マーケター

5. **キャリア戦略**
   - スキルアップ、副業、独立などの戦略的記事
   - キーワード例: 戦略、スキルアップ、副業、フリーランス

---

## カテゴリの自動判定

n8nでカテゴリを自動判定したい場合は、以下のNode.jsスクリプトを使用できます：

### 使用方法

```bash
node scripts/auto-categorize.mjs "記事タイトル" "記事本文" "リード文(オプション)"
```

### n8nでの使用例

1. **Executeノード**を追加
2. コマンドを設定：
   ```bash
   node /path/to/scripts/auto-categorize.mjs "{{$json.title}}" "{{$json.content}}" "{{$json.lead}}"
   ```
3. 出力されたカテゴリ名を次のノードで使用

### 判定ロジック

- タイトル、本文、リード文からキーワードを抽出
- 各カテゴリのスコアを計算
- 最もスコアが高いカテゴリを選択
- タイトル内のキーワードには5倍の重み付け

---

## n8nワークフロー構成例

### 1. トリガー設定

- **Webhook** または **Schedule Trigger**で記事生成をトリガー

### 2. 記事生成

- **HTTPノード**や**AIノード**で記事を生成
- または、外部APIから記事を取得

### 3. カテゴリ判定（オプション）

```javascript
// Function Item ノードでの例
const title = $input.item.json.title;
const content = $input.item.json.content;
const lead = $input.item.json.lead;

// auto-categorize.mjsをインポートして使用
// または、簡易版の判定ロジックを直接実装
```

### 4. Markdownファイル生成

```javascript
const frontmatter = `---
title: "${title}"
lead: "${lead}"
date: "${new Date().toISOString().split('T')[0]}"
category: "${category}"
---

${content}`;

return { markdown: frontmatter };
```

### 5. GitHubへpush

- **GitHubノード**を使用
- リポジトリ: `your-username/your-repo`
- ファイルパス: `src/content/blog/${slug}.md`
- ブランチ: `main`
- コミットメッセージ: `Add new blog post: ${title}`

---

## ファイル命名規則

- ファイル名は**英数字・ハイフン・アンダースコアのみ**使用可能
- 推奨形式:
  - 日付ベース: `20260222.md`, `20260222-2.md`
  - スラッグベース: `ai-career-strategy.md`
- 日本語ファイル名は**使用不可**

---

## デプロイ確認

1. GitHubへpush後、Netlify/Vercelのダッシュボードで自動デプロイを確認
2. ビルドログで以下を確認：
   ```
   > node scripts/generate-blog-data.mjs
   Generated blog data JSON with XX posts
   ```
3. デプロイ完了後、サイトで記事を確認

---

## トラブルシューティング

### 記事が表示されない

1. frontmatterの形式が正しいか確認
2. ファイルが`src/content/blog/`に配置されているか確認
3. Netlify/Vercelのビルドログでエラーを確認

### カテゴリが表示されない

- カテゴリ名が以下のいずれかか確認：
  - `マインドセット`
  - `ハイクラス転職`
  - `AI時代のキャリア`
  - `職種別戦略`
  - `キャリア戦略`

### ビルドエラー

- frontmatterのYAML形式が正しいか確認
- 引用符のエスケープ処理を確認

---

## セキュリティ注意事項

- GitHubのアクセストークンは**絶対に公開しない**
- n8nの環境変数に安全に保存
- リポジトリはプライベートに設定推奨

---

## サンプルn8nワークフロー（JSON）

```json
{
  "name": "Blog Auto Post",
  "nodes": [
    {
      "parameters": {
        "path": "blog-webhook",
        "responseMode": "onReceived",
        "options": {}
      },
      "name": "Webhook",
      "type": "n8n-nodes-base.webhook",
      "position": [250, 300]
    },
    {
      "parameters": {
        "command": "node scripts/auto-categorize.mjs \"={{$json.title}}\" \"={{$json.content}}\""
      },
      "name": "Categorize",
      "type": "n8n-nodes-base.executeCommand",
      "position": [450, 300]
    },
    {
      "parameters": {
        "owner": "your-username",
        "repository": "your-repo",
        "filePath": "=src/content/blog/{{$json.slug}}.md",
        "fileContent": "={{$json.markdown}}",
        "commitMessage": "=Add: {{$json.title}}",
        "branch": "main"
      },
      "name": "GitHub",
      "type": "n8n-nodes-base.github",
      "position": [650, 300]
    }
  ]
}
```

---

## まとめ

- ✅ `prebuild`で自動的に記事データが更新される
- ✅ GitHubへのpushで自動デプロイ
- ✅ カテゴリ自動判定スクリプト利用可能
- ✅ 手動介入は不要

n8nから正しいフォーマットでMarkdownファイルをpushすれば、残りは自動的に処理されます。
