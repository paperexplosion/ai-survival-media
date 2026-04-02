import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://ai-survival.org'),
  title: 'AI時代のサバイバルメディア | AIと人間と。',
  description: '2026年、AI時代という光と闇が、未知なる物語の幕を開ける。変わりゆく世界のルールを進化の機会へと転換し、新世界の地平を拓く。',
  icons: {
    icon: [
      { url: '/icon', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'AI時代のサバイバルメディア',
    description: 'AIと人間と。未来を予測し、今を生き抜く。',
    url: 'https://ai-survival.org',
    siteName: 'AI時代のサバイバルメディア',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI時代のサバイバルメディア',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI時代のサバイバルメディア',
    description: 'AIと人間と。未来を予測し、今を生き抜く。',
    images: [
      {
        url: '/og-image.png',
        alt: 'AI時代のサバイバルメディア',
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
        {/* Yuji Syuku 毛筆体フォント */}
        <link
          href="https://fonts.googleapis.com/css2?family=Yuji+Syuku&display=swap"
          rel="stylesheet"
        />
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
              name: 'AI時代のサバイバルメディア',
              description: 'AIと人間と。未来を予測し、今を生き抜く。AI時代を生き抜くための未来予測インテリジェンス。',
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
