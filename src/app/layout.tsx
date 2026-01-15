import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AIサバイバル・インテリジェンス | AI時代を生き抜く戦略',
  description: '2026年、AI革命の波が全ての職業を襲う。12の職業タイプ診断で、あなたのAI時代サバイバル戦略を明らかにします。',
  openGraph: {
    title: 'AIサバイバル・インテリジェンス',
    description: 'AI時代を生き抜くための戦略的インテリジェンス',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIサバイバル・インテリジェンス',
    description: 'AI時代を生き抜くための戦略的インテリジェンス',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
