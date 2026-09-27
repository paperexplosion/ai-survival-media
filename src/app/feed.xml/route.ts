// RSS 2.0 フィード（新しい順に50本）。フィードリーダー・ニュースアプリ・キュレーションサービス向け
import { getAllBlogPosts } from '@/lib/blog-posts';
import { SITE_NAME, SITE_URL, absUrl, escapeXml, toIsoJst, AUTHOR_NAME } from '@/lib/seo';

export const dynamic = 'force-static';

export function GET() {
  const posts = getAllBlogPosts().slice(0, 50);
  const items = posts.map((p) => {
    const url = `${SITE_URL}/blog/${p.slug}`;
    const date = new Date(toIsoJst(p.date) || p.date).toUTCString();
    const img = absUrl(p.image);
    return `    <item>
      <title>${escapeXml(p.title.replace(/<br\s*\/?>/gi, ' '))}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${date}</pubDate>
      <dc:creator>${escapeXml(AUTHOR_NAME)}</dc:creator>
      <category>${escapeXml((p.category || '').replace(/^\S+\s/, ''))}</category>
      <description>${escapeXml(p.lead || '')}</description>${img ? `\n      <enclosure url="${escapeXml(img)}" type="${img.endsWith('.png') ? 'image/png' : 'image/jpeg'}" length="0" />\n      <media:content url="${escapeXml(img)}" medium="image" />` : ''}
    </item>`;
  }).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>${SITE_NAME}</title>
    <link>${SITE_URL}</link>
    <description>AIと人間の共存を記録する。AIによって人間がどう変わるのかを観察・記録するメディア。</description>
    <language>ja</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8', 'Cache-Control': 'public, max-age=600' } });
}
