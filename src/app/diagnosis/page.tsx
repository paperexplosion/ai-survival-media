"use client";

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HomeScreen } from '@/components/home-screen';
import { DiagnosisScreen } from '@/components/diagnosis-screen';
import EmailForm from '@/components/EmailForm';
import { QUESTIONS } from '@/lib/constants';
import { calculateDiagnosis } from '@/lib/diagnostic';
import { saveDiagnosisResult } from '@/lib/supabase';
import { UserResponse, DiagnosticResult } from '@/types';

type Step = 'INTRO' | 'QUESTION' | 'EMAIL';

export default function DiagnosisPage() {
  const [step, setStep] = useState<Step>('INTRO');
  const [answers, setAnswers] = useState<UserResponse[]>([]);
  const [result, setResult] = useState<DiagnosticResult | null>(null);

  const handleStart = () => {
    setStep('QUESTION');
  };

  const handleQuestionsComplete = (responses: UserResponse[]) => {
    setAnswers(responses);
    const diagResult = calculateDiagnosis(responses);
    setResult(diagResult);
    setStep('EMAIL');
  };

  const handleEmailSubmit = async (email?: string) => {
    if (!result) return;

    try {
      await saveDiagnosisResult({
        email,
        responses: answers,
        result: result,
        timestamp: new Date(),
      });
    } catch (error) {
      console.error('Failed to save data:', error);
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-background text-foreground font-sans selection:bg-neon-purple/30 pt-20">
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-neon-purple/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen animate-pulse" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-neon-cyan/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none opacity-20" />

      <AnimatePresence mode="wait">
        {step === 'INTRO' && (
          <HomeScreen key="intro" onStart={handleStart} />
        )}

        {step === 'QUESTION' && (
          <DiagnosisScreen
            key="question"
            questions={QUESTIONS}
            onComplete={handleQuestionsComplete}
          />
        )}

        {step === 'EMAIL' && result && (
          <motion.div
            key="email"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 w-full"
          >
            <EmailForm
              onSubmit={handleEmailSubmit}
              resultType={result.type}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
