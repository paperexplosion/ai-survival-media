// Google ニュース用サイトマップ（公開から48時間以内の記事のみ。Google の仕様）
import { getAllBlogPosts } from '@/lib/blog-posts';
import { SITE_NAME, SITE_URL, escapeXml, toIsoJst } from '@/lib/seo';

export const revalidate = 3600;

export function GET() {
  const now = Date.now();
  const recent = getAllBlogPosts().filter((p) => {
    const t = new Date(toIsoJst(p.date) || p.date).getTime();
    return !isNaN(t) && now - t <= 48 * 3600 * 1000 && now - t >= -3600 * 1000;
  });
  const urls = recent.map((p) => `  <url>
    <loc>${SITE_URL}/blog/${p.slug}</loc>
    <news:news>
      <news:publication><news:name>${escapeXml(SITE_NAME)}</news:name><news:language>ja</news:language></news:publication>
      <news:publication_date>${toIsoJst(p.date)}</news:publication_date>
      <news:title>${escapeXml(p.title.replace(/<br\s*\/?>/gi, ' '))}</news:title>
    </news:news>
  </url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${urls}
</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=900' } });
}
