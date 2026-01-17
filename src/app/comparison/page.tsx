"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, CheckCircle2, XCircle, Sparkles, KeyRound, List } from "lucide-react";
import { CareerType } from "@/types";
import { SOMMELIER_RECOMMENDATIONS, CAREER_TYPES_DATA } from "@/lib/constants";
import { Suspense } from "react";

function ComparisonContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const type = searchParams.get("type") as CareerType;

    if (!type || !SOMMELIER_RECOMMENDATIONS[type]) {
        return (
            <div className="min-h-screen py-12 px-6 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">無効なページです</h1>
                    <button
                        onClick={() => router.push("/")}
                        className="px-6 py-3 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full text-white font-bold"
                    >
                        トップに戻る
                    </button>
                </div>
            </div>
        );
    }

    const recommendation = SOMMELIER_RECOMMENDATIONS[type];
    const careerData = CAREER_TYPES_DATA[type];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen py-12 px-6 relative z-10"
        >
            <div className="max-w-6xl mx-auto">
                <motion.button
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-neon-cyan hover:text-neon-blue transition-colors mb-8 group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span>診断結果に戻る</span>
                </motion.button>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-12"
                >
                    <p className="text-neon-cyan text-sm font-mono mb-4 tracking-wider">SOMMELIER RECOMMENDATION</p>
                    <h1 className="text-3xl md:text-5xl font-black mb-4 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                        {careerData.title}
                    </h1>
                    <p className="text-lg text-muted-foreground">あなたに最適な3つのルートを厳選しました</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="glass rounded-3xl p-8 mb-12 neon-border"
                >
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                            <Sparkles className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-foreground mb-2">AI専門家の目</h2>
                            <p className="text-base text-muted-foreground leading-relaxed">{recommendation.overview}</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-12"
                >
                    <h2 className="text-2xl font-bold text-center mb-8 text-foreground">厳選3ルートの比較</h2>
                    <div className="grid gap-6 md:grid-cols-3">
                        {recommendation.routes.map((route, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                className="glass rounded-2xl p-6 neon-border hover:bg-white/5 transition-all group"
                            >
                                <div className="mb-4">
                                    <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-400 text-xs font-bold mb-3">
                                        ルート {index + 1}
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-2">{route.name}</h3>
                                </div>

                                <div className="mb-4">
                                    <h4 className="text-sm font-bold text-neon-cyan mb-2 flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4" />
                                        メリット
                                    </h4>
                                    <ul className="space-y-1">
                                        {route.merits.map((merit, i) => (
                                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                                <span className="text-neon-cyan mt-1">•</span>
                                                <span>{merit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mb-4">
                                    <h4 className="text-sm font-bold text-orange-400 mb-2 flex items-center gap-2">
                                        <XCircle className="w-4 h-4" />
                                        デメリット
                                    </h4>
                                    <ul className="space-y-1">
                                        {route.demerits.map((demerit, i) => (
                                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                                <span className="text-orange-400 mt-1">•</span>
                                                <span>{demerit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mb-6 p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
                                    <p className="text-xs text-amber-300 font-bold mb-1">AI専門家の一言</p>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{route.sommelierComment}</p>
                                </div>

                                <a
                                    href={route.affiliateUrl || route.url}
                                    target="_blank"
                                    rel={route.affiliateUrl ? "nofollow noreferrer" : "noopener noreferrer"}
                                    {...(route.affiliateUrl ? { attributionsrc: "" } : {})}
                                    className="block w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-center hover:shadow-lg hover:shadow-orange-500/50 transition-all group-hover:scale-105 relative"
                                >
                                    <span className="flex items-center justify-center gap-2">
                                        <span>詳細を確認する</span>
                                        <ExternalLink className="w-4 h-4" />
                                    </span>
                                    {route.trackingImageUrl && (
                                        <img
                                            src={route.trackingImageUrl}
                                            width="1"
                                            height="1"
                                            style={{ border: "none" }}
                                            loading="lazy"
                                            alt=""
                                            className="absolute opacity-0 pointer-events-none"
                                        />
                                    )}
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="text-center space-y-6"
                >
                    <button
                        onClick={() => router.push(`/comparison/more-options?type=${type}`)}
                        className="w-full max-w-2xl mx-auto py-5 px-8 rounded-2xl bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 hover:from-blue-800 hover:via-purple-800 hover:to-blue-800 transition-all duration-300 group relative overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-purple-500/50"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                        <div className="relative flex items-center justify-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center group-hover:bg-amber-400/30 transition-all group-hover:scale-110">
                                <KeyRound className="w-5 h-5 text-amber-300" />
                            </div>
                            <div className="text-center">
                                <p className="text-lg font-black text-amber-200 group-hover:text-amber-100 transition-colors">
                                    もっと他の選択肢も見る
                                </p>
                                <p className="text-sm text-purple-200/80 group-hover:text-purple-100 transition-colors font-semibold">
                                    AI専門家の裏リスト
                                </p>
                            </div>
                            <List className="w-5 h-5 text-amber-300 group-hover:scale-110 transition-transform" />
                        </div>
                    </button>

                    <button
                        onClick={() => router.back()}
                        className="px-8 py-3 glass rounded-full hover:bg-white/5 transition-all"
                    >
                        <span className="text-foreground">診断結果に戻る</span>
                    </button>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default function ComparisonPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-neon-cyan border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-muted-foreground">読み込み中...</p>
                </div>
            </div>
        }>
            <ComparisonContent />
        </Suspense>
    );
}
