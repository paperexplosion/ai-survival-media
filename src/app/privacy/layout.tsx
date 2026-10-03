import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  path: '/privacy',
  title: 'プライバシーポリシー',
  description: 'AI Survival Report（運営：ストーリーテリング合同会社）の個人情報の取り扱い、広告配信のCookie、Googleアナリティクスによるアクセス解析についての方針。',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
