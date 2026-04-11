"use client"

import { motion } from "framer-motion"
import { Cpu, Zap, Shield, BookOpen, Search } from "lucide-react"
import { useRouter } from "next/navigation"

interface HomeScreenProps {
    onStart: () => void
}

export function HomeScreen({ onStart }: HomeScreenProps) {
    const router = useRouter()

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex flex-col items-center justify-center px-6 relative z-10"
        >
            <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="mb-8"
            >
                <div className="w-24 h-24 rounded-2xl glass neon-border flex items-center justify-center animate-float">
                    <Cpu className="w-12 h-12 text-neon-blue" />
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-center mb-12"
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
                    <span className="neon-text text-foreground">あなたの仕事には、</span>
                    <br />
                    <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan bg-clip-text text-transparent">
                        人間の物語がありますか。
                    </span>
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl max-w-md mx-auto leading-relaxed">
                    AIには書けない物語が、あなたの仕事のどこかにある。
                    <br />
                    その問いに向き合う、3分間の診断。
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-3 gap-4 mb-12 max-w-lg w-full"
            >
                {[
                    { icon: Search, label: "物語の発見" },
                    { icon: Shield, label: "問いを立てる" },
                    { icon: Zap, label: "3分間" },
                ].map((item, index) => (
                    <motion.div
                        key={item.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        className="glass rounded-xl p-4 text-center"
                    >
                        <item.icon className="w-6 h-6 mx-auto mb-2 text-neon-cyan" />
                        <span className="text-xs text-muted-foreground">{item.label}</span>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mb-6 flex items-center gap-4"
            >
                <motion.div
                    animate={{
                        scale: [1, 1.05, 1],
                        boxShadow: [
                            "0 0 20px rgba(6, 182, 212, 0.3)",
                            "0 0 40px rgba(6, 182, 212, 0.6)",
                            "0 0 20px rgba(6, 182, 212, 0.3)"
                        ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500/20 via-cyan-400/20 to-cyan-500/20 rounded-2xl border-2 border-cyan-400"
                >
                    <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse shadow-lg shadow-cyan-400/50" />
                    <span className="text-xl font-black text-cyan-300 drop-shadow-lg">完全無料</span>
                </motion.div>
                <motion.div
                    animate={{
                        scale: [1, 1.05, 1],
                        boxShadow: [
                            "0 0 20px rgba(168, 85, 247, 0.3)",
                            "0 0 40px rgba(168, 85, 247, 0.6)",
                            "0 0 20px rgba(168, 85, 247, 0.3)"
                        ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500/20 via-purple-400/20 to-purple-500/20 rounded-2xl border-2 border-purple-400"
                >
                    <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse shadow-lg shadow-purple-400/50" />
                    <span className="text-xl font-black text-purple-300 drop-shadow-lg">登録不要</span>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
                className="flex flex-col items-center gap-3"
            >
                <p className="text-sm text-muted-foreground/80 tracking-wide">
                    診断時間は180秒。あなたの物語が、ここから始まる。
                </p>
                <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 }}
                    whileHover={{ scale: 1.08, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onStart}
                    className="relative group"
                >
                    <motion.div
                        animate={{
                            opacity: [0.7, 1, 0.7],
                            scale: [1, 1.15, 1],
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full blur-2xl"
                    />
                    <motion.div
                        animate={{
                            boxShadow: [
                                "0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(168, 85, 247, 0.3)",
                                "0 0 50px rgba(59, 130, 246, 0.8), 0 0 100px rgba(168, 85, 247, 0.6)",
                                "0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(168, 85, 247, 0.3)"
                            ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="relative px-14 py-6 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-[length:200%_100%] rounded-full text-white font-black text-2xl tracking-wide shadow-2xl border-2 border-white/20 animate-gradient"
                    >
                        物語を、探しにいく
                    </motion.div>
                </motion.button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="mt-8"
            >
                <button
                    onClick={() => router.push("/blog")}
                    className="flex flex-col items-center gap-1 px-6 py-4 glass rounded-2xl hover:bg-white/5 transition-all group"
                >
                    <BookOpen className="w-5 h-5 text-neon-purple group-hover:scale-110 transition-transform mb-1" />
                    <span className="text-sm text-neon-cyan font-bold">ドキュメンタリー記事</span>
                    <span className="text-base font-black text-foreground">AI Documentary Report</span>
                </button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mt-6 flex flex-col sm:flex-row gap-4 justify-center"
            >
                <motion.button
                    onClick={() => router.push('/escape')}
                    className="relative px-7 py-3 rounded-full bg-gradient-to-r from-cyan-600 via-blue-700 to-blue-900 text-white font-bold overflow-hidden border border-cyan-500/40"
                    style={{ boxShadow: '0 0 25px rgba(34, 211, 238, 0.4)' }}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(34, 211, 238, 0.6)' }}
                    whileTap={{ scale: 0.98 }}
                >
                    <span className="relative flex items-center gap-2">
                        <Shield className="w-4 h-4" />
                        キャリアを相談する
                    </span>
                </motion.button>
                <motion.button
                    onClick={() => router.push('/armup')}
                    className="relative px-7 py-3 rounded-full bg-gradient-to-r from-purple-600 via-violet-700 to-indigo-800 text-white font-bold overflow-hidden border border-purple-500/40"
                    style={{ boxShadow: '0 0 25px rgba(168, 85, 247, 0.4)' }}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(168, 85, 247, 0.6)' }}
                    whileTap={{ scale: 0.98 }}
                >
                    <span className="relative flex items-center gap-2">
                        <Zap className="w-4 h-4" />
                        AIを学ぶ
                    </span>
                </motion.button>
            </motion.div>
        </motion.div>
    )
}
