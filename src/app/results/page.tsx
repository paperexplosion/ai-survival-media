"use client";

import { Suspense, useEffect, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { ResultScreen } from "@/components/result-screen";
import { CAREER_TYPES_DATA } from "@/lib/constants";
import type { CareerType, DiagnosticResult } from "@/types";

const TYPE_RADAR_DEFAULTS: Record<CareerType, { tech: number; human: number; autonomy: number }> = {
    AI_MASTER: { tech: 90, human: 50, autonomy: 90 },
    DIGITAL_ARTISAN: { tech: 90, human: 20, autonomy: 50 },
    ENDANGERED_WORKER: { tech: 10, human: 20, autonomy: 10 },
    COMMUNITY_WEAVER: { tech: 30, human: 90, autonomy: 50 },
    DATA_ALCHEMIST: { tech: 90, human: 10, autonomy: 30 },
    GLOBAL_NOMAD: { tech: 50, human: 50, autonomy: 90 },
    ETHICAL_GUARDIAN: { tech: 40, human: 80, autonomy: 40 },
    INNOVATION_ARCHITECT: { tech: 80, human: 80, autonomy: 70 },
    REALITY_BRIDGER: { tech: 70, human: 40, autonomy: 40 },
    SUSTAINABLE_STRATEGIST: { tech: 30, human: 80, autonomy: 60 },
    GIG_SURVIVOR: { tech: 30, human: 30, autonomy: 90 },
    LEGACY_KEEPER: { tech: 40, human: 20, autonomy: 20 },
};

const VALID_TYPES = Object.keys(CAREER_TYPES_DATA) as CareerType[];

function LoadingScreen() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-neon-cyan text-lg animate-pulse">読み込み中...</div>
        </div>
    );
}

function ResultsContent() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const typeParam = searchParams.get("type");

    const isValidType = useMemo(() => {
        return typeParam && VALID_TYPES.includes(typeParam as CareerType);
    }, [typeParam]);

    useEffect(() => {
        if (!isValidType) {
            router.replace("/");
        }
    }, [isValidType, router]);

    const result: DiagnosticResult | null = useMemo(() => {
        if (!isValidType || !typeParam) return null;

        const type = typeParam as CareerType;
        const data = CAREER_TYPES_DATA[type];

        return {
            type,
            title: data.title,
            description: data.description,
            actionPlan: data.actionPlan,
            recommendations: data.recommendations,
            radarChart: TYPE_RADAR_DEFAULTS[type],
        };
    }, [isValidType, typeParam]);

    const handleRestart = () => {
        router.push("/");
    };

    if (!isValidType || !result) {
        return <LoadingScreen />;
    }

    return (
        <AnimatePresence mode="wait">
            <ResultScreen result={result} onRestart={handleRestart} />
        </AnimatePresence>
    );
}

export default function ResultsPage() {
    return (
        <main className="min-h-screen relative overflow-hidden bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans selection:bg-neon-purple/30">
            <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-neon-purple/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen animate-pulse" />
            <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-neon-cyan/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen animate-pulse" style={{ animationDelay: "2s" }} />
            <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none opacity-20" />

            <Suspense fallback={<LoadingScreen />}>
                <ResultsContent />
            </Suspense>
        </main>
    );
}
