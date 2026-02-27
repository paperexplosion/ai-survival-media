'use client';

import { useRouter } from 'next/navigation';

export default function DiagnosisCTABanner() {
  const router = useRouter();

  return (
    <div className="my-8 p-5 rounded-xl bg-gradient-to-br from-amber-500/5 via-orange-500/5 to-amber-500/5 border border-amber-500/20">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-white mb-1">
            あなたのAI時代適応度は？
          </p>
          <p className="text-xs text-white">
            3分で診断・具体的なロードマップを提示
          </p>
        </div>

        <button
          onClick={() => router.push('/diagnosis')}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-sm hover:shadow-lg hover:shadow-amber-500/30 transition-all whitespace-nowrap"
        >
          無料診断を受ける
        </button>
      </div>
    </div>
  );
}
