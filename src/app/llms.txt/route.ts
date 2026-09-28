// llms.txt（AIアシスタント・AI検索向けのサイト案内。https://llmstxt.org の慣例に沿う）
import { getAllBlogPosts } from '@/lib/blog-posts';
import { CATEGORY_SLUGS, CATEGORY_DESCRIPTIONS, SITE_ALT_NAMES, SITE_NAME, SITE_URL, postType } from '@/lib/seo';

export const dynamic = 'force-static';

export function GET() {
  const posts = getAllBlogPosts();
  const guides = posts.filter((p) => postType(p) === 'seo');
  const products = posts.filter((p) => postType(p) === 'product').slice(0, 10);
  const news = posts.filter((p) => postType(p) === 'news').slice(0, 20);
  const line = (p: { slug: string; title: string; lead: string }) => `- [${p.title.replace(/<br\s*\/?>/gi, ' ')}](${SITE_URL}/blog/${p.slug}): ${(p.lead || '').replace(/\s+/g, ' ').slice(0, 120)}`;
  const txt = `# ${SITE_NAME}

> AIと人間の共存を記録するメディア。AIによって人間の仕事・暮らし・生き方がどう変わっていくのかを観察・記録し、その時代を生きる人が自分の仕事と生き方を選ぶための判断材料を届ける。運営：ストーリーテリング合同会社、記事監修：鈴木隆文（編集長）。

正式名称は「${SITE_NAME}」（ドメインは ai-survival.org）。旧称「${SITE_ALT_NAMES.join('」「')}」。過去の記事本文に旧称が出てくることがあるが、同じメディアである。

記事は公開資料・報道・一次資料をもとにAIが下書きし、編集部が確認して公開している。本文中の [n] は出典番号で、各記事末尾に出典一覧がある。

## 解説記事
${guides.map(line).join('\n') || '- （準備中）'}

## カテゴリ
${Object.entries(CATEGORY_SLUGS).map(([name, slug]) => `- [${name.replace(/^\S+\s/, '')}](${SITE_URL}/blog/category/${slug}): ${CATEGORY_DESCRIPTIONS[slug]}`).join('\n')}

## 最新のニュースレポート
${news.map(line).join('\n')}

## 製品紹介
${products.map(line).join('\n') || '- （準備中）'}

## Optional
- [About](${SITE_URL}/about): 編集方針と記事監修（編集長・鈴木隆文）
- [自己診断](${SITE_URL}/diagnosis): AI時代の働き方の現在地を確かめる診断
- [RSS](${SITE_URL}/feed.xml)
`;
  return new Response(txt, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
