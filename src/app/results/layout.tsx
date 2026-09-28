// /results は URL の ?type= を読んでブラウザ側で描画するため、検索エンジンからは中身が空に見える。
// 検索結果には出さない（noindex）が、ページ内のリンクはたどってもらう（follow）
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  path: '/results',
  title: '診断結果',
  description: 'AI時代の働き方 自己診断の結果ページ。',
  noindex: true,
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
