import type { Metadata } from "next";
import { getBlogPost } from "@/lib/blog-posts";
import {
  AUTHOR_URL, EDITOR_LD, ORGANIZATION_LD, SITE_NAME, SITE_URL,
  absUrl, categorySlug, extractFaq, plain, postType, toIsoJst,
} from "@/lib/seo";

// 記事ページごとの title / description / OGP / canonical と、構造化データ（JSON-LD）を出力する。
// page.tsx は "use client" のため generateMetadata を置けず、サーバーコンポーネントの layout で受け持つ。
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return {};

  const title = `${post.title} | ${SITE_NAME}`;
  const description = (post.lead || "").replace(/\s+/g, " ").trim().slice(0, 120);
  const url = `/blog/${post.slug}`;
  const images = post.image ? [post.image] : undefined; // 相対パスは metadataBase で絶対URLに解決される
  const published = toIsoJst(post.date);
  const modified = toIsoJst(post.updated) || published;
  const section = post.category?.replace(/^\S+\s/, "");

  return {
    title,
    description,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    alternates: { canonical: url, types: { 'application/rss+xml': [{ url: '/feed.xml', title: SITE_NAME }] } },
    openGraph: {
      type: "article", title, description, url, images, siteName: SITE_NAME, locale: "ja_JP",
      publishedTime: published, modifiedTime: modified, authors: [AUTHOR_URL], section,
    },
    twitter: { card: "summary_large_image", title, description, images },
  };
}

function jsonLd(slug: string) {
  const post = getBlogPost(slug);
  if (!post) return [];
  const url = `${SITE_URL}/blog/${post.slug}`;
  const published = toIsoJst(post.date);
  const kind = postType(post);
  const cat = categorySlug(post.category);
  const body = plain(post.content.map((s) => s.text).join(" "));
  const graph: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": kind === "news" ? "NewsArticle" : "Article",
      headline: post.title.replace(/<br\s*\/?>/gi, " ").slice(0, 110),
      description: (post.lead || "").replace(/\s+/g, " ").trim(),
      image: post.image ? [absUrl(post.image)] : undefined,
      datePublished: published,
      dateModified: toIsoJst(post.updated) || published,
      inLanguage: "ja",
      articleSection: post.category?.replace(/^\S+\s/, ""),
      wordCount: body.length,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      // 表示は「記事監修：鈴木隆文」のみ。書き手はメディア（Organization）、監修者を editor として示す
      author: ORGANIZATION_LD,
      editor: EDITOR_LD,
      publisher: ORGANIZATION_LD,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "レポート", item: `${SITE_URL}/blog` },
        ...(cat ? [{ "@type": "ListItem", position: 3, name: post.category.replace(/^\S+\s/, ""), item: `${SITE_URL}/blog/category/${cat}` }] : []),
        { "@type": "ListItem", position: cat ? 4 : 3, name: post.title.replace(/<br\s*\/?>/gi, " "), item: url },
      ],
    },
  ];
  const faq = extractFaq(post);
  if (faq.length) {
    graph.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })),
    });
  }
  return graph;
}

export default function BlogPostLayout({ children, params }: { children: React.ReactNode; params: { slug: string } }) {
  const data = jsonLd(params.slug);
  return (
    <>
      {data.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d).replace(/</g, "\\u003c") }} />
      ))}
      {children}
    </>
  );
}
