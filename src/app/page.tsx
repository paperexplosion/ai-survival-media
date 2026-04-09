"use client";

// page.tsx - site top
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { getAllBlogPosts } from '@/lib/blog-posts';
import { convertGoogleDriveUrl } from '@/lib/google-drive-utils';
import { ArrowRight, BookOpen, Sparkles, Target } from 'lucide-react';

const brushFont = { fontFamily: "'Shiranui', sans-serif" };
const minchoFont = { fontFamily: "'ICHIGAYA Mincho', 'Shippori Mincho B1', 'Noto Serif JP', 'Yu Mincho', serif" };

export default function Home() {
  const router = useRouter();
  const allPosts = getAllBlogPosts();
  const posts = allPosts.slice(0, 9);
  const latestPost = allPosts[0];

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#0f172a] text-foreground font-sans selection:bg-neon-cyan/30 pt-20">
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center opacity-5 pointer-events-none" />

      <div className="relative z-10">
        <section className="container mx-auto px-6 pt-20 pb-16 md:pt-32 md:pb-24 relative">
          {latestPost?.image && (
            <>
              <div
                className="absolute inset-0 -mx-6 bg-cover bg-center opacity-80"
                style={{
                  backgroundImage: `url(${latestPost.image})`,
                }}
              />
              <div className="absolute inset-0 -mx-6 bg-gradient-to-b from-[#0f172a]/60 via-[#0f172a]/70 to-[#0f172a]" />
            </>
          )}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-12"
            >
              <div className="relative inline-block">
                <motion.div
                  className="absolute inset-0 blur-3xl bg-gradient-to-r from-teal-500 via-cyan-400 to-teal-500 opacity-40"
                  animate={{
                    opacity: [0.2, 0.5, 0.2],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
                <div className="relative">
                  <h2
                    className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
                    style={minchoFont}
                  >
                    <span className="bg-gradient-to-r from-teal-300 via-cyan-200 to-teal-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(45,212,191,0.5)]">
                      AI時代のサバイバルメディア
                    </span>
                  </h2>
                  <p
                    className="text-6xl md:text-8xl lg:text-9xl font-black leading-tight"
                    style={brushFont}
                  >
                    <span className="text-white" style={{
                      textShadow: '0 2px 4px rgba(0,0,0,0.9), 0 4px 16px rgba(0,0,0,0.8), 0 8px 40px rgba(0,0,0,0.6)',
                      filter: 'drop-shadow(0 0 20px rgba(59,130,246,0.4)) drop-shadow(0 0 40px rgba(168,85,247,0.3))'
                    } as React.CSSProperties}>
                      AIと人間と。
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>

            <h1
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 leading-snug tracking-tight"
              style={minchoFont}
            >
              <span className="block text-white">未来を予測し、今を生き抜く</span>
            </h1>

            <p
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-snug font-light"
              style={minchoFont}
            >
              2026年、AI時代という光と闇が、<br />
              未知なる物語の幕を開ける。<br /><br />
              変わりゆく世界のルールを『進化の機会』へと転換し、<br />
              新世界の地平を拓く。
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                onClick={() => router.push('/diagnosis')}
                className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white font-bold text-lg overflow-hidden"
                style={{
                  boxShadow: '0 0 40px rgba(251, 146, 60, 0.6)',
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 60px rgba(251, 146, 60, 0.8)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                  animate={{
                    translateX: ['-200%', '200%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                />
                <span className="relative flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  あなたの未来を診断する
                </span>
              </motion.button>

              <motion.button
                onClick={() => {
                  document.getElementById('reports')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-900 text-white font-bold text-lg overflow-hidden"
                style={{
                  boxShadow: '0 0 40px rgba(34, 211, 238, 0.6)',
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 60px rgba(34, 211, 238, 0.8)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                  animate={{
                    translateX: ['-200%', '200%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    delay: 1.5,
                  }}
                />
                <span className="relative flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  レポートを読む
                </span>
              </motion.button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-6 text-sm text-gray-400"
            >
              無料・3分で完了 | 12,000人以上が診断済み
            </motion.p>
          </motion.div>
        </section>

        <section id="reports" className="container mx-auto px-6 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Intelligence Reports
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl">
              AI時代を生き抜くための戦略的インテリジェンス。現場からの生々しい洞察と、実践的なサバイバル戦略。
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => router.push(`/blog/${post.slug}`)}
                className="group cursor-pointer bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]"
              >
                {post.image && (
                  <div className="w-full h-40 overflow-hidden">
                    <img
                      src={convertGoogleDriveUrl(post.image)}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 text-neon-cyan text-xs font-bold border border-neon-cyan/30">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight group-hover:text-neon-cyan transition-colors">
                    {post.title.replace(/<br\s*\/?>/gi, '｜')}
                  </h3>

                  <p className="text-white text-sm leading-relaxed line-clamp-3 mb-6">
                    {post.lead}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {new Date(post.date).toLocaleDateString('ja-JP', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    <div className="flex items-center gap-2 text-neon-cyan text-sm font-bold group-hover:gap-3 transition-all">
                      <span>続きを読む</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {allPosts.length > 9 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center mb-16"
            >
              <motion.button
                onClick={() => router.push('/blog')}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border-2 border-neon-cyan/50 text-neon-cyan font-bold text-lg hover:bg-neon-cyan/10 hover:border-neon-cyan transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(34, 211, 238, 0.4)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                <BookOpen className="w-5 h-5" />
                <span>全ての記事を見る</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <p className="text-gray-400 text-sm mt-4">
                全{allPosts.length}件のレポートを閲覧できます
              </p>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-neon-cyan/10 via-neon-purple/10 to-neon-blue/10 rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 via-neon-purple/5 to-transparent"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                あなたのAI時代サバイバル確率は？
              </h3>

              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                12の職業タイプ診断で、あなたの現在地と生存戦略を明らかにします。<br />
                わずか3分で、AI時代を生き抜くための具体的なロードマップを手に入れましょう。
              </p>

              <motion.button
                onClick={() => router.push('/diagnosis')}
                className="relative inline-block px-10 py-4 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white font-bold text-lg overflow-hidden group"
                style={{
                  boxShadow: '0 0 30px rgba(251, 146, 60, 0.5)',
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 50px rgba(251, 146, 60, 0.7)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-200%]"
                  animate={{
                    translateX: ['-200%', '200%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                />
                <span className="relative">今すぐ診断を始める</span>
              </motion.button>

              <p className="text-xs text-gray-400 mt-4">
                無料・3分で完了
              </p>
            </div>
          </motion.div>
        </section>

        <footer className="container mx-auto px-6 py-12 border-t border-white/10">
          <div className="text-center text-gray-400 text-sm">
            <p className="mb-2">© 2026 AI時代のサバイバルメディア</p>
            <p className="text-xs">
              未来を予測し、今を生き抜く。
            </p>
          </div>
        </footer>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-50 hidden lg:block"
      >
        <motion.button
          onClick={() => router.push('/diagnosis')}
          className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-sm shadow-lg flex items-center gap-2"
          style={{
            boxShadow: '0 0 25px rgba(251, 146, 60, 0.5)',
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: '0 0 35px rgba(251, 146, 60, 0.7)',
          }}
          whileTap={{ scale: 0.95 }}
        >
          <Target className="w-4 h-4" />
          診断を始める
        </motion.button>
      </motion.div>
    </main>
  );
}
