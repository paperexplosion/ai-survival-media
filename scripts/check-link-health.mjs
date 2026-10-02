// 公開のたび（mainへのpush時）に内部リンク・SEO構造の健全性を点検するスクリプト。
// 2026-10-02 ティム・バーナーズ＝リー番頭が新設。
//
// 点検内容:
//   1. 孤立記事 … generate-blog-data.mjs が related を計算した「後」でも、
//      どの記事からも関連記事として挙げられていない記事がないか
//   2. 壊れた内部リンク … 本文中の /blog/<slug> が実在しないslugを指していないか
//   3. タイトル・メタディスクリプション(lead)の欠落
//
// 外部APIキーは使わない。失敗してもビルド・公開を止めないよう、常に exit 0 で終わる。
// 結果は Markdown レポートとして標準出力 + REPORT_FILE (既定: link-health-report.md) に書き出す。

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDirectory = path.join(__dirname, '../src/content/blog');
const dataFile = path.join(__dirname, '../src/lib/blog-posts-data.json');
const mergedFile = path.join(__dirname, '../src/lib/merged-posts.json');
const reportFile = process.env.REPORT_FILE
    ? path.join(__dirname, '..', process.env.REPORT_FILE)
    : path.join(__dirname, '../link-health-report.md');

const MERGED = fs.existsSync(mergedFile) ? JSON.parse(fs.readFileSync(mergedFile, 'utf-8')).redirects || {} : {};

function loadMarkdownPosts() {
    const files = fs.readdirSync(contentDirectory).filter((f) => f.endsWith('.md'));
    const posts = [];
    for (const filename of files) {
        const slug = filename.replace('.md', '');
        if (MERGED[slug]) continue; // 統合済み記事は対象外（generate-blog-data.mjsと同じ扱い）
        if (slug === 'README') continue; // 記事ではなく運用メモのテンプレートファイル
        const filepath = path.join(contentDirectory, filename);
        const raw = fs.readFileSync(filepath, 'utf-8');
        const { data, content } = matter(raw);
        posts.push({ slug, filename, data, body: content });
    }
    return posts;
}

function main() {
    const mdPosts = loadMarkdownPosts();
    const knownSlugs = new Set(mdPosts.map((p) => p.slug));

    // ① タイトル・メタディスクリプション(lead)の欠落チェック
    const missingMeta = [];
    for (const p of mdPosts) {
        const issues = [];
        if (!p.data.title || !String(p.data.title).trim()) issues.push('title');
        if (!p.data.lead || !String(p.data.lead).trim()) issues.push('lead(メタディスクリプション)');
        if (!p.data.date || !String(p.data.date).trim()) issues.push('date');
        if (issues.length) missingMeta.push({ slug: p.slug, issues });
    }

    // ② 壊れた内部リンクチェック（本文中の /blog/<slug>）
    const brokenLinks = [];
    const linkPattern = /\(?(?:https?:\/\/)?(?:ai-survival\.org)?\/blog\/([A-Za-z0-9-]+)\)?/g;
    for (const p of mdPosts) {
        const seen = new Set();
        for (const m of p.body.matchAll(linkPattern)) {
            const target = m[1];
            if (seen.has(target)) continue;
            seen.add(target);
            const resolved = MERGED[target] || target;
            if (!knownSlugs.has(resolved)) {
                brokenLinks.push({ from: p.slug, to: target });
            }
        }
    }

    // ③ 孤立記事チェック（generate-blog-data.mjsが生成したrelatedを使う。
    //    このJSONは本スクリプトの直前に node scripts/generate-blog-data.mjs を
    //    実行して最新化しておく前提）
    let orphans = [];
    let dataAvailable = false;
    if (fs.existsSync(dataFile)) {
        dataAvailable = true;
        const posts = JSON.parse(fs.readFileSync(dataFile, 'utf-8')).filter((p) => p.slug !== 'README');
        const inbound = new Map(posts.map((p) => [p.slug, 0]));
        for (const p of posts) {
            for (const b of p.related || []) {
                if (inbound.has(b)) inbound.set(b, inbound.get(b) + 1);
            }
        }
        orphans = [...inbound].filter(([, n]) => n === 0).map(([s]) => s);
    }

    // レポート組み立て
    const hasIssues = missingMeta.length > 0 || brokenLinks.length > 0 || orphans.length > 0;
    const lines = [];
    lines.push(`## 内部リンク・SEO構造ヘルスチェック（${new Date().toISOString().slice(0, 16).replace('T', ' ')} UTC）`);
    lines.push('');
    lines.push(hasIssues ? '**結果: 要確認の項目があります**' : '**結果: 問題なし**');
    lines.push('');
    lines.push(`- 対象記事数: ${mdPosts.length}`);
    lines.push(`- 孤立記事（どの記事からも関連記事に挙げられていない）: ${dataAvailable ? orphans.length : '判定不可（blog-posts-data.json未生成）'}`);
    lines.push(`- 壊れた内部リンク（/blog/の参照先が存在しない）: ${brokenLinks.length}`);
    lines.push(`- タイトル/メタディスクリプション/日付が欠落している記事: ${missingMeta.length}`);
    lines.push('');

    if (orphans.length) {
        lines.push('### 孤立記事');
        for (const s of orphans) lines.push(`- \`${s}\``);
        lines.push('');
    }
    if (brokenLinks.length) {
        lines.push('### 壊れた内部リンク');
        for (const b of brokenLinks) lines.push(`- \`${b.from}\` が存在しない \`/blog/${b.to}\` にリンクしています`);
        lines.push('');
    }
    if (missingMeta.length) {
        lines.push('### タイトル・メタディスクリプション欠落');
        for (const m of missingMeta) lines.push(`- \`${m.slug}\`: ${m.issues.join(', ')} が未設定`);
        lines.push('');
    }
    if (!hasIssues) {
        lines.push('孤立記事・壊れたリンク・メタ情報欠落は見つかりませんでした。');
        lines.push('');
    }

    const report = lines.join('\n');
    console.log(report);
    fs.writeFileSync(reportFile, report, 'utf-8');
    console.log(`\nレポートを書き出しました: ${reportFile}`);

    // このチェックは通知のためのものであり、公開パイプライン自体は止めない
    process.exit(0);
}

main();
