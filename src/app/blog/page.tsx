"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { getAllBlogPosts } from "@/lib/blog-posts";

export default function BlogPage() {
    const router = useRouter();
    const posts = getAllBlogPosts();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen py-12 px-6 relative z-10"
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
                        <p className="text-2xl md:text-3xl font-bold text-neon-cyan mb-2">未来予測レポート</p>
                        <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-blue bg-clip-text text-transparent">
                            AIサバイバル・インテリジェンス
                        </h1>
                    </div>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        変化の時代に必要な洞察と戦略をお届けします
                    </p>
                </motion.div>

                <div className="space-y-6">
                    {posts.map((post, index) => (
                        <motion.article
                            key={post.slug}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            onClick={() => router.push(`/blog/${post.slug}`)}
                            className="glass rounded-3xl p-8 neon-border hover:bg-white/5 transition-all cursor-pointer group"
                        >
                            <div className="flex flex-col md:flex-row md:items-start gap-6">
                                <div className="flex-1">
                                    <div className="flex items-center gap-4 mb-3">
                                        <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 text-neon-cyan text-xs font-bold">
                                            {post.category}
                                        </span>
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {new Date(post.date).toLocaleDateString('ja-JP', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {post.readTime}
                                            </span>
                                        </div>
                                    </div>

                                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground group-hover:text-neon-cyan transition-colors">
                                        {post.title}
                                    </h2>

                                    <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                                        {post.lead}
                                    </p>

                                    <div className="flex items-center gap-2 text-neon-cyan font-bold group-hover:gap-4 transition-all">
                                        <span>続きを読む</span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </motion.article>
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
