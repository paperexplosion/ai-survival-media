"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { getAllBlogPosts } from "@/lib/blog-posts";
import { convertGoogleDriveUrl } from "@/lib/google-drive-utils";
import DiagnosisCTABanner from "@/components/diagnosis-cta-banner";
import { CategoryBadge, CATEGORY_INFO } from "@/components/category-badge";
import { useState } from "react";

export default function BlogPage() {
    const router = useRouter();
    const allPosts = getAllBlogPosts();
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const posts = selectedCategory
        ? allPosts.filter(post => post.category === selectedCategory)
        : allPosts;

    const categories = Object.keys(CATEGORY_INFO);
    const categoryCounts = categories.reduce((acc, cat) => {
        acc[cat] = allPosts.filter(p => p.category === cat).length;
        return acc;
    }, {} as Record<string, number>);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen py-12 px-6 relative z-10 pt-32 bg-[#0f172a]"
        >
            <div className="max-w-5xl mx-auto">
                <motion.button
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    onClick={() => router.push("/")}
                    className="flex items-center gap-2 text-neon-cyan hover:text-neon-blue transition-colors mb-8 group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span>トップに戻る</span>
                </motion.button>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-12"
                >
                    <div className="mb-4">
                        <p className="text-2xl md:text-3xl font-bold text-neon-cyan mb-2">未来予測レポート - 全記事</p>
                        <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-blue bg-clip-text text-transparent">
                            AIサバイバル・インテリジェンス
                        </h1>
                    </div>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        AI時代を生き抜くための全{allPosts.length}件のレポートを閲覧できます
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="mb-8"
                >
                    <div className="flex flex-wrap gap-3 justify-center">
                        <button
                            onClick={() => setSelectedCategory(null)}
                            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                                selectedCategory === null
                                    ? 'bg-gradient-to-r from-neon-cyan to-neon-blue text-white shadow-[0_0_20px_rgba(34,211,238,0.5)]'
                                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                            }`}
                        >
                            すべて ({allPosts.length})
                        </button>
                        {categories.map((cat) => {
                            const count = categoryCounts[cat];
                            if (count === 0) return null;

                            return (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                                        selectedCategory === cat
                                            ? 'bg-gradient-to-r from-neon-cyan to-neon-blue text-white shadow-[0_0_20px_rgba(34,211,238,0.5)]'
                                            : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                                    }`}
                                >
                                    <CategoryBadge category={cat} variant="compact" className="bg-transparent" />
                                    <span className="ml-2">({count})</span>
                                </button>
                            );
                        })}
                    </div>
                    {selectedCategory && (
                        <p className="text-center text-sm text-gray-400 mt-4">
                            {posts.length}件の記事を表示中
                        </p>
                    )}
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post, index) => (
                        <>
                            <motion.article
                                key={post.slug}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                onClick={() => router.push(`/blog/${post.slug}`)}
                                className="group cursor-pointer bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]"
                            >
                                {post.image && (
                                    <div className="w-full h-48 md:h-64 overflow-hidden">
                                        <img
                                            src={convertGoogleDriveUrl(post.image)}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                )}
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <CategoryBadge category={post.category} variant="compact" />
                                    </div>

                                    <h2 className="text-xl md:text-2xl font-bold mb-3 text-white leading-tight group-hover:text-neon-cyan transition-colors">
                                        {post.title.replace(/<br\s*\/?>/gi, '｜')}
                                    </h2>

                                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">
                                        {post.lead}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-gray-500 flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {new Date(post.date).toLocaleDateString('ja-JP', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </span>
                                        <div className="flex items-center gap-2 text-neon-cyan text-sm font-bold group-hover:gap-3 transition-all">
                                            <span>続きを読む</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </motion.article>

                            {index === 3 && (
                                <motion.div
                                    key="cta-banner"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + (index + 1) * 0.1 }}
                                    className="md:col-span-2 lg:col-span-3"
                                >
                                    <DiagnosisCTABanner />
                                </motion.div>
                            )}
                        </>
                    ))}
                </div>

                {posts.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-center py-16"
                    >
                        <p className="text-muted-foreground">記事はまだありません</p>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}
