'use client';

import { useRouter } from 'next/navigation';

export default function DiagnosisCTABanner() {
  const router = useRouter();

  return (
    <div className="my-12 bg-[#080808] border-l-4 border-[#cc0000] p-8 rounded-r-xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#cc0000]/5 to-transparent" />

      <div className="relative">
        <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
          あなたのAI時代サバイバル確率は？
        </h3>
        <p className="text-gray-300 mb-6 leading-relaxed">
          12の職業タイプ診断で、あなたの現在地と生存戦略を明らかにします。わずか3分で、AI時代を生き抜くための具体的なロードマップを手に入れましょう。
        </p>

        <div className="flex flex-col items-start gap-2">
          <button
            onClick={() => router.push('/diagnosis')}
            className="bg-[#cc0000] hover:bg-[#aa0000] text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_rgba(204,0,0,0.5)]"
          >
            あなたの未来を診断する
          </button>
          <p className="text-xs text-gray-500">
            無料・3分で完了
          </p>
        </div>
      </div>
    </div>
  );
}
