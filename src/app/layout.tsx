import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://ai-survival.org'),
  title: 'AIサバイバル・インテリジェンス | AI時代を生き抜く戦略',
  description: '2026年、AI革命の波が全ての職業を襲う。12の職業タイプ診断で、あなたのAI時代サバイバル戦略を明らかにします。',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'AIサバイバル・インテリジェンス',
    description: 'AI時代を生き抜くための戦略的インテリジェンス',
    url: 'https://ai-survival.org',
    siteName: 'AIサバイバル・インテリジェンス',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AIサバイバル・インテリジェンス',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIサバイバル・インテリジェンス',
    description: 'AI時代を生き抜くための戦略的インテリジェンス',
    images: [
      {
        url: '/og-image.png',
        alt: 'AIサバイバル・インテリジェンス',
      },
    ],
  },
  alternates: {
    canonical: 'https://ai-survival.org',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2731207449068887"
          crossOrigin="anonymous"
        />
        {/* Google Analytics - Replace with your actual Measurement ID */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'AIサバイバル・インテリジェンス',
              description: 'AI時代を生き抜くための戦略的インテリジェンス。12の職業タイプ診断であなたのサバイバル戦略を明らかにします。',
              url: 'https://ai-survival.org',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://ai-survival.org/search?q={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-[#0f172a] text-white min-h-screen`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
