// カテゴリ別の記事一覧（URLを持つページ。検索エンジンが「このテーマの記事群」をたどれるようにする）
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Calendar } from 'lucide-react';
import { getAllBlogPosts } from '@/lib/blog-posts';
import { CategoryBadge } from '@/components/category-badge';
import { convertGoogleDriveUrl } from '@/lib/google-drive-utils';
import { CATEGORY_SLUGS, CATEGORY_DESCRIPTIONS, SITE_NAME, SITE_URL, categoryBySlug } from '@/lib/seo';

export function generateStaticParams() {
  return Object.values(CATEGORY_SLUGS).map((category) => ({ category }));
}

export function generateMetadata({ params }: { params: { category: string } }): Metadata {
  const name = categoryBySlug(params.category);
  if (!name) return {};
  const label = name.replace(/^\S+\s/, '');
  const title = `${label}の記事一覧 | ${SITE_NAME}`;
  const description = CATEGORY_DESCRIPTIONS[params.category];
  const url = `/blog/category/${params.category}`;
  return { title, description, alternates: { canonical: url, types: { 'application/rss+xml': [{ url: '/feed.xml', title: SITE_NAME }] } }, openGraph: { title, description, url, type: 'website' } };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const name = categoryBySlug(params.category);
  if (!name) notFound();
  const posts = getAllBlogPosts().filter((p) => p.category === name);
  const label = name.replace(/^\S+\s/, '');
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${label}の記事一覧`,
    description: CATEGORY_DESCRIPTIONS[params.category],
    url: `${SITE_URL}/blog/category/${params.category}`,
    isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: posts.slice(0, 30).map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE_URL}/blog/${p.slug}` })),
    },
  };

  return (
    <main className="min-h-screen bg-[#0f172a] text-foreground pt-28 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld).replace(/</g, '\\u003c') }} />
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <nav className="text-sm text-gray-400 mb-6" aria-label="パンくず">
          <Link href="/" className="hover:text-neon-cyan">ホーム</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-neon-cyan">レポート</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-200">{label}</span>
        </nav>
        <h1 className="blog-heading text-3xl md:text-5xl font-black mb-4 text-white">{name}</h1>
        <p className="text-lg text-gray-300 mb-10 max-w-3xl leading-relaxed">{CATEGORY_DESCRIPTIONS[params.category]}</p>
        <p className="text-sm text-gray-400 mb-6">{posts.length}件の記事</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <article className="h-full bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]">
                {post.image && (
                  <div className="w-full h-48 overflow-hidden">
                    <img src={convertGoogleDriveUrl(post.image)} alt={post.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                )}
                <div className="p-6">
                  <div className="mb-3"><CategoryBadge category={post.category} variant="compact" /></div>
                  <h2 className="text-xl font-bold mb-3 text-white leading-tight group-hover:text-neon-cyan transition-colors">{post.title.replace(/<br\s*\/?>/gi, '｜')}</h2>
                  <p className="text-white text-sm leading-relaxed line-clamp-3 mb-4">{post.lead}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-2 text-neon-cyan text-sm font-bold">続きを読む<ArrowRight className="w-4 h-4" /></span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <h2 className="text-lg font-bold text-white mb-4">ほかのテーマ</h2>
          <div className="flex flex-wrap gap-3">
            {Object.entries(CATEGORY_SLUGS).filter(([, s]) => s !== params.category).map(([n, s]) => (
              <Link key={s} href={`/blog/category/${s}`} className="text-sm px-3 py-1 rounded-full border border-white/15 text-gray-300 hover:text-neon-cyan hover:border-neon-cyan/50">
                {n}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
