import { Badge } from '@/components/ui/badge';

export const CATEGORY_INFO: Record<string, { emoji: string; label: string; color: string }> = {
  '🌊 AI時代の本質と世界観': {
    emoji: '🌊',
    label: '世界観',
    color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
  },
  '💣 AIと雇用・労働の崩壊': {
    emoji: '💣',
    label: '雇用崩壊',
    color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
  },
  '🛡️ AI時代の生存戦略・総論': {
    emoji: '🛡️',
    label: '生存戦略',
    color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
  },
  '💼 ハイクラス転職・キャリア戦略': {
    emoji: '💼',
    label: '転職術',
    color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
  },
  '📖 ストーリーテリング・ドキュメンタリー思考': {
    emoji: '📖',
    label: '物語思考',
    color: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200'
  },
  '🤖 AIと人間の本質・アイデンティティ': {
    emoji: '🤖',
    label: '人間性',
    color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200'
  },
  '💰 AI時代のお金・財布・経済格差': {
    emoji: '💰',
    label: '経済格差',
    color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
  },
  '🎯 AIを武器にするスキル・思考法': {
    emoji: '🎯',
    label: 'AI活用',
    color: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200'
  },
  '🏢 組織・会社との付き合い方': {
    emoji: '🏢',
    label: '組織戦略',
    color: 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200'
  },
  '🎨 クリエイティブ・表現者の生存': {
    emoji: '🎨',
    label: '創造力',
    color: 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200'
  },
  '⚔️ AI・国家・軍事・倫理': {
    emoji: '⚔️',
    label: '地政学',
    color: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
  },
  '🧭 キャリア・ポートフォリオ設計': {
    emoji: '🧭',
    label: 'キャリア設計',
    color: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200'
  },
  'AI時代のキャリア': {
    emoji: '🧭',
    label: 'キャリア設計',
    color: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200'
  }
};

interface CategoryBadgeProps {
  category: string;
  variant?: 'full' | 'compact' | 'icon-only';
  className?: string;
}

export function CategoryBadge({ category, variant = 'compact', className = '' }: CategoryBadgeProps) {
  const info = CATEGORY_INFO[category];

  if (!info) {
    return null;
  }

  const content = {
    'full': `${info.emoji} ${category}`,
    'compact': `${info.emoji} ${info.label}`,
    'icon-only': info.emoji
  };

  return (
    <Badge
      variant="secondary"
      className={`${info.color} ${className} font-medium`}
    >
      {content[variant]}
    </Badge>
  );
}
