// /about 固有の title / description / canonical と、編集長（記事監修）の構造化データ
import type { Metadata } from 'next';
import { EDITOR_LD, SITE_URL, pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  path: '/about',
  title: 'About：編集方針と記事監修 | AI Survival Report（AIサバイバルレポート）',
  description: 'AI Survival Report（AIサバイバルレポート）について。なぜこのメディアをつくったか、編集方針、運営（ストーリーテリング合同会社）と、記事監修を担う編集長・鈴木隆文。',
});

const ld = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${SITE_URL}/about`,
  url: `${SITE_URL}/about`,
  name: 'About：編集方針と記事監修',
  isPartOf: { '@id': `${SITE_URL}/#website` },
  about: { '@id': `${SITE_URL}/#organization` },
  mainEntity: EDITOR_LD,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld).replace(/</g, '\\u003c') }} />
      {children}
    </>
  );
}
