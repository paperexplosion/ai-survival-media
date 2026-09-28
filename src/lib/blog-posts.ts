import blogPostsData from './blog-posts-data.json';
import mergedPosts from './merged-posts.json';

export interface AffiliateLink {
    title: string;
    description: string;
    url: string;
    label: string;
    position: number;
}

export interface BlogPost {
    slug: string;
    title: string;
    lead: string;
    preamble?: string;
    type?: string;
    layer?: string;
    updated?: string;
    date: string;
    readTime: string;
    category: string;
    image?: string;
    content: {
        section: string;
        text: string;
        image?: string;
    }[];
    affiliates?: AffiliateLink[];
    related?: string[];   // 関連記事の slug（scripts/generate-blog-data.mjs が内容の近さで選ぶ）
}

// 近似重複として代表記事へ統合した記事（next.config.js でリダイレクト）は一覧から外す
const MERGED: Record<string, string> = mergedPosts.redirects;
const BLOG_POSTS: BlogPost[] = (blogPostsData as BlogPost[]).filter(post => !MERGED[post.slug]);

export function getBlogPost(slug: string): BlogPost | undefined {
    return BLOG_POSTS.find(post => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
    return BLOG_POSTS
        .filter(post => post.date && post.slug !== 'README')
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// 記事ページ下部の関連記事。generate-blog-data.mjs が選んだ順（内容の近さ）で返す。
// パイプラインが直接追記した直後など related が無い記事は、同カテゴリ→その他の新しい順で補う。
export function getRelatedPosts(post: BlogPost, count = 8): BlogPost[] {
    const all = getAllBlogPosts();
    const bySlug = new Map(all.map(p => [p.slug, p]));
    const picked: BlogPost[] = [];
    for (const s of post.related || []) {
        const p = bySlug.get(s);
        if (p && p.slug !== post.slug && !picked.includes(p)) picked.push(p);
    }
    const fallback = [
        ...all.filter(p => p.category === post.category),
        ...all.filter(p => p.category !== post.category),
    ];
    for (const p of fallback) {
        if (picked.length >= count) break;
        if (p.slug !== post.slug && !picked.includes(p)) picked.push(p);
    }
    return picked.slice(0, count);
}

// ブラウザに渡す一覧用の軽いデータ（本文を含めない）。全記事の本文(数MB)をブラウザに送らないため
export type PostCard = Pick<BlogPost, 'slug' | 'title' | 'lead' | 'date' | 'category' | 'image'>;

export function toCard(p: BlogPost): PostCard {
    return { slug: p.slug, title: p.title, lead: p.lead, date: p.date, category: p.category, ...(p.image ? { image: p.image } : {}) };
}
