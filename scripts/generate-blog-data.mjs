import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDirectory = path.join(__dirname, '../src/content/blog');
const outputFile = path.join(__dirname, '../src/lib/blog-posts-data.json');
const mergedFile = path.join(__dirname, '../src/lib/merged-posts.json');
// 近似重複として代表記事へ統合した記事（md は残すが、サイトのデータには入れない）
const MERGED = fs.existsSync(mergedFile) ? JSON.parse(fs.readFileSync(mergedFile, 'utf-8')).redirects || {} : {};

function parseMarkdownContent(markdownContent) {
    const sections = [];
    const lines = markdownContent.split('\n');

    let currentSection = '';
    let currentText = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (line.startsWith('## ')) {
            if (currentSection) {
                sections.push({
                    section: currentSection,
                    text: currentText.join('\n').trim()
                });
            }
            currentSection = line.replace('## ', '').trim();
            currentText = [];
        } else if (line.startsWith('### ')) {
            if (currentSection) {
                sections.push({
                    section: currentSection,
                    text: currentText.join('\n').trim()
                });
            }
            currentSection = line.replace('### ', '').trim();
            currentText = [];
        } else {
            currentText.push(line);
        }
    }

    if (currentSection) {
        sections.push({
            section: currentSection,
            text: currentText.join('\n').trim()
        });
    } else if (currentText.length > 0) {
        sections.push({
            section: '',
            text: currentText.join('\n').trim()
        });
    }

    return sections;
}

function getAllMarkdownFiles() {
    if (!fs.existsSync(contentDirectory)) {
        console.error('Content directory does not exist:', contentDirectory);
        return [];
    }

    const files = fs.readdirSync(contentDirectory);
    const posts = [];

    for (const filename of files) {
        if (!filename.endsWith('.md')) continue;

        const filepath = path.join(contentDirectory, filename);
        const fileContent = fs.readFileSync(filepath, 'utf-8');
        const { data, content } = matter(fileContent);

        const slug = filename.replace('.md', '');
        if (MERGED[slug]) continue;
        const wordCount = content.split(/\s+/).length;
        const readTime = Math.ceil(wordCount / 400);

        posts.push({
            _body: content,
            slug,
            title: data.title || '',
            lead: data.lead || '',
            preamble: data.preamble || undefined,
            type: data.type || undefined,
            layer: data.layer || undefined,
            updated: data.updated || undefined,
            date: data.date || '',
            readTime: `${readTime}分`,
            category: data.category || '',
            image: data.image || undefined,
            content: parseMarkdownContent(content),
            affiliates: data.affiliates || undefined
        });
    }

    return posts;
}

// ─── 関連記事の選定（記事ページ下部「おすすめ記事」8本） ───────────────────────
// 新しさ順ではなく「内容の近さ」で選ぶ。
//   1. 記事同士のリンク（どちらかが本文でリンクしている）
//   2. 同じ解説記事（ハブ）にリンクしている＝同じハブの仲間
//   3. 同じカテゴリ
//   4. キーワードの一致（見出し・タイトル・リードの固有名詞や語。どこにでも出る語は重みを下げる）
//   5. ニュースから解説記事（type: seo）へは少し優先。日付が近いものは同点のときだけ前に。
// 最後に「どの記事の関連にも出てこない記事」を、いちばん近い記事の8枠目に差し込んで孤立をなくす。
const RELATED_COUNT = 8;
const STOP = new Set(['ai', 'the', 'and', 'for', 'with', 'from', 'into', 'your', 'you', 'its', 'are', 'was', 'that', 'this', 'how', 'why', 'what', 'new', 'report', 'survival', 'documentary', 'news', 'レポート', 'ニュース', 'サバイバル', 'テクノロジー', 'ドキュメンタリー']);

function postKind(p) {
    if (p.type) return p.type;
    if (p.slug.startsWith('product-')) return 'product';
    return /^\d{8}/.test(p.slug) ? 'news' : 'seo';
}

function tokens(text, withKanji = true) {
    const out = new Set();
    const t = text.replace(/<br\s*\/?>/gi, ' ').replace(/https?:\/\/\S+/g, ' ');
    for (const m of t.matchAll(/[A-Za-z][A-Za-z0-9+#.-]*[A-Za-z0-9+#]/g)) {
        const w = m[0].toLowerCase();
        if (w.length >= 2 && !STOP.has(w)) out.add(w);
    }
    for (const m of t.matchAll(/[ァ-ヴー]{3,}/g)) if (!STOP.has(m[0])) out.add(m[0]);
    if (withKanji) for (const m of t.matchAll(/[一-龥々]{2,}/g)) {
        const w = m[0];
        if (w.length <= 4) out.add(w);
        for (let i = 0; i + 2 <= w.length; i++) out.add(w.slice(i, i + 2));
    }
    return out;
}

function linkedSlugs(body, known) {
    const out = new Set();
    for (const m of body.matchAll(/(?:ai-survival\.org)?\/blog\/([A-Za-z0-9-]+)/g)) {
        const s = MERGED[m[1]] || m[1];
        if (known.has(s)) out.add(s);
    }
    return out;
}

function computeRelated(all) {
    const posts = all.filter((p) => p.date && p.slug !== 'README');
    const known = new Set(posts.map((p) => p.slug));
    const info = new Map();
    const df = new Map();
    for (const p of posts) {
        const heads = p.content.map((c) => c.section).join(' ');
        // タイトルと見出しは漢字語も含めて、リードは固有名詞（英字・カタカナ）だけを拾う
        const toks = new Set([...tokens(`${p.title} ${heads}`), ...tokens(p.lead, false)]);
        for (const w of toks) df.set(w, (df.get(w) || 0) + 1);
        info.set(p.slug, { p, toks, links: linkedSlugs(p._body, known), kind: postKind(p), time: new Date(p.date).getTime() || 0 });
    }
    const N = posts.length;
    const idf = (w) => {
        const d = df.get(w) || 1;
        return d > N * 0.2 ? 0 : Math.log(N / d);
    };
    const guides = new Set([...info.values()].filter((x) => x.kind === 'seo').map((x) => x.p.slug));

    function score(a, b) {
        const A = info.get(a), B = info.get(b);
        // キーワードの近さ：両方に出てくる「珍しい語」（全記事の1割強未満にしか出ない語）の重みの合計。上限10
        let shared = 0;
        const [small, big] = A.toks.size < B.toks.size ? [A.toks, B.toks] : [B.toks, A.toks];
        for (const w of small) if (big.has(w) && idf(w) >= 2) shared += idf(w);
        let s = Math.min(6, shared * 0.4);
        if (A.links.has(b) || B.links.has(a)) s += 4;                          // 記事同士のリンク
        const hubsA = [...A.links].filter((x) => guides.has(x));
        if (hubsA.some((h) => B.links.has(h) || h === b) || [...B.links].some((h) => guides.has(h) && h === a)) s += 2; // 同じハブ
        if (A.p.category && A.p.category === B.p.category) s += 2.5;           // 同じカテゴリ
        if (A.kind === 'news' && B.kind === 'seo') s += 1;                     // ニュース → 解説記事
        const days = Math.abs(A.time - B.time) / 86400000;
        s += 0.3 * Math.exp(-days / 30);                                       // 同点に近いときだけ効く新しさ
        return s;
    }

    const ranked = new Map();
    for (const a of info.keys()) {
        const list = [...info.keys()].filter((b) => b !== a).map((b) => [b, score(a, b)]).sort((x, y) => y[1] - x[1]);
        ranked.set(a, list);
        // 同じ日のニュースは最大2本まで（似た顔ぶれの号が並ばないように）
        const day = info.get(a).p.date.slice(0, 10);
        const picked = [];
        let sameDay = 0;
        for (const [b] of list) {
            const B = info.get(b);
            if (B.kind === 'news' && B.p.date.slice(0, 10) === day) {
                if (sameDay >= 2) continue;
                sameDay++;
            }
            picked.push(b);
            if (picked.length >= RELATED_COUNT) break;
        }
        info.get(a).related = picked;
    }

    // 孤立の解消：どこからも関連に出ない記事を、いちばん近い記事の8枠目に入れる（1記事につき差し込みは1本まで）
    const inbound = new Map([...info.keys()].map((s) => [s, 0]));
    for (const x of info.values()) {
        for (const b of x.related) inbound.set(b, inbound.get(b) + 1);
        for (const b of x.links) if (inbound.has(b)) inbound.set(b, inbound.get(b) + 1);
    }
    const forced = new Set();
    const orphansBefore = [...inbound].filter(([, n]) => n === 0).map(([s]) => s);
    for (const o of orphansBefore) {
        const host = [...info.keys()]
            .filter((h) => h !== o && !forced.has(h))
            .map((h) => [h, score(h, o)])
            .sort((x, y) => y[1] - x[1])[0];
        if (!host) continue;
        const H = info.get(host[0]);
        const dropped = H.related[RELATED_COUNT - 1];
        if (dropped && inbound.get(dropped) <= 1) continue; // 押し出すと別の孤立が生まれるなら避ける
        H.related = [...H.related.slice(0, RELATED_COUNT - 1), o];
        if (dropped) inbound.set(dropped, inbound.get(dropped) - 1);
        inbound.set(o, 1);
        forced.add(host[0]);
    }
    const orphansAfter = [...inbound].filter(([, n]) => n === 0).map(([s]) => s);
    for (const x of info.values()) x.p.related = x.related;
    return { orphansBefore: orphansBefore.length, orphansAfter: orphansAfter.length, orphans: orphansAfter };
}

const posts = getAllMarkdownFiles();
const rel = computeRelated(posts);
for (const p of posts) delete p._body;

fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2), 'utf-8');

console.log(`Generated blog data JSON with ${posts.length} posts`);
console.log(`Output: ${outputFile}`);
console.log(`Skipped ${Object.keys(MERGED).length} merged posts (redirected to representatives)`);
console.log(`Orphan posts (no inbound link or related slot): before fill ${rel.orphansBefore} -> after ${rel.orphansAfter}${rel.orphans.length ? ' : ' + rel.orphans.join(', ') : ''}`);
