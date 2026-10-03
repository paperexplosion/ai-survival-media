import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  path: '/contact',
  title: 'お問い合わせ',
  description: 'AIサバイバルレポート へのお問い合わせ。診断結果の感想、ビジネスのご相談、メディア掲載のご依頼などはこちらから。',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
