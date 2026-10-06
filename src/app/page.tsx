// トップページ。見た目は src/components/home-page.tsx（クライアント描画）。
// ここはサーバー側で、トップ固有の title / description / canonical を持つ
import type { Metadata } from 'next';
import Home from '@/components/home-page';
import { getAllBlogPosts, toCard } from '@/lib/blog-posts';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = {
  ...pageMetadata({
    path: '/',
    title: 'AI Survival Report | AIと人間と。',
    description: 'AI Survival Report（AIサバイバルレポート）は、AIと人間の共存を記録するメディア。AIで仕事・暮らし・生き方がどう変わるのかを、報道と一次資料から記録する。',
  }),
};

export default function Page() {
  const all = getAllBlogPosts();
  return <Home posts={all.slice(0, 9).map(toCard)} totalCount={all.length} />;
}
