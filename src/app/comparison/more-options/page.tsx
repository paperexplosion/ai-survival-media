"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Eye } from "lucide-react";
import { CareerType } from "@/types";
import { HIDDEN_LISTS, CAREER_TYPES_DATA } from "@/lib/constants";
import { Suspense } from "react";

function MoreOptionsContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const type = searchParams.get("type") as CareerType;

    if (!type || !HIDDEN_LISTS[type]) {
        return (
            <div className="min-h-screen py-12 px-6 flex items-center justify-center bg-[#0f172a]">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4 text-white">無効なページです</h1>
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

    const hiddenList = HIDDEN_LISTS[type];
    const careerData = CAREER_TYPES_DATA[type];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen py-12 px-6 relative z-10 bg-[#0f172a]"
        >
            <div className="max-w-5xl mx-auto">
                <motion.button
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-neon-cyan hover:text-neon-blue transition-colors mb-8 group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span>比較ページに戻る</span>
                </motion.button>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-12"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Eye className="w-6 h-6 text-amber-400" />
                        <p className="text-amber-400 text-sm font-mono tracking-wider">SOMMELIER'S HIDDEN LIST</p>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black mb-4 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                        ソムリエの裏リスト
                    </h1>
                    <p className="text-lg text-muted-foreground mb-2">{careerData.title}</p>
                    <p className="text-sm text-muted-foreground/70">知る人ぞ知る、その他の選択肢をご紹介します</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="glass rounded-3xl p-6 md:p-8 mb-8 border border-dashed border-amber-500/20"
                >
                    <div className="flex items-start gap-4 mb-4">
                        <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-amber-400 text-xl">💡</span>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-foreground mb-2">この裏リストについて</h2>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                厳選3ルートに入らなかったものの、視野を広げるため検討する価値がある選択肢をリストアップしました。
                                あなたの状況や優先順位に応じて、気になるサービスを確認してみてください。
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-3 mb-12"
                >
                    {hiddenList.options.map((option, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + index * 0.05 }}
                            className="glass rounded-xl p-4 hover:bg-white/5 transition-all group border border-amber-500/10 hover:border-amber-500/30"
                        >
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex-1">
                                    <h3 className="text-base font-bold text-foreground mb-1 group-hover:text-amber-400 transition-colors">
                                        {option.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">{option.feature}</p>
                                </div>
                                <a
                                    href={option.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-shrink-0 px-4 py-2 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 text-sm font-bold transition-all hover:scale-105 flex items-center gap-2"
                                >
                                    <span className="hidden sm:inline">詳細</span>
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="text-center"
                >
                    <button
                        onClick={() => router.back()}
                        className="px-8 py-3 glass rounded-full hover:bg-white/5 transition-all"
                    >
                        <span className="text-foreground">比較ページに戻る</span>
                    </button>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default function MoreOptionsPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-[#0f172a]">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-neon-cyan border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-300">読み込み中...</p>
                </div>
            </div>
        }>
            <MoreOptionsContent />
        </Suspense>
    );
}
