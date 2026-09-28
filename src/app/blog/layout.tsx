// /blog（記事一覧）固有の title / description / canonical。page.tsx はクライアント描画のため layout で受け持つ
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  path: '/blog',
  title: 'レポート一覧（全記事）',
  description: 'AIと人間の共存を記録したニュースレポートと解説記事の一覧。雇用、お金、キャリア、創作、国家と倫理など12のテーマから読めます。',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
