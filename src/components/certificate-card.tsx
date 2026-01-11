"use client";

import { motion } from 'framer-motion';
import { Award, Download, Share2 } from 'lucide-react';
import { useState } from 'react';

interface CertificateCardProps {
    jobName: string;
    survivalScore: number;
    stats: {
        tech: number;
        human: number;
        autonomy: number;
    };
}

export function CertificateCard({ jobName, survivalScore, stats }: CertificateCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    const handleDownload = () => {
        alert('画像のダウンロード機能は実装予定です。スクリーンショットをご利用ください。');
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: 'AI時代のキャリア診断結果',
                text: `私は「${jobName}」タイプ！2030年サバイバル確率${survivalScore}%`,
                url: window.location.href,
            }).catch(() => {});
        } else {
            alert('この機能はモバイルデバイスでのみ利用可能です');
        }
    };

    return (
        <div className="space-y-4">
            <motion.div
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                className="relative overflow-hidden rounded-2xl"
                style={{
                    background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-neon-purple/10 to-neon-blue/10" />

                <motion.div
                    animate={{
                        opacity: isHovered ? 1 : 0.3,
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 via-transparent to-neon-purple/20"
                />

                <div className="relative p-8 space-y-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Award className="w-6 h-6 text-neon-cyan" />
                            <span className="text-sm text-slate-400 font-mono">CERTIFICATE</span>
                        </div>
                        <div className="text-xs text-slate-500 font-mono">2026</div>
                    </div>

                    <div className="space-y-2">
                        <div className="text-sm text-neon-purple font-mono">AI時代キャリア診断</div>
                        <h3 className="text-2xl font-bold text-white leading-tight">{jobName}</h3>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-end gap-2">
                            <div className="text-5xl font-black text-transparent bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-blue bg-clip-text">
                                {survivalScore}%
                            </div>
                            <div className="text-sm text-slate-400 pb-2">サバイバル確率</div>
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                            <div className="space-y-1">
                                <div className="text-xs text-slate-500">Tech</div>
                                <div className="text-lg font-bold text-cyan-400">{stats.tech}</div>
                            </div>
                            <div className="space-y-1">
                                <div className="text-xs text-slate-500">Human</div>
                                <div className="text-lg font-bold text-purple-400">{stats.human}</div>
                            </div>
                            <div className="space-y-1">
                                <div className="text-xs text-slate-500">Autonomy</div>
                                <div className="text-lg font-bold text-blue-400">{stats.autonomy}</div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-slate-700/50">
                        <div className="text-xs text-slate-500 font-mono text-center">
                            AI SURVIVAL DIAGNOSTIC 2026
                        </div>
                    </div>
                </div>

                <motion.div
                    animate={{
                        scale: isHovered ? [1, 1.05, 1] : 1,
                        opacity: isHovered ? [0.5, 1, 0.5] : 0.3,
                    }}
                    transition={{
                        duration: 2,
                        repeat: isHovered ? Infinity : 0,
                        ease: "easeInOut",
                    }}
                    className="absolute -top-20 -right-20 w-40 h-40 bg-neon-cyan/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: isHovered ? [1, 1.1, 1] : 1,
                        opacity: isHovered ? [0.5, 1, 0.5] : 0.3,
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: isHovered ? Infinity : 0,
                        ease: "easeInOut",
                        delay: 0.5,
                    }}
                    className="absolute -bottom-20 -left-20 w-40 h-40 bg-neon-purple/20 rounded-full blur-3xl"
                />
            </motion.div>

            <div className="flex gap-2">
                <button
                    onClick={handleDownload}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:bg-slate-800 hover:border-slate-600 transition-all"
                >
                    <Download className="w-4 h-4" />
                    <span className="text-sm">保存</span>
                </button>
                <button
                    onClick={handleShare}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/30 text-white hover:from-neon-cyan/30 hover:to-neon-purple/30 transition-all"
                >
                    <Share2 className="w-4 h-4" />
                    <span className="text-sm">シェア</span>
                </button>
            </div>
        </div>
    );
}
