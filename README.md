# AIサバイバル・インテリジェンス

AI時代を生き抜くための戦略的インテリジェンス診断サイト

## 独自ドメイン対応状況

このプロジェクトは **ai-survival.org** ドメイン向けに最適化されています。

### 実装済みのSEO対策

#### 1. メタデータの最適化
- サイトタイトル、ディスクリプション
- Open Graph (OG) タグ
- Twitter Card メタデータ
- Canonical URL設定（`https://ai-survival.org`）

#### 2. 検索エンジン対策
- **robots.txt** - 検索エンジンのクロール制御
- **sitemap.xml** - 全ページの自動サイトマップ生成
- **構造化データ (JSON-LD)** - 検索結果の表示強化

#### 3. 広告・分析用プレースホルダー
以下のプレースホルダーが `src/app/layout.tsx` に設定されています：

```typescript
// Google AdSense
<script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
  crossOrigin="anonymous"
/>

// Google Analytics
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
/>
```

**設定手順：**
1. Google AdSenseアカウントを作成し、サイトを登録
2. AdSense管理画面から「ca-pub-」で始まるクライアントIDを取得
3. `layout.tsx` の `ca-pub-XXXXXXXXXXXXXXXX` を実際のIDに置き換え
4. Google Analyticsアカウントを作成し、プロパティを設定
5. 測定IDを取得し、`G-XXXXXXXXXX` を実際のIDに置き換え

## 開発環境のセットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# プロダクションビルド
npm run build
```

## ドメイン設定

### Netlifyでのデプロイ手順

1. **Netlifyにプロジェクトをデプロイ**
   - Netlifyダッシュボードで「Add new site」
   - GitHubリポジトリを接続
   - ビルド設定：
     - Build command: `npm run build`
     - Publish directory: `.next`

2. **独自ドメインの設定**
   - Netlifyダッシュボードで「Domain settings」
   - 「Add custom domain」をクリック
   - `ai-survival.org` を入力
   - DNSレコードの設定手順に従う

3. **環境変数の設定**
   - Netlifyダッシュボードで「Site settings」→「Environment variables」
   - 以下の変数を設定：
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### DNS設定（お名前.comなど）

DNSプロバイダーで以下のレコードを追加：

```
Type: A
Name: @
Value: 75.2.60.5 (NetlifyのIPアドレス)

Type: CNAME
Name: www
Value: your-site-name.netlify.app
```

## OGイメージの設定

現在、OGイメージは `/og-image.png` を参照しています。

**推奨サイズ：** 1200 x 630px

画像を `public/og-image.png` に配置してください。

## プロジェクト構成

- `src/app/` - Next.js App Router ページ
- `src/components/` - Reactコンポーネント
- `src/lib/` - ユーティリティ関数、定数
- `src/content/blog/` - ブログ記事（Markdown形式）
- `supabase/migrations/` - データベースマイグレーション
- `scripts/` - ビルドスクリプト

## ブログ記事の管理

### 記事の追加方法

ブログ記事はMarkdown形式で管理されています。

1. `src/content/blog/` ディレクトリに新しい `.md` ファイルを作成
2. Frontmatterでメタデータを記述
3. `##` 見出しでセクションを分割

**テンプレート例：**

```markdown
---
title: "記事のタイトル"
lead: "記事の要約文"
date: "2026-01-27"
readTime: "8分"
category: "AI時代のキャリア"
---

## セクション1

本文をここに書きます。

## セクション2

次のセクションです。
```

詳細は `src/content/blog/README.md` を参照してください。

### ビルドプロセス

- `npm run dev` または `npm run build` 実行時に、自動的にMarkdownファイルからJSONファイルが生成されます
- 記事を追加・編集した後は、開発サーバーを再起動してください

## 主要機能

- **職業タイプ診断** - 12の職業タイプを診断
- **パーソナライズされた結果** - レーダーチャート、アクションプラン
- **ソムリエ推薦** - キャリアタイプ別の最適なサービス提案
- **ブログ機能** - AI時代の戦略レポート（Markdown管理）

## 技術スタック

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Supabase (データベース)

## ライセンス

All rights reserved.
