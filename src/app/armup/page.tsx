"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Zap } from 'lucide-react';
import { reskillingServices } from '@/lib/affiliate-data';
import AffiliateServiceCard from '@/components/affiliate-service-card';

const categoryOrder = [
  "AI特化",
  "AI×副業",
  "AI自動化",
  "プログラミング",
  "上級エンジニア",
  "初心者向け",
  "学生向け",
];

const categoryLabels: Record<string, { label: string; desc: string }> = {
  "AI特化": { label: "AI特化スクール", desc: "生成AIをビジネスの武器にする。今すぐ「使う側」へ。" },
  "AI×副業": { label: "AI×副業・独立", desc: "本業×AIで副収入を構築。個人が法人を超える時代。" },
  "AI自動化": { label: "AI業務自動化", desc: "事務・マーケを自動化し、自分の時間と価値を取り戻す。" },
  "プログラミング": { label: "プログラミング", desc: "コードを書ける人間は、AIと対等に話せる。" },
  "上級エンジニア": { label: "上級・CS特化", desc: "AIに代替されない深い技術力を身につける。" },
  "初心者向け": { label: "初心者向け", desc: "ゼロから始める。最初の一歩が、5年後の差を生む。" },
  "学生向け": { label: "学生向け", desc: "AIネイティブ世代として、最初からプロダクトを作る原体験を。" },
};

export default function ArmUpPage() {
  const router = useRouter();

  const categories = categoryOrder.filter(cat =>
    reskillingServices.some(s => s.category === cat)
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
              <div className="w-1 h-24 bg-gradient-to-b from-neon-purple to-neon-cyan flex-shrink-0 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.5)]" />
              <div>
                <p className="text-neon-purple text-sm font-bold tracking-widest uppercase mb-2">Arm Up</p>
                <h1 className="text-5xl md:text-7xl font-black text-white mb-4 leading-tight">
                  AIスキルで<br />武装せよ。
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  AIを学び、使う側に回れ。<br />
                  AIが仕事を奪うのではない。AIを使える人間が、使えない人間の仕事を奪うのだ。
                </p>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 border border-white/10 mb-4">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-neon-purple mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 leading-relaxed text-sm">
                  AIの進化を待っている時間はない。スキルは今日学び始めた人間が、半年後に圧倒的な差をつける。半年後、一年後の自分が「あの時始めておいてよかった」と思えるかどうかは、今日の選択で決まる。どのスキルから始めるか。そこにあなたの現在地がある。
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Services by category */}
        {categories.map((cat, catIndex) => {
          const services = reskillingServices.filter(s => s.category === cat);
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
            当ページに掲載するサービスはアフィリエイトリンクを含みます。リンクからの申し込みにより運営者に紹介料が発生する場合がありますが、掲載サービスの選定・評価は編集部が独自の基準で行っています。
          </p>
        </section>

        {/* Bottom CTA */}
        <section className="container mx-auto px-6 py-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-10 border border-neon-purple/20"
          >
            <h3 className="text-2xl font-bold text-white mb-3">まず、自分を診断する。</h3>
            <p className="text-gray-400 mb-6">どのスキルを優先すべきか。あなたの診断結果が答えを導く。</p>
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
