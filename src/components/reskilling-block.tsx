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
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-1 h-20 bg-gradient-to-b from-neon-purple to-neon-cyan flex-shrink-0 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.5)]" />
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan bg-clip-text text-transparent">
                AIスキルで武装せよ。
              </h2>
              <p className="text-xl text-white mb-6">
                AIを学び、使う側に回れ。
              </p>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 neon-border mb-8">
            <p className="text-foreground leading-relaxed">
              本レポートが強く勧めるのは、AIを「恐れる」ことではなく「使いこなす」ことだ。AIが仕事を奪うのではない。AIを使える人間が、使えない人間の仕事を奪うのだ。AIの進化を待っている時間はない。スキルは今日学び始めた人間が、半年後に圧倒的な差をつける。
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {services.map((service, index) => (
            <AffiliateServiceCard key={`${service.name}-${index}`} service={service} />
          ))}
        </div>

        <div className="flex justify-center mb-6">
          <button
            onClick={handleShuffle}
            className="flex items-center gap-2 px-8 py-3 glass rounded-full neon-border text-foreground hover:bg-white/5 hover:text-neon-cyan transition-all duration-200 group"
          >
            <svg className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
