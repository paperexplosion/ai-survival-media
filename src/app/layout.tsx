import './globals.css';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://ai-survival.org'),
  title: 'AI Documentary Report | AIと人間と。',
  description: 'AIと人間の共存を、記録する。ジャーナリズムとしてのAIドキュメンタリー。あなたの仕事には、人間の物語がありますか。',
  verification: {
    google: 'IpUg-r_m20iTJn1cFB8st9ueCp6CkV_ALs3QBRwOKVI',
  },
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
    title: 'AI Documentary Report',
    description: 'AIと人間の共存を記録する。',
    url: 'https://ai-survival.org',
    siteName: 'AI Documentary Report',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI Documentary Report',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Documentary Report',
    description: 'AIと人間の共存を記録する。',
    images: [
      {
        url: '/og-image.png',
        alt: 'AI Documentary Report',
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
        {/* Yuji Syuku 毛筆体フォント + Shippori Mincho B1 明朝体フォールバック */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Yuji+Syuku&family=Shippori+Mincho+B1:wght@400;500;600;700;800&display=swap"
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
        {/* Structured Data: WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'AI Documentary Report',
              description: 'AIと人間の共存を、ドキュメンタリーとして記録するメディア。あなたの仕事には、人間の物語がありますか。',
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
        {/* Structured Data: Organization + sameAs（ドメイン信頼性強化） */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'AI Documentary Report',
              alternateName: 'AI Survival Report',
              url: 'https://ai-survival.org',
              logo: {
                '@type': 'ImageObject',
                url: 'https://ai-survival.org/og-image.png',
              },
              description: 'AIと人間の共存を、ドキュメンタリーとして記録するメディア。日本のAIリテラシー向上を支援する独立メディア。',
              sameAs: [
                'https://x.com/ai_survival',
                'https://github.com/paperexplosion',
              ],
            }),
          }}
        />
      </head>
      <body className="bg-[#0f172a] text-white min-h-screen">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
