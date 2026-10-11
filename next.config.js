/** @type {import('next').NextConfig} */
const merged = require('./src/lib/merged-posts.json').redirects;

const nextConfig = {
  images: {
    domains: ['drive.google.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        pathname: '/uc/**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      // 近似重複の記事を代表記事へ恒久リダイレクト（permanent: true = 308）
      ...Object.entries(merged).map(([from, to]) => ({
        source: `/blog/${from}`,
        destination: `/blog/${to}`,
        permanent: true,
      })),
      // URL の末尾に「**」が付いて届くリンク（Markdown の太字記号がURLに混ざったもの）を、正しい記事へ恒久リダイレクト。
      // 付いたままだと /blog 一覧と同じ中身が200で返り、記事を探している読者と検索エンジンに誤った画面を見せてしまう
      {
        source: '/blog/:slug([A-Za-z0-9_-]+)\\*\\*',
        destination: '/blog/:slug',
        permanent: true,
      },
      // www 付きで届いた場合も恒久リダイレクト（Vercel のドメイン設定で 307 を出している間は、ここまで届かない）
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.ai-survival.org' }],
        destination: 'https://ai-survival.org/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
