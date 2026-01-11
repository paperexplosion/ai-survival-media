"use client"

import { motion } from "framer-motion"
import { Cpu, Zap, Shield, TrendingUp } from "lucide-react"

interface HomeScreenProps {
    onStart: () => void
}

export function HomeScreen({ onStart }: HomeScreenProps) {
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
                    <span className="neon-text text-foreground">AI時代の</span>
                    <br />
                    <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan bg-clip-text text-transparent">
                        キャリア生存診断
                    </span>
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl max-w-md mx-auto leading-relaxed">
                    2030年、あなたはAIと共存できるか？
                    <br />
                    生き残るための最適解を導き出す。
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-3 gap-4 mb-12 max-w-lg w-full"
            >
                {[
                    { icon: Shield, label: "AI耐性分析" },
                    { icon: TrendingUp, label: "成長戦略" },
                    { icon: Zap, label: "即実践可能" },
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

            <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onStart}
                className="relative group"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity animate-glow" />
                <div className="relative px-10 py-5 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-primary-foreground font-bold text-lg tracking-wide">
                    3分で運命を診断する
                </div>
            </motion.button>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="mt-8 flex items-center gap-3"
            >
                <div className="flex items-center gap-2 px-5 py-2.5 glass rounded-full border border-neon-cyan/30">
                    <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                    <span className="text-sm font-medium text-neon-cyan">完全無料</span>
                </div>
                <div className="flex items-center gap-2 px-5 py-2.5 glass rounded-full border border-neon-purple/30">
                    <div className="w-2 h-2 rounded-full bg-neon-purple animate-pulse" />
                    <span className="text-sm font-medium text-neon-purple">登録不要</span>
                </div>
            </motion.div>
        </motion.div>
    )
}
