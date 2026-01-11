"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight } from "lucide-react"
import type { Question, UserResponse } from "@/types"

interface DiagnosisScreenProps {
    questions: Question[]
    onComplete: (answers: UserResponse[]) => void
}

export function DiagnosisScreen({ questions, onComplete }: DiagnosisScreenProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [answers, setAnswers] = useState<UserResponse[]>([])
    const [selectedOption, setSelectedOption] = useState<number | null>(null)

    const currentQuestion = questions[currentIndex]
    const progress = ((currentIndex + 1) / questions.length) * 100

    const handleSelect = (value: number, axis: 'tech' | 'human' | 'autonomy') => {
        setSelectedOption(value)

        setTimeout(() => {
            const newAnswers = [
                ...answers,
                {
                    questionId: currentQuestion.id,
                    score: value,
                    axis: axis
                }
            ]
            setAnswers(newAnswers)

            if (currentIndex < questions.length - 1) {
                setCurrentIndex(currentIndex + 1)
                setSelectedOption(null)
            } else {
                onComplete(newAnswers)
            }
        }, 300)
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex flex-col px-6 py-12 relative z-10"
        >
            <div className="max-w-lg mx-auto w-full mb-8">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">
                        Question {currentIndex + 1} / {questions.length}
                    </span>
                    <span className="text-sm text-neon-cyan font-mono">{Math.round(progress)}%</span>
                </div>
                <div className="h-1 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-neon-blue to-neon-purple"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                </div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center max-w-lg mx-auto w-full">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentQuestion.id}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.4 }}
                        className="w-full"
                    >
                        <div className="glass rounded-2xl p-6 mb-8 neon-border">
                            <h2 className="text-xl md:text-2xl font-bold text-foreground leading-relaxed">
                                {currentQuestion.text}
                            </h2>
                        </div>

                        <div className="space-y-3">
                            {currentQuestion.options.map((option, index) => (
                                <motion.button
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02, x: 10 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => handleSelect(option.value, option.axis)}
                                    className={`w-full text-left p-5 rounded-xl glass transition-all duration-300 flex items-center justify-between group ${selectedOption === option.value
                                        ? "border-neon-blue bg-neon-blue/20 border"
                                        : "hover:border-neon-purple/50 border border-transparent"
                                        }`}
                                >
                                    <span className="text-foreground font-medium">{option.label}</span>
                                    <ChevronRight
                                        className={`w-5 h-5 transition-all duration-300 ${selectedOption === option.value
                                            ? "text-neon-blue translate-x-1"
                                            : "text-muted-foreground group-hover:text-neon-purple group-hover:translate-x-1"
                                            }`}
                                    />
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </motion.div>
    )
}
