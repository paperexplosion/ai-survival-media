import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface EmailFormProps {
    onSubmit: (email?: string) => void;
    resultType: string;
    loading?: boolean;
}

export default function EmailForm({ onSubmit, resultType, loading = false }: EmailFormProps) {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (isSubmitting) return;
        setIsSubmitting(true);

        try {
            onSubmit(email || undefined);
        } catch (error) {
            console.error('Submission processing failed', error);
        }

        router.push(`/results?type=${resultType}`);
    };

    const handleSkip = async (e: React.MouseEvent) => {
        e.preventDefault();
        if (isSubmitting) return;
        setIsSubmitting(true);

        try {
            onSubmit(undefined);
        } catch (error) {
            console.error('Skip submission processing failed', error);
        }

        router.push(`/results?type=${resultType}`);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] max-w-md mx-auto px-4 fade-in">
            <div className="glass-panel p-8 w-full text-center">
                <h2 className="text-2xl font-bold mb-4">診断が完了しました</h2>
                <p className="text-text-secondary mb-8">
                    結果を表示する前に、メールアドレスの登録（任意）をお願いします。<br />
                    登録すると、この結果を保存し、後で振り返ることができます。
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <input
                        type="email"
                        placeholder="example@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-black/30 border border-white/20 rounded-lg p-4 text-white focus:outline-none focus:border-purple-500 transition-colors"
                    />

                    <div className="space-y-3">
                        <button
                            type="submit"
                            className="btn-primary w-full"
                        >
                            結果を見る
                        </button>

                        <button
                            type="button"
                            onClick={handleSkip}
                            className="text-sm text-text-secondary hover:text-white underline decoration-dotted"
                        >
                            登録せずに結果を見る
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
