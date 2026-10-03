// SEO・配信（構造化データ・RSS・ニュースサイトマップ・カテゴリページ）の共通処理
import type { Metadata } from 'next';
import type { BlogPost } from './blog-posts';

export const SITE_URL = 'https://ai-survival.org';
// 正式名称（2026-10-04 鈴木編集長兼社長の決定で「AI Documentary Report」から改名、
// 同日中に英語表記「AI Survival Report」に再変更。
// サブタイトル「AIと人間と。」はそのまま維持。Google ニュース Publisher Center の出版物名も合わせて変更要）。
// 構造化データ・RSS・ニュースサイトマップ・og:site_name はこの名前。ドメインは ai-survival.org のまま
export const SITE_NAME = 'AI Survival Report'; // 2026-10-04 Tim の点検 B-1：トップの title・ヘッダーと揃える（「AIと人間と。」はキャッチコピー扱い）
// ページタイトル末尾に付ける短い名前（検索結果でタイトル本文が削られないように）
export const SITE_SHORT_NAME = 'AI Survival Report';
export const SITE_FORMER_NAMES = ['AI Documentary Report']; // 旧称（2026-10-04 改名）
export const SITE_READINGS = ['AIサバイバルレポート', 'AIサバイバル・レポート']; // 読み方（カタカナ表記）
export const SITE_ALT_NAMES = ['AIと人間と。AI Survival Report', ...SITE_READINGS, ...SITE_FORMER_NAMES];
export const SITE_DESCRIPTION = 'AIと人間の共存を、ドキュメンタリーとして記録するメディア。AIで仕事・暮らし・生き方がどう変わるのかを、報道と一次資料から記録する。';
export const PUBLISHER_NAME = 'ストーリーテリング合同会社';
// 記事の表示は「記事監修：鈴木隆文」だけ（2026-09-28 鈴木編集長兼社長の決定）。
// 構造化データでは author = メディア（Organization）、editor = 鈴木隆文（Person）とする
export const AUTHOR_NAME = '鈴木隆文';
export const AUTHOR_URL = `${SITE_URL}/about`;
export const LOGO_URL = `${SITE_URL}/apple-icon`; // 180×180（Google のロゴ推奨 112px 以上）
export const OG_IMAGE = '/og-image.png';

export const ORGANIZATION_LD = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: SITE_ALT_NAMES,
  url: SITE_URL,
  logo: { '@type': 'ImageObject', url: LOGO_URL },
};

export const EDITOR_LD = {
  '@type': 'Person',
  '@id': `${SITE_URL}/about#editor`,
  name: AUTHOR_NAME,
  jobTitle: '編集長（記事監修）',
  url: AUTHOR_URL,
  worksFor: { '@type': 'Organization', name: PUBLISHER_NAME, url: 'https://storytelling.studio.site/' },
};

// 各ページ固有の title / description / canonical / OGP をまとめて作る。
// Next.js は子ページで alternates・openGraph を定義すると親の値を丸ごと置き換えるので、毎回すべて渡す
export function pageMetadata({ path, title, description, noindex = false }: {
  path: string; title: string; description: string; noindex?: boolean;
}): Metadata {
  const fullTitle = title.includes(SITE_SHORT_NAME) ? title : `${title} | ${SITE_SHORT_NAME}`;
  const images = [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }];
  return {
    title: { absolute: fullTitle },
    description,
    alternates: {
      // noindex のページは canonical を出さない（「このURLが正本」と「検索に出さない」を同時に言わない）
      ...(noindex ? {} : { canonical: path }),
      types: { 'application/rss+xml': [{ url: '/feed.xml', title: SITE_NAME }] },
    },
    openGraph: { title: fullTitle, description, url: path, siteName: SITE_NAME, locale: 'ja_JP', type: 'website', images },
    twitter: { card: 'summary_large_image', title: fullTitle, description, images },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

// カテゴリ（CATEGORY_INFO の正式名）と URL 用の英語スラッグ
export const CATEGORY_SLUGS: Record<string, string> = {
  '🌊 AI時代の本質と世界観': 'worldview',
  '💣 AIと雇用・労働の崩壊': 'jobs',
  '🛡️ AI時代の生存戦略・総論': 'survival',
  '💼 ハイクラス転職・キャリア戦略': 'career-change',
  '📖 ストーリーテリング・ドキュメンタリー思考': 'storytelling',
  '🤖 AIと人間の本質・アイデンティティ': 'humanity',
  '💰 AI時代のお金・財布・経済格差': 'money',
  '🎯 AIを武器にするスキル・思考法': 'ai-skills',
  '🏢 組織・会社との付き合い方': 'organization',
  '🎨 クリエイティブ・表現者の生存': 'creative',
  '⚔️ AI・国家・軍事・倫理': 'geopolitics',
  '🧭 キャリア・ポートフォリオ設計': 'career-design',
};

export const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  worldview: 'AIが社会と時代の前提をどう変えていくのか。大きな構造の変化を記録します。',
  jobs: '失業・代替・賃金・労働市場。AIで仕事がどう変わり、何が失われ、何が残るのかを記録します。',
  survival: 'AI時代を生きる個人が、変化にどう備え、どう適応するかを考えます。',
  'career-change': '転職・年収・市場価値。AI時代のキャリアの動かし方を考えます。',
  storytelling: '物語・証言・現場。AI時代に人間が語ることの意味を記録します。',
  humanity: '人間らしさ・感情・創造性・尊厳。AIと向き合う人間の側の本質を考えます。',
  money: '投資・資産・格差・企業の資金。AIがお金と経済をどう動かしているかを記録します。',
  'ai-skills': 'AIツール・製品・活用法。AIを使う側に立つための道具と考え方を届けます。',
  organization: '会社・組織・制度。AIが入った職場で、人と組織の関係がどう変わるかを考えます。',
  creative: '創作・著作権・表現。AI時代のクリエイターの生存と権利を記録します。',
  geopolitics: '国家・規制・軍事・倫理。AIをめぐる権力と安全保障の動きを記録します。',
  'career-design': '副業・学び直し・複数の仕事。AI時代のキャリアの組み立て方を考えます。',
};

export function categorySlug(category: string): string | undefined {
  return CATEGORY_SLUGS[category];
}

export function categoryBySlug(slug: string): string | undefined {
  return Object.keys(CATEGORY_SLUGS).find((k) => CATEGORY_SLUGS[k] === slug);
}

// 記事の日付（"2026-09-26 20:23" = 日本時間）を ISO 8601（+09:00 付き）に
export function toIsoJst(date: string | undefined): string | undefined {
  if (!date) return undefined;
  const m = date.trim().match(/^(\d{4}-\d{2}-\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?/);
  if (!m) return undefined;
  const [, d, hh = '00', mm = '00', ss = '00'] = m;
  if (/[+-]\d{2}:?\d{2}$|Z$/.test(date.trim())) return new Date(date).toISOString();
  return `${d}T${hh}:${mm}:${ss}+09:00`;
}

export function absUrl(u: string | undefined): string | undefined {
  if (!u) return undefined;
  return u.startsWith('http') ? u : `${SITE_URL}${u.startsWith('/') ? '' : '/'}${u}`;
}

export function plain(text: string): string {
  return text
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_`#>]/g, '')
    .replace(/\[\d+\]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// 記事種別（frontmatter の type。なければ slug から推定）
export function postType(post: BlogPost): string {
  if (post.type) return post.type;
  if (post.slug.startsWith('product-')) return 'product';
  return /^\d{8}/.test(post.slug) ? 'news' : 'seo';
}

// 「よくある質問」の Q&A を本文から取り出す（### Q. 見出しで分割されている）
export function extractFaq(post: BlogPost): { q: string; a: string }[] {
  return post.content
    .filter((s) => /^Q[.．]\s*/.test(s.section))
    .map((s) => ({ q: s.section.replace(/^Q[.．]\s*/, '').trim(), a: plain(s.text) }))
    .filter((x) => x.q && x.a);
}

export function escapeXml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}
