// /comparison（と /comparison/more-options）は ?type= が無いと「無効なページです」になり、中身はブラウザ側で描画される。
// 検索結果には出さない（noindex, follow）
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  path: '/comparison',
  title: '診断タイプ別のおすすめ比較',
  description: 'AI時代の働き方 自己診断のタイプ別に、学び直しと転職相談の選択肢を比較するページ。',
  noindex: true,
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
