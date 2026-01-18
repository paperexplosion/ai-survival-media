"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Shield, Eye, Lock, FileText } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PrivacyPage() {
    const router = useRouter();

    const sections = [
        {
            icon: Eye,
            title: "広告について",
            content: "当サイトでは、第三者配信の広告サービス（Google AdSense、Amazonアソシエイト等）を利用しています。Cookieを使用することで、ユーザーの過去のアクセス情報に基づいた広告を配信します。"
        },
        {
            icon: FileText,
            title: "アクセス解析について",
            content: "Googleアナリティクスを使用しトラフィックデータを収集しています。データは匿名で収集されており、個人を特定するものではありません。"
        },
        {
            icon: Lock,
            title: "情報の管理",
            content: "お問い合わせ等で得た個人情報は、適切に管理し、法的要請がある場合を除き第三者に開示することはありません。"
        }
    ];

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
                                PRIVACY POLICY
                            </p>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight drop-shadow-lg">
                                プライバシーポリシー
                            </h1>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white/5 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/10 mb-12"
                    >
                        <div className="flex items-start gap-6 mb-8">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple flex items-center justify-center flex-shrink-0">
                                <Shield className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <p className="text-slate-50 text-lg leading-relaxed">
                                    当サイト（ai-survival.org）は、ストーリーテリング合同会社が運営しています。
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mb-12 space-y-8"
                >
                    {sections.map((section, index) => {
                        const Icon = section.icon;
                        return (
                            <motion.div
                                key={section.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 + index * 0.1 }}
                                className="bg-white/5 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/10 hover:border-neon-cyan/30 transition-all"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">{section.title}</h2>
                                        <p className="text-slate-50 text-lg leading-relaxed">{section.content}</p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.section>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-neon-cyan/30"
                >
                    <p className="text-slate-50 text-center text-sm leading-relaxed">
                        本プライバシーポリシーは、必要に応じて変更されることがあります。<br />
                        重要な変更がある場合は、サイト上で通知いたします。
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
}
