"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { RotateCcw, Twitter, Linkedin, Briefcase, GraduationCap } from "lucide-react";
import type { DiagnosticResult, CareerType } from "@/types";
import { RadarChart } from "@/components/radar-chart";
import { Roadmap } from "@/components/roadmap";
import { CertificateCard } from "@/components/certificate-card";

const JOB_CHANGE_TYPES: CareerType[] = [
    'ENDANGERED_WORKER',
    'LEGACY_KEEPER',
    'GIG_SURVIVOR',
];

const ROUTE_CTA = {
    career: {
        label: "AI時代の市場価値をエージェントに無料相談する",
        url: "[あなたの転職ASPリンクに後で書き換え]",
        icon: Briefcase,
        gradient: "from-cyan-400 via-blue-500 to-indigo-600",
        shadowColor: "rgba(0, 200, 255, 0.4)",
        hoverShadow: "rgba(0, 200, 255, 0.6)",
    },
    reskill: {
        label: "3ヶ月でAIマスターになる実践講座を見る",
        url: "[あなたの講座ASPリンクに後で書き換え]",
        icon: GraduationCap,
        gradient: "from-amber-400 via-yellow-500 to-orange-500",
        shadowColor: "rgba(255, 200, 0, 0.4)",
        hoverShadow: "rgba(255, 200, 0, 0.6)",
    },
};

interface ResultScreenProps {
    result: DiagnosticResult;
    onRestart: () => void;
}

export function ResultScreen({ result, onRestart }: ResultScreenProps) {
    const survivalScore = useMemo(() => {
        const { tech, human, autonomy } = result.radarChart;
        return Math.round((tech + human + autonomy) / 3);
    }, [result]);

    const routeType = useMemo(() => {
        return JOB_CHANGE_TYPES.includes(result.type) ? "career" : "reskill";
    }, [result]);

    const ctaConfig = ROUTE_CTA[routeType];
    const CtaIcon = ctaConfig.icon;

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
                    transition={{ delay: 0.85 }}
                    className="mb-8"
                >
                    <motion.a
                        href={ctaConfig.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`relative block w-full py-5 px-8 rounded-2xl bg-gradient-to-r ${ctaConfig.gradient} text-white font-bold text-center text-lg overflow-hidden group`}
                        style={{
                            boxShadow: `0 0 30px ${ctaConfig.shadowColor}`,
                        }}
                        whileHover={{
                            scale: 1.02,
                            boxShadow: `0 0 50px ${ctaConfig.hoverShadow}`,
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

                        <span className="relative flex items-center justify-center gap-3">
                            <CtaIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            <span>{ctaConfig.label}</span>
                        </span>
                    </motion.a>
                    <p className="text-center text-xs text-muted-foreground mt-3">
                        ※ 完全無料・登録30秒で完了
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="mb-12"
                >
                    <h3 className="text-xl font-bold mb-6 text-center text-foreground">推奨リソース</h3>
                    <div className="grid gap-4 md:grid-cols-3">
                        {result.recommendations.map((rec, i) => (
                            <a
                                key={i}
                                href={rec.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass p-4 rounded-xl hover:bg-white/5 transition-colors group block"
                            >
                                <div className="text-xs text-neon-purple font-bold mb-1">{rec.category}</div>
                                <div className="font-bold mb-1 group-hover:text-neon-cyan transition-colors">{rec.title}</div>
                                <div className="text-xs text-muted-foreground">{rec.description}</div>
                            </a>
                        ))}
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
                        className="flex items-center gap-2 px-6 py-3 glass rounded-full hover:bg-neon-blue/20 transition-all group"
                    >
                        <Twitter className="w-5 h-5 text-neon-blue group-hover:scale-110 transition-transform" />
                        <span className="text-foreground">シェア</span>
                    </button>

                    <button
                        onClick={() => {
                            window.open(
                                `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
                                "_blank",
                            );
                        }}
                        className="flex items-center gap-2 px-6 py-3 glass rounded-full hover:bg-neon-purple/20 transition-all group"
                    >
                        <Linkedin className="w-5 h-5 text-neon-purple group-hover:scale-110 transition-transform" />
                        <span className="text-foreground">LinkedIn</span>
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
