import blogPostsData from './blog-posts-data.json';

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
    date: string;
    readTime: string;
    category: string;
    content: {
        section: string;
        text: string;
    }[];
    affiliates?: AffiliateLink[];
}

const BLOG_POSTS: BlogPost[] = blogPostsData as BlogPost[];

export function getBlogPost(slug: string): BlogPost | undefined {
    return BLOG_POSTS.find(post => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
    return BLOG_POSTS
        .filter(post => post.date && post.slug !== 'README')
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
