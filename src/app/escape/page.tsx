"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Shield } from 'lucide-react';
import { jobAgentServices } from '@/lib/affiliate-data';
import AffiliateServiceCard from '@/components/affiliate-service-card';

const categoryOrder = [
  "ハイクラス転職",
  "グローバル転職",
  "セキュリティ特化",
  "SAP特化",
  "マーケ特化",
  "フリーランス",
  "エンジニア転職",
  "エンジニア就活",
  "安定・技術職",
  "第二新卒",
];

const categoryLabels: Record<string, { label: string; desc: string }> = {
  "ハイクラス転職": { label: "ハイクラス転職", desc: "年収800万円超の非公開求人。上位層だけが知る戦場へ。" },
  "グローバル転職": { label: "グローバル・外資系", desc: "国境を超えた市場で戦う選択肢。" },
  "セキュリティ特化": { label: "セキュリティ職", desc: "AIが拡大するリスクに対応する専門職。需要は増大し続ける。" },
  "SAP特化": { label: "SAP専門職", desc: "参入障壁の高いERP領域で、長期的な安定を手に入れる。" },
  "マーケ特化": { label: "マーケティング職", desc: "戦略を設計できる人間は、AIと共存できる。" },
  "フリーランス": { label: "フリーランス案件", desc: "組織の外に出る選択肢。自律した働き方の入り口。" },
  "エンジニア転職": { label: "エンジニア転職", desc: "技術力で市場価値を積み上げる、最速の逃げ道。" },
  "エンジニア就活": { label: "エンジニア就活", desc: "ITのファーストキャリア。選択肢を今から広げておく。" },
  "安定・技術職": { label: "安定・技術職", desc: "製造・現場系で長期的な信頼を築く。" },
  "第二新卒": { label: "第二新卒・既卒", desc: "レールを外れた人の再スタート。遅すぎることはない。" },
};

export default function EscapePage() {
  const router = useRouter();

  const categories = categoryOrder.filter(cat =>
    jobAgentServices.some(s => s.category === cat)
  );

  return (
    <main className="min-h-screen bg-[#0f172a] text-foreground font-sans pt-20">
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center opacity-5 pointer-events-none" />

      <div className="relative z-10">
        {/* Hero */}
        <section className="container mx-auto px-6 pt-16 pb-12">
          <motion.button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
            whileHover={{ x: -4 }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">戻る</span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-1 h-24 bg-gradient-to-b from-neon-cyan to-neon-blue flex-shrink-0 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.5)]" />
              <div>
                <p className="text-neon-cyan text-sm font-bold tracking-widest uppercase mb-2">Escape Route</p>
                <h1 className="text-5xl md:text-7xl font-black text-white mb-4 leading-tight">
                  逃げ道を<br />確保せよ。
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  転職エージェントは、無料で使えるプロ相談だ。<br />
                  今すぐ転職しなくていい。ただし、今すぐ「動ける状態」を作れ。
                </p>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 border border-white/10 mb-4">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-neon-cyan mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 leading-relaxed text-sm">
                  AIが経済を塗り替えるこの時代、まず自分の市場価値を知り、選択肢を広げておくことが最も重要だ。転職エージェントへの登録は無料であり、キャリアの専門家と話すことで、あなたが気づいていなかった自分の可能性と業界の現実が見えてくる。動くかどうかは、その後で決めればいい。視野を広げておくことが、今のあなたにできる最も賢明な生存戦略だ。
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Services by category */}
        {categories.map((cat, catIndex) => {
          const services = jobAgentServices.filter(s => s.category === cat);
          const catInfo = categoryLabels[cat];
          return (
            <section key={cat} className="container mx-auto px-6 py-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.05 }}
              >
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-white mb-1">{catInfo?.label ?? cat}</h2>
                  {catInfo?.desc && (
                    <p className="text-sm text-gray-400">{catInfo.desc}</p>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {services.map((service, i) => (
                    <AffiliateServiceCard key={`${service.name}-${i}`} service={service} />
                  ))}
                </div>
              </motion.div>
              {catIndex < categories.length - 1 && (
                <div className="mt-10 border-t border-white/5" />
              )}
            </section>
          );
        })}

        {/* Affiliate disclosure */}
        <section className="container mx-auto px-6 pt-12 pb-2 text-center">
          <p className="text-xs text-gray-600 max-w-2xl mx-auto leading-relaxed">
            当サイトは、アフィリエイト収益にて運営しております。掲載するアフィリエイト広告は、編集部が独自の基準に基づき選定しています。
          </p>
        </section>

        {/* Bottom CTA */}
        <section className="container mx-auto px-6 py-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-10 border border-neon-cyan/20"
          >
            <h3 className="text-2xl font-bold text-white mb-3">まず、自分を診断する。</h3>
            <p className="text-gray-400 mb-6">あなたのAI時代における立ち位置と、最適な生存戦略を確認しよう。</p>
            <motion.button
              onClick={() => router.push('/diagnosis')}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white font-bold text-lg"
              style={{ boxShadow: '0 0 30px rgba(251,146,60,0.5)' }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(251,146,60,0.7)' }}
              whileTap={{ scale: 0.98 }}
            >
              無料で診断する
            </motion.button>
          </motion.div>
        </section>

        <footer className="container mx-auto px-6 py-12 border-t border-white/10">
          <div className="text-center text-gray-400 text-sm">
            <p className="mb-2">© 2026 AIサバイバル・レポート</p>
            <p className="text-xs">未来を予測し、今を生き抜く。</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
