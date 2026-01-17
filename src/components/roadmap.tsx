"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface RoadmapProps {
    actionPlan: string[];
}

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
                                <span className="text-neon-cyan">{index + 1}ヶ月目</span>
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
        </div>
    );
}
