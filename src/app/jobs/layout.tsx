// /jobs/* は本文をブラウザ側で読み込んで描画するため、検索エンジンからは「読み込み中」に見える。
// 検索結果には出さない（noindex, follow）。サイトマップからも外している
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  path: '/jobs',
  title: '職種別レポート',
  description: '職種ごとにAIの影響を記録するレポート。',
  noindex: true,
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
