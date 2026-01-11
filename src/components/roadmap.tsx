"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Sparkles, Bot, FileText } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface RoadmapProps {
    actionPlan: string[];
}

const AI_TOOLS: {
    name: string;
    description: string;
    url: string;
    icon: LucideIcon;
    gradient: string;
}[] = [
        {
            name: "ChatGPT Plus",
            description: "AI時代必須のパートナー。業務効率を10倍に。",
            url: "[ChatGPT PlusのASPリンクに後で書き換え]",
            icon: Bot,
            gradient: "from-emerald-400 to-cyan-500",
        },
        {
            name: "Notion AI",
            description: "ドキュメント作成・管理を自動化",
            url: "[Notion AIのASPリンクに後で書き換え]",
            icon: FileText,
            gradient: "from-amber-400 to-orange-500",
        },
    ];

export function Roadmap({ actionPlan }: RoadmapProps) {
    if (!actionPlan || actionPlan.length === 0) {
        return <div className="text-muted-foreground">推奨プランはありません。</div>;
    }

    return (
        <div className="relative">
            <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-neon-blue/50 to-neon-purple/50" />

            <div className="space-y-6">
                {actionPlan.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="relative pl-12"
                    >
                        <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-background border border-neon-blue/50 flex items-center justify-center z-10 shadow-[0_0_10px_rgba(0,255,255,0.3)]">
                            <span className="text-xs font-bold text-neon-blue">{index + 1}</span>
                        </div>

                        <div className="group relative bg-card/40 backdrop-blur-sm border border-white/10 p-4 rounded-xl hover:bg-card/60 transition-colors">
                            <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <h4 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                                <span className="text-neon-cyan">Month {index + 1}</span>
                                <ArrowRight className="w-4 h-4 text-muted-foreground" />
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {item}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-6 text-center"
            >
                <p className="text-xs text-muted-foreground flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-neon-purple" />
                    <span>まずは最初の1ヶ月目から始めましょう</span>
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-8 pt-6 border-t border-white/10"
            >
                <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-yellow-400" />
                    <h4 className="text-sm font-bold text-foreground">この作業を自動化するAIツール</h4>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                    {AI_TOOLS.map((tool, index) => {
                        const IconComponent = tool.icon;
                        return (
                            <motion.a
                                key={index}
                                href={tool.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8 + index * 0.1 }}
                                whileHover={{ scale: 1.02, y: -2 }}
                                className="group relative overflow-hidden bg-card/60 backdrop-blur-sm border border-white/10 p-4 rounded-xl transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,215,0,0.15)]"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                                <div className="relative flex items-start gap-3">
                                    <div className={`p-2 rounded-lg bg-gradient-to-br ${tool.gradient} shadow-lg`}>
                                        <IconComponent className="w-4 h-4 text-white" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="font-bold text-foreground text-sm group-hover:text-amber-300 transition-colors">
                                            {tool.name}
                                        </div>
                                        <div className="text-xs text-muted-foreground mt-0.5">
                                            {tool.description}
                                        </div>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-amber-400 group-hover:translate-x-1 transition-all shrink-0" />
                                </div>
                            </motion.a>
                        );
                    })}
                </div>
            </motion.div>
        </div>
    );
}
