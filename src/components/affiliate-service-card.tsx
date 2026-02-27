'use client';

import { AffiliateService } from '@/lib/affiliate-data';

interface AffiliateServiceCardProps {
  service: AffiliateService;
}

const categoryColorMap: Record<string, string> = {
  'ハイクラス転職': 'from-neon-cyan to-neon-blue',
  'グローバル転職': 'from-neon-purple to-neon-cyan',
  'セキュリティ特化': 'from-neon-blue to-neon-purple',
  'SAP特化': 'from-neon-cyan to-neon-purple',
  'マーケ特化': 'from-neon-purple to-neon-blue',
  'フリーランス': 'from-neon-cyan to-neon-purple',
  'エンジニア転職': 'from-amber-500 to-orange-500',
  'エンジニア就活': 'from-orange-500 to-red-500',
  '安定・技術職': 'from-amber-400 to-orange-400',
  '第二新卒': 'from-orange-400 to-red-400',
  'AI特化': 'from-neon-cyan to-neon-purple',
  'AI×副業': 'from-neon-purple to-neon-blue',
  'AI自動化': 'from-neon-blue to-neon-cyan',
  'プログラミング': 'from-neon-cyan to-neon-blue',
  '上級エンジニア': 'from-neon-purple to-neon-cyan',
  '初心者向け': 'from-amber-400 to-orange-500',
  '学生向け': 'from-orange-500 to-red-500',
};

export default function AffiliateServiceCard({ service }: AffiliateServiceCardProps) {
  const gradientClass = categoryColorMap[service.category] || 'from-neon-cyan to-neon-purple';

  return (
    <a
      href={service.url}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="block glass rounded-2xl neon-border hover:bg-white/5 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${gradientClass} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

      <div className="p-6 relative">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-bold text-white group-hover:text-neon-cyan transition-colors">
            {service.name}
          </h3>
          <span className="text-[10px] text-gray-500 bg-white/5 px-2 py-0.5 rounded border border-white/10">
            PR
          </span>
        </div>

        <div className="mb-3">
          <span
            className={`inline-block text-xs px-3 py-1 rounded-full font-bold bg-gradient-to-r ${gradientClass} bg-opacity-20`}
          >
            {service.category}
          </span>
        </div>

        <p className="text-sm text-white mb-4 leading-relaxed">
          {service.desc}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-sm text-white group-hover:text-neon-cyan transition-colors font-medium">
            {service.cta}
          </span>
          <svg
            className="w-5 h-5 text-gray-600 group-hover:text-neon-cyan group-hover:translate-x-1 transition-all"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </a>
  );
}
