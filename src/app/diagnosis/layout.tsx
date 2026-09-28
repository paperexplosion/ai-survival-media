import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  path: '/diagnosis',
  title: 'AI時代の働き方 自己診断（無料・3分）',
  description: 'いくつかの問いに答えるだけで、AI時代のあなたの働き方の現在地と、これからの進み方を確かめられる無料の自己診断。所要3分。',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
