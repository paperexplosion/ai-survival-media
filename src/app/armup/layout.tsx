import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  path: '/armup',
  title: 'AIを、自分の手に持ち直す：学び直しの選択肢',
  description: 'AIを学び、使う側へ。AIスキルの学び直しに使えるスクール・講座を、目的別に紹介します。まずは自己診断で、優先すべきスキルを確かめてください。',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
