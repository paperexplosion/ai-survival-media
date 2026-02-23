"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { getBlogPost, getAllBlogPosts } from "@/lib/blog-posts";
import { Suspense } from "react";
import { AffiliateCard } from "@/components/affiliate-card";
import { parseMarkdownToHtml } from "@/lib/markdown-parser";
import { convertGoogleDriveUrl } from "@/lib/google-drive-utils";
import Image from "next/image";

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
            className="min-h-screen py-12 px-6 relative z-10 pt-32"
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
                        <h1 className="blog-heading text-3xl md:text-5xl font-black mb-6 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-blue bg-clip-text text-transparent leading-tight">
                            {post.title}
                        </h1>
                        {post.image && (
                            <div className="w-full h-64 md:h-96 relative rounded-xl overflow-hidden mb-6">
                                <Image
                                    src={convertGoogleDriveUrl(post.image)}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}
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
                        <div className="blog-body text-lg text-muted-foreground leading-relaxed mb-8 p-6 rounded-xl bg-white/5 border border-white/10">
                            {post.lead}
                        </div>

                        {post.content.map((section, index) => {
                            const keywords = [
                                '審美眼', '強化外骨格', '平均点の洪水', 'DX事務エバンジェリスト',
                                '翻訳力', '想像力', '調整', '処理', 'インテリジェンス',
                                '軍資金供給源', '決断の格差', '王国', '偵察機', '共生',
                                '分母', '分子', '当事者', '観測者', '記号的なハイクラス', '物語的なリーダー',
                                'ドキュメンタリー・シンキング', 'ナラティブ・ブランド', '課題定義能力',
                                '非AI領域', '賞味期限', '動的な記録', 'リデザイン', '共創プロセス',
                                'ストーリー構築力', 'ナラティブ', '編集権', 'ドキュメンタリー',
                                'キャリア・ポートフォリオ', 'ペルソナ', 'メインストーリー', 'サイドストーリー',
                                '物語の多重化', '欠乏・挑戦・獲得', '求道者の航跡', '投資趣意書',
                                '主観的な選択', 'GAFA', 'AIスタートアップ', 'レガシーの維持管理',
                                '歴史の傍観者', 'プロット', '修繕係', '脱獄', '一本足打法'
                            ];

                            let parsedHtml = parseMarkdownToHtml(section.text);

                            keywords.forEach(keyword => {
                                const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                                const regex = new RegExp(`(?<![>])\\b(${escapedKeyword})\\b(?![^<]*>)`, 'g');
                                parsedHtml = parsedHtml.replace(regex, (match, p1, offset, string) => {
                                    const before = string.slice(Math.max(0, offset - 50), offset);
                                    if (before.lastIndexOf('<') > before.lastIndexOf('>')) {
                                        return match;
                                    }
                                    return `<mark class="bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 text-neon-cyan px-1 rounded">${p1}</mark>`;
                                });
                            });

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="mb-8"
                                >
                                    {section.section && (
                                        <h2 className="blog-heading text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                                            <span className="w-2 h-2 rounded-full bg-neon-cyan"></span>
                                            {section.section}
                                        </h2>
                                    )}
                                    <div className="blog-body text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: parsedHtml }} />

                                    {post.affiliates?.filter(aff => aff.position === index + 1).map((affiliate, affIndex) => (
                                        <AffiliateCard
                                            key={affIndex}
                                            title={affiliate.title}
                                            description={affiliate.description}
                                            url={affiliate.url}
                                            label={affiliate.label}
                                        />
                                    ))}
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.article>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mb-12"
                >
                    <h3 className="text-xl font-bold mb-6 text-foreground">Intelligence Reports おすすめ記事</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {getAllBlogPosts()
                            .filter(p => p.slug !== post.slug)
                            .slice(0, 2)
                            .map((relatedPost) => (
                                <motion.div
                                    key={relatedPost.slug}
                                    onClick={() => router.push(`/blog/${relatedPost.slug}`)}
                                    className="glass rounded-2xl p-6 neon-border hover:bg-white/5 transition-all cursor-pointer group"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 text-neon-cyan text-xs font-bold mb-3">
                                        {relatedPost.category}
                                    </span>
                                    <h4 className="text-lg font-bold mb-2 text-foreground group-hover:text-neon-cyan transition-colors">
                                        {relatedPost.title}
                                    </h4>
                                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                                        {relatedPost.lead}
                                    </p>
                                    <div className="flex items-center gap-2 text-neon-cyan text-sm font-bold">
                                        <span>続きを読む</span>
                                        <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </motion.div>
                            ))}
                    </div>
                </motion.div>

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
                                <span className="relative">あなたの未来を診断する</span>
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
