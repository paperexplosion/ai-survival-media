"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { RotateCcw, ArrowRight, Instagram, X } from "lucide-react";
import { useRouter } from "next/navigation";
import type { DiagnosticResult } from "@/types";
import { RadarChart } from "@/components/radar-chart";
import { Roadmap } from "@/components/roadmap";
import { CertificateCard } from "@/components/certificate-card";
import { CTA_CONTENT, SOMMELIER_DATA } from "@/lib/constants";

interface ResultScreenProps {
    result: DiagnosticResult;
    onRestart: () => void;
}

export function ResultScreen({ result, onRestart }: ResultScreenProps) {
    const router = useRouter();

    const survivalScore = useMemo(() => {
        const { tech, human, autonomy } = result.radarChart;
        return Math.round((tech + human + autonomy) / 3);
    }, [result]);

    const dynamicCTA = CTA_CONTENT[result.type];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen py-12 px-6 relative z-10"
        >
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-12"
                >
                    <p className="text-neon-cyan text-sm font-mono mb-4 tracking-wider">AI SURVIVAL ANALYSIS COMPLETE</p>
                    <motion.h1
                        className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-blue bg-clip-text text-transparent leading-tight tracking-tight"
                        style={{
                            textShadow: `
                                0 0 20px rgba(0, 255, 255, 0.5),
                                0 0 40px rgba(139, 92, 246, 0.4),
                                0 0 60px rgba(0, 200, 255, 0.3),
                                0 0 80px rgba(139, 92, 246, 0.2)
                            `,
                        }}
                        animate={{
                            textShadow: [
                                `0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(139, 92, 246, 0.4), 0 0 60px rgba(0, 200, 255, 0.3)`,
                                `0 0 30px rgba(0, 255, 255, 0.7), 0 0 60px rgba(139, 92, 246, 0.6), 0 0 90px rgba(0, 200, 255, 0.5)`,
                                `0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(139, 92, 246, 0.4), 0 0 60px rgba(0, 200, 255, 0.3)`,
                            ],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        {result.title}
                    </motion.h1>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">{result.description}</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="glass rounded-3xl p-8 mb-8 neon-border text-center"
                >
                    <p className="text-sm text-muted-foreground mb-2">2030年 AI時代サバイバル確率</p>
                    <div className="text-7xl font-bold neon-text mb-2">
                        {survivalScore}
                        <span className="text-3xl">%</span>
                    </div>
                    <p className="text-neon-cyan text-sm">あなたは上位{Math.max(100 - survivalScore + 5, 1)}%のサバイバーです</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="glass rounded-3xl p-6 neon-border"
                    >
                        <h3 className="text-lg font-bold mb-4 text-foreground">能力分析</h3>
                        <RadarChart stats={result.radarChart} />
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
                        <CertificateCard jobName={result.title} survivalScore={survivalScore} stats={result.radarChart} />
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="glass rounded-3xl p-8 mb-8 neon-border"
                >
                    <h3 className="text-xl font-bold mb-6 text-foreground">3ヶ月ロードマップ</h3>
                    <Roadmap actionPlan={result.actionPlan} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.82 }}
                    className="bg-slate-950 border border-slate-700/50 rounded-3xl p-8 mb-8"
                >
                    <h3 className="text-xl font-bold mb-6 text-neon-cyan">The Sommelier&apos;s Narrative Analysis</h3>
                    <h4 className="text-lg font-semibold mb-4 text-white">{SOMMELIER_DATA[result.type].title}</h4>
                    <p className="text-white leading-relaxed whitespace-pre-wrap">{SOMMELIER_DATA[result.type].content}</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.85 }}
                    className="mb-8"
                >
                    <motion.button
                        onClick={() => router.push(`/comparison?type=${result.type}`)}
                        className="relative block w-full py-6 px-8 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white font-bold text-center overflow-hidden group"
                        style={{
                            boxShadow: '0 0 30px rgba(251, 146, 60, 0.5)',
                        }}
                        whileHover={{
                            scale: 1.02,
                            boxShadow: '0 0 50px rgba(251, 146, 60, 0.7)',
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-white/20"
                            animate={{
                                opacity: [0, 0.3, 0],
                                scale: [1, 1.05, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />

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

                        <div className="relative flex flex-col items-center justify-center gap-2">
                            <span className="flex items-center justify-center gap-3 text-lg md:text-xl">
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                                <span>{dynamicCTA.cta}</span>
                            </span>
                            <span className="text-sm text-white/90 font-normal">{dynamicCTA.subtext}</span>
                        </div>
                    </motion.button>
                    <p className="text-center text-xs text-muted-foreground mt-3">
                        ※ あなた専用の厳選ルートを表示します
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="flex flex-wrap justify-center gap-4"
                >
                    <button
                        onClick={() => {
                            const text = `AI時代のキャリア診断結果: 私は「${result.title}」タイプ！2030年サバイバル確率${survivalScore}% 🚀`;
                            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, "_blank");
                        }}
                        className="flex items-center gap-2 px-6 py-3 glass rounded-full hover:bg-neon-blue/20 transition-all group"
                    >
                        <X className="w-5 h-5 text-neon-blue group-hover:scale-110 transition-transform" />
                        <span className="text-foreground">シェア</span>
                    </button>

                    <button
                        onClick={() => {
                            window.open("https://www.instagram.com/", "_blank");
                        }}
                        className="flex items-center gap-2 px-6 py-3 glass rounded-full hover:bg-pink-500/20 transition-all group"
                    >
                        <Instagram className="w-5 h-5 text-pink-500 group-hover:scale-110 transition-transform" />
                        <span className="text-foreground">Instagram</span>
                    </button>

                    <button
                        onClick={onRestart}
                        className="flex items-center gap-2 px-6 py-3 glass rounded-full hover:bg-neon-cyan/20 transition-all group"
                    >
                        <RotateCcw className="w-5 h-5 text-neon-cyan group-hover:rotate-180 transition-transform duration-500" />
                        <span className="text-foreground">もう一度診断</span>
                    </button>
                </motion.div>
            </div>
        </motion.div>
    );
}
