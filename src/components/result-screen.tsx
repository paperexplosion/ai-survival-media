"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { RotateCcw, Instagram, ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";
import type { DiagnosticResult } from "@/types";
import { RadarChart } from "@/components/radar-chart";
import { Roadmap } from "@/components/roadmap";
import { CertificateCard } from "@/components/certificate-card";
import { CTA_CONTENT, SOMMELIER_DATA } from "@/lib/constants";
import { getAffiliateCatalogByJobType } from "@/lib/affiliate-catalog";

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
    const affiliateCatalog = getAffiliateCatalogByJobType(result.type);

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
                    className="mb-12"
                >
                    <motion.div
                        className="relative overflow-hidden rounded-3xl p-8 mb-10 neon-border"
                        style={{
                            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(168, 85, 247, 0.1) 50%, rgba(59, 130, 246, 0.1) 100%)',
                            backdropFilter: 'blur(20px)',
                        }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.85, duration: 0.5 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-transparent to-neon-purple/10 animate-pulse" style={{ animationDuration: '3s' }} />
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-neon-purple to-transparent" />

                        <div className="relative z-10 text-center">
                            <div className="inline-block mb-4">
                                <div className="flex items-center justify-center gap-3 mb-2">
                                    <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-neon-cyan" />
                                    <svg className="w-6 h-6 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                    <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-neon-cyan" />
                                </div>
                            </div>

                            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">
                                <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-blue bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                                    AI時代の進化のカタログ
                                </span>
                            </h2>

                            <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-neon-cyan/20 via-neon-purple/20 to-neon-blue/20 border border-neon-cyan/30">
                                <p className="text-gray-200 font-semibold text-sm md:text-base">
                                    <span className="text-neon-cyan">{result.title}</span>に最適化された進化ルート
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <div className="space-y-6">
                        {affiliateCatalog.map((item, index) => {
                            const isMoshimoLink = item.url.includes('moshimo.com');
                            return (
                                <motion.div
                                    key={item.service}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.9 + index * 0.1 }}
                                    className="relative rounded-2xl p-6 neon-border hover:shadow-2xl transition-all duration-300 overflow-hidden"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(20, 20, 30, 0.95) 0%, rgba(30, 30, 50, 0.95) 100%)',
                                        backdropFilter: 'blur(10px)',
                                    }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 via-neon-purple/5 to-neon-blue/5" />
                                    <div className="relative z-10">
                                        <h3 className="text-xl font-bold mb-4 leading-relaxed text-gray-100">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                                            {item.analysis}
                                        </p>
                                        <motion.a
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            {...(isMoshimoLink && { referrerPolicy: "no-referrer-when-downgrade" as const })}
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full text-white font-semibold hover:shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300 group"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <span>ソムリエの提案に従い公式サイトを見る</span>
                                            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </motion.a>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
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
                        className="flex items-center gap-2 px-6 py-3 bg-black/80 rounded-full hover:bg-black transition-all group"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            className="w-5 h-5 fill-white group-hover:scale-110 transition-transform"
                            aria-hidden="true"
                        >
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                        <span className="text-white">シェア</span>
                    </button>

                    <button
                        onClick={() => {
                            window.open("https://www.instagram.com/", "_blank");
                        }}
                        className="flex items-center gap-2 px-6 py-3 bg-pink-500/70 rounded-full hover:bg-pink-500/90 transition-all group"
                    >
                        <Instagram className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                        <span className="text-white">Instagram</span>
                    </button>

                    <button
                        onClick={onRestart}
                        className="flex items-center gap-2 px-6 py-3 bg-neon-cyan/70 rounded-full hover:bg-neon-cyan/90 transition-all group"
                    >
                        <RotateCcw className="w-5 h-5 text-white group-hover:rotate-180 transition-transform duration-500" />
                        <span className="text-white">もう一度診断</span>
                    </button>
                </motion.div>
            </div>
        </motion.div>
    );
}
