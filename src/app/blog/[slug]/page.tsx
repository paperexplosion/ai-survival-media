// 記事ページ。サーバー側で「この記事」と「関連記事の一覧用データ」だけを取り出して、クライアント部品に渡す
// （以前は全記事の本文データ(数MB)がブラウザに送られていた）
import BlogPostView from "@/components/blog-post";
import { getAllBlogPosts, getBlogPost, getRelatedPosts, toCard } from "@/lib/blog-posts";

export function generateStaticParams() {
    return getAllBlogPosts().map((p) => ({ slug: p.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = getBlogPost(params.slug);
    return <BlogPostView post={post} related={post ? getRelatedPosts(post, 8).map(toCard) : []} />;
}
