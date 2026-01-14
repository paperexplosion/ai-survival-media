"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Sparkles } from "lucide-react";
import { getBlogPost } from "@/lib/blog-posts";
import { Suspense } from "react";

function BlogPostContent() {
    const params = useParams();
    const router = useRouter();
    const slug = params.slug as string;
    const post = getBlogPost(slug);

    if (!post) {
        return (
            <div className="min-h-screen py-12 px-6 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">記事が見つかりません</h1>
                    <button
                        onClick={() => router.push("/blog")}
                        className="px-6 py-3 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full text-white font-bold"
                    >
                        ブログ一覧に戻る
                    </button>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen py-12 px-6 relative z-10"
        >
            <div className="max-w-4xl mx-auto">
                <motion.button
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    onClick={() => router.push("/blog")}
                    className="flex items-center gap-2 text-neon-cyan hover:text-neon-blue transition-colors mb-8 group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span>記事一覧に戻る</span>
                </motion.button>

                <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass rounded-3xl p-8 md:p-12 mb-8 neon-border"
                >
                    <div className="mb-6">
                        <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 text-neon-cyan text-xs font-bold mb-4">
                            {post.category}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-black mb-6 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-blue bg-clip-text text-transparent leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
                            <span className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {new Date(post.date).toLocaleDateString('ja-JP', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                {post.readTime}
                            </span>
                        </div>
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none mb-12">
                        <div className="text-lg text-muted-foreground leading-relaxed mb-8 p-6 rounded-xl bg-white/5 border border-white/10">
                            {post.lead}
                        </div>

                        {post.content.map((section, index) => {
                            const keywords = ['審美眼', '強化外骨格', '平均点の洪水', 'DX事務エバンジェリスト', '翻訳力', '想像力', '調整', '処理', 'インテリジェンス'];
                            let formattedText = section.text;

                            keywords.forEach(keyword => {
                                const regex = new RegExp(`(${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'g');
                                formattedText = formattedText.replace(regex, '<mark class="bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 text-neon-cyan px-1 rounded">$1</mark>');
                            });

                            const shouldShowImage = post.slug === 'post-03' && index === 1;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="mb-8"
                                >
                                    <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                                        <span className="w-2 h-2 rounded-full bg-neon-cyan"></span>
                                        {section.section}
                                    </h2>
                                    <div className="text-muted-foreground leading-relaxed whitespace-pre-line" dangerouslySetInnerHTML={{ __html: formattedText }} />

                                    {shouldShowImage && (
                                        <div className="my-8 rounded-2xl overflow-hidden border border-white/10">
                                            <div className="aspect-video bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 flex items-center justify-center relative">
                                                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
                                                <div className="relative text-center px-8">
                                                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple flex items-center justify-center">
                                                        <Sparkles className="w-10 h-10 text-white" />
                                                    </div>
                                                    <p className="text-sm text-muted-foreground italic">AIと人間が共生する未来のクリエイティブ・オフィス</p>
                                                    <p className="text-xs text-muted-foreground/60 mt-2">Image placeholder - 実装時にMidjourneyなどで生成した画像に差し替え可能</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.article>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mb-12"
                >
                    <div className="glass rounded-3xl p-8 md:p-12 neon-border text-center relative overflow-hidden">
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 via-neon-purple/5 to-neon-blue/5"
                            animate={{
                                opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />

                        <div className="relative">
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center">
                                    <Sparkles className="w-8 h-8 text-white" />
                                </div>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                                あなたのAI時代サバイバル確率は？
                            </h3>
                            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                                12の職業タイプ診断で、あなたの現在地と生存戦略を明らかにします。
                                わずか3分で、AI時代を生き抜くための具体的なロードマップを手に入れましょう。
                            </p>

                            <motion.button
                                onClick={() => router.push("/")}
                                className="relative inline-block py-4 px-12 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white font-bold text-lg overflow-hidden group"
                                style={{
                                    boxShadow: '0 0 30px rgba(251, 146, 60, 0.5)',
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: '0 0 50px rgba(251, 146, 60, 0.7)',
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-200%]"
                                    animate={{
                                        translateX: ["−200%", "200%"],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        repeatDelay: 2,
                                        ease: "easeInOut",
                                    }}
                                />
                                <span className="relative">12ジョブ診断を始める</span>
                            </motion.button>

                            <p className="text-xs text-muted-foreground mt-4">
                                無料・3分で完了
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-center"
                >
                    <button
                        onClick={() => router.push("/blog")}
                        className="px-8 py-3 glass rounded-full hover:bg-white/5 transition-all"
                    >
                        <span className="text-foreground">他の記事を読む</span>
                    </button>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default function BlogPostPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-neon-cyan border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-muted-foreground">読み込み中...</p>
                </div>
            </div>
        }>
            <BlogPostContent />
        </Suspense>
    );
}
