// SEO・配信（構造化データ・RSS・ニュースサイトマップ・カテゴリページ）の共通処理
import type { BlogPost } from './blog-posts';

export const SITE_URL = 'https://ai-survival.org';
export const SITE_NAME = 'AI Documentary Report';
export const AUTHOR_NAME = '鈴木隆文';
export const AUTHOR_URL = `${SITE_URL}/about`;
export const LOGO_URL = `${SITE_URL}/icon`;

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
