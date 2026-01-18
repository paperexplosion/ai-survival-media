"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Send, User, Mail, MessageSquare, FileText } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ContactPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        await new Promise(resolve => setTimeout(resolve, 1000));

        setIsSubmitting(false);
        setSubmitStatus("success");
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
        });

        setTimeout(() => {
            setSubmitStatus("idle");
        }, 5000);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen py-12 px-6 relative z-10 pt-32 bg-[#0a0e1a]"
        >
            <div className="max-w-4xl mx-auto">
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
                                CONTACT
                            </p>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight drop-shadow-lg">
                                お問い合わせ
                            </h1>
                            <p className="text-lg md:text-xl text-slate-50 leading-relaxed max-w-3xl mx-auto">
                                診断結果に関する感想や、ビジネスのご相談、メディア掲載依頼などは<br className="hidden md:block" />
                                以下のフォームよりご連絡ください。
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-12"
                >
                    <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/10">
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="name" className="flex items-center gap-2 text-white font-bold mb-3">
                                    <User className="w-5 h-5 text-neon-cyan" />
                                    お名前
                                    <span className="text-red-400 text-sm">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/30 transition-all"
                                    placeholder="山田 太郎"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="flex items-center gap-2 text-white font-bold mb-3">
                                    <Mail className="w-5 h-5 text-neon-cyan" />
                                    メールアドレス
                                    <span className="text-red-400 text-sm">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/30 transition-all"
                                    placeholder="example@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="flex items-center gap-2 text-white font-bold mb-3">
                                    <FileText className="w-5 h-5 text-neon-cyan" />
                                    件名
                                    <span className="text-red-400 text-sm">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/30 transition-all"
                                    placeholder="診断結果について"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="flex items-center gap-2 text-white font-bold mb-3">
                                    <MessageSquare className="w-5 h-5 text-neon-cyan" />
                                    メッセージ内容
                                    <span className="text-red-400 text-sm">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={8}
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/30 transition-all resize-none"
                                    placeholder="お問い合わせ内容をご記入ください"
                                />
                            </div>

                            {submitStatus === "success" && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-green-400 text-center"
                                >
                                    お問い合わせありがとうございます。送信が完了しました。
                                </motion.div>
                            )}

                            {submitStatus === "error" && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-red-400 text-center"
                                >
                                    送信中にエラーが発生しました。もう一度お試しください。
                                </motion.div>
                            )}

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-4 rounded-xl bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-blue text-white font-bold text-lg hover:shadow-lg transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                                style={{
                                    boxShadow: '0 0 30px rgba(34, 211, 238, 0.3)',
                                }}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        送信中...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        送信する
                                    </>
                                )}
                            </motion.button>
                        </div>
                    </form>
                </motion.section>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/10"
                >
                    <p className="text-slate-50 text-center text-sm leading-relaxed">
                        お問い合わせいただいた内容は、通常2-3営業日以内にご返信いたします。<br />
                        お急ぎの場合は、その旨をメッセージにご記入ください。
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
}
