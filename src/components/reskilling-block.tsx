'use client';

import { useState } from 'react';
import { getRandomServices, reskillingServices } from '@/lib/affiliate-data';
import AffiliateServiceCard from './affiliate-service-card';

export default function ReskillingBlock() {
  const [services, setServices] = useState(getRandomServices(reskillingServices, 6));

  const handleShuffle = () => {
    setServices(getRandomServices(reskillingServices, 6));
  };

  return (
    <section className="py-16 px-4 bg-[#080808]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-1 h-16 bg-[#cc0000] flex-shrink-0" />
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
                AIスキルで武装せよ。
              </h2>
              <p className="text-xl text-gray-400 mb-6">
                AIを学び、使う側に回れ。
              </p>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed max-w-4xl">
            本レポートが強く勧めるのは、AIを「恐れる」ことではなく「使いこなす」ことだ。AIが仕事を奪うのではない。AIを使える人間が、使えない人間の仕事を奪うのだ。AIの進化を待っている時間はない。スキルは今日学び始めた人間が、半年後に圧倒的な差をつける。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {services.map((service, index) => (
            <AffiliateServiceCard key={`${service.name}-${index}`} service={service} />
          ))}
        </div>

        <div className="flex justify-center mb-6">
          <button
            onClick={handleShuffle}
            className="flex items-center gap-2 px-6 py-3 border border-gray-700 text-gray-300 hover:border-[#cc0000] hover:text-[#cc0000] transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            別のスクールを見る
          </button>
        </div>

        <p className="text-xs text-gray-600 text-center">
          ※ 上記はアフィリエイトリンクを含みます。掲載内容は編集部の基準で選定しています。
        </p>
      </div>
    </section>
  );
}
