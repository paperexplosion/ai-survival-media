import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  path: '/escape',
  title: '相談しておくことは、正しいことだ：転職エージェントという選択肢',
  description: '転職エージェントは、無料で使えるキャリア相談。今すぐ動かなくていい。選択肢を持っておくための相談先を紹介します。',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
