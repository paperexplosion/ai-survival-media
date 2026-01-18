"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Building2, User, MapPin, Globe } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AboutPage() {
    const router = useRouter();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen py-12 px-6 relative z-10 pt-32 bg-[#0a0e1a]"
        >
            <div className="max-w-5xl mx-auto">
                <motion.button
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    onClick={() => router.push("/")}
                    className="flex items-center gap-2 text-neon-cyan hover:text-neon-blue transition-colors mb-12 group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span>トップに戻る</span>
                </motion.button>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-16"
                >
                    <div className="relative mb-12">
                        <motion.div
                            className="absolute inset-0 blur-3xl bg-gradient-to-r from-neon-cyan/10 via-neon-purple/10 to-neon-blue/10 opacity-20 -bottom-20"
                            animate={{
                                opacity: [0.1, 0.2, 0.1],
                                scale: [1, 1.05, 1],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                            }}
                        />
                        <div className="relative text-center">
                            <p className="text-sm md:text-base text-neon-cyan font-bold mb-4 tracking-wider uppercase">
                                ABOUT
                            </p>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight drop-shadow-lg">
                                運営者情報
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-50 font-light leading-relaxed max-w-3xl mx-auto">
                                AI時代の生存戦略を12ジョブ診断で提案する
                            </p>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="prose prose-invert prose-lg max-w-none mb-12"
                    >
                        <p className="text-slate-50 text-lg leading-relaxed mb-8">
                            29年に及ぶリサーチと、数多くのビジネス変革に携わってきた経験を元に、個人の立ち位置を再定義するプロジェクト。
                        </p>
                    </motion.div>
                </motion.div>

                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mb-20"
                >
                    <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/10 space-y-8">
                        <div className="flex items-start gap-6">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple flex items-center justify-center flex-shrink-0">
                                <Building2 className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">運営元</h2>
                                <p className="text-slate-50 text-lg mb-2">ストーリーテリング合同会社 (Storytelling LLC)</p>
                            </div>
                        </div>

                        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                        <div className="flex items-start gap-6">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple flex items-center justify-center flex-shrink-0">
                                <User className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">代表者</h2>
                                <p className="text-slate-50 text-lg mb-2">鈴木 隆文 (SZ / ナラティブ・アーキテクト)</p>
                            </div>
                        </div>

                        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                        <div className="flex items-start gap-6">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple flex items-center justify-center flex-shrink-0">
                                <MapPin className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">所在地</h2>
                                <p className="text-slate-50 text-lg">〒249-0008 神奈川県逗子市小坪1-19-9</p>
                            </div>
                        </div>

                        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                        <div className="flex items-start gap-6">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple flex items-center justify-center flex-shrink-0">
                                <Building2 className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">事業内容</h2>
                                <p className="text-slate-50 text-lg">インターネットを利用した集客支援、コンサルティング、SNS動画ブランディング。</p>
                            </div>
                        </div>

                        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                        <div className="flex items-start gap-6">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple flex items-center justify-center flex-shrink-0">
                                <Globe className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">公式サイト</h2>
                                <a
                                    href="https://storytelling.llc"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-neon-cyan text-lg hover:text-neon-blue transition-colors underline"
                                >
                                    https://storytelling.llc
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mb-12"
                >
                    <div className="bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-neon-cyan/30">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center drop-shadow-lg">メッセージ</h2>
                        <p className="text-slate-50 text-lg leading-relaxed text-center">
                            AIは脅威ではなく、あなたの可能性を拡張する鏡です。12ジョブ診断を通じて、あなたが「生存」を超え、自らの物語を「繁栄」させるための地図を提供します。
                        </p>
                    </div>
                </motion.section>
            </div>
        </motion.div>
    );
}
