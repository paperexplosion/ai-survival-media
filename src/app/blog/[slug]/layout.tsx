import type { Metadata } from "next";
import { getBlogPost } from "@/lib/blog-posts";

// 記事ページごとの title / description / OGP / canonical を出力する。
// page.tsx は "use client" のため generateMetadata を置けず、サーバーコンポーネントの layout で受け持つ。
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return {};

  const title = `${post.title} | AI Documentary Report`;
  const description = (post.lead || "").replace(/\s+/g, " ").trim().slice(0, 120);
  const url = `/blog/${post.slug}`;
  const images = post.image ? [post.image] : undefined; // 相対パスは metadataBase で絶対URLに解決される

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: "article", title, description, url, publishedTime: post.date, images },
    twitter: { card: "summary_large_image", title, description, images },
  };
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
