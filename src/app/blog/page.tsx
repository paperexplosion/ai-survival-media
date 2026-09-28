// 記事一覧。サーバー側で一覧用の軽いデータだけを作り、クライアント部品（絞り込み・アニメーション）に渡す
import BlogList from "@/components/blog-list";
import { getAllBlogPosts, toCard } from "@/lib/blog-posts";

export default function BlogPage() {
    return <BlogList allPosts={getAllBlogPosts().map(toCard)} />;
}
