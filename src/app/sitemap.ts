import { MetadataRoute } from 'next';
import { getAllBlogPosts } from '@/lib/blog-posts';
import { CATEGORY_SLUGS, SITE_URL, toIsoJst } from '@/lib/seo';

// 検索エンジンに渡すURLの一覧。
// 中身がブラウザ側でしか描画されないページ（/results・/comparison・/jobs/*）は noindex にしているので載せない。
// 近似重複として代表記事へリダイレクトした記事は getAllBlogPosts() の段階で外れている。
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_URL;

  const blogPosts = getAllBlogPosts();

  const blogUrls = blogPosts
    .filter((post) => post.date && post.slug !== 'README')
    .map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(toIsoJst(post.updated) || toIsoJst(post.date) || post.date),
      changeFrequency: 'monthly' as const,
      priority: /^\d{8}/.test(post.slug) ? 0.6 : 0.8,   // 解説記事・製品紹介はニュースより重く
    }));

  const categoryUrls = Object.values(CATEGORY_SLUGS).map((slug) => ({
    url: `${baseUrl}/blog/category/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }));

  const pages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${baseUrl}/diagnosis`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/armup`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${baseUrl}/escape`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
  ];

  return [...pages, ...categoryUrls, ...blogUrls];
}
