'use client';

import { useState } from 'react';
import { getBalancedJobAgents } from '@/lib/affiliate-data';
import AffiliateServiceCard from './affiliate-service-card';

export default function JobAgentBlock() {
  const [services, setServices] = useState(getBalancedJobAgents());

  const handleShuffle = () => {
    setServices(getBalancedJobAgents());
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-1 h-20 bg-gradient-to-b from-neon-cyan to-neon-blue flex-shrink-0 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.5)]" />
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-blue bg-clip-text text-transparent">
                逃げ道を確保せよ。
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                転職エージェントは、無料で使えるプロ相談だ。
              </p>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 neon-border mb-8">
            <p className="text-foreground leading-relaxed">
              本レポートが強く勧めるのは、「今すぐ転職せよ」ではない。AIが経済を塗り替えるこの時代、まず自分の市場価値を知り、選択肢を広げておくことだ。転職エージェントへの登録は無料であり、キャリアの専門家と話すことで、あなたが気づいていなかった自分の可能性と、業界の現実が見えてくる。動くかどうかは、その後で決めればいい。視野を広げておくことが、今のあなたにできる最も賢明な生存戦略だ。
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
            別のエージェントを見る
          </button>
        </div>

        <p className="text-xs text-gray-600 text-center">
          ※ 上記はアフィリエイトリンクを含みます。掲載内容は編集部の基準で選定しています。
        </p>
      </div>
    </section>
  );
}
