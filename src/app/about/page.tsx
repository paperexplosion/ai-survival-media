"use client";

import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Sparkles, Brain, Users, Target } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AboutPage() {
    const router = useRouter();

    const principles = [
        {
            icon: Brain,
            title: "知の系譜を辿る",
            description: "ドラッカー、ハラリ、チョムスキー、トフラー。知の巨人たちの足跡を継承し、AI時代の新たな問いを立てる。"
        },
        {
            icon: Sparkles,
            title: "物語分析の技術",
            description: "データと記号の海から、あなただけの「代替不能なナラティブ」を言語化し、市場価値へと転換する。"
        },
        {
            icon: Users,
            title: "人間性の再定義",
            description: "AIが最適解を示す時代に、あなたの「不合理さ」と「こだわり」こそが最強の差別化要因となる。"
        }
    ];

    const benefits = [
        {
            title: "市場価値の再構築",
            description: "スキルの寄せ集めではない、物語としてのキャリアを構築し、ハイクラス市場で「指名される存在」になる。"
        },
        {
            title: "思考のレバレッジ",
            description: "AIを「思考の増幅器」として使いこなし、一人で多層的なリサーチと戦略立案を行う能力を手にする。"
        },
        {
            title: "精神的自律（サバイバル）",
            description: "激変する時代において、何が起きても「これは自分の物語のどの場面か」を客観視し、次の一手を自ら記述できる揺るぎない自信。"
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen py-12 px-6 relative z-10 pt-32 bg-[#0a0e1a]"
        >
            <div className="max-w-5xl mx-auto">
                <motion.button
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    onClick={() => router.push("/")}
                    className="flex items-center gap-2 text-neon-cyan hover:text-neon-blue transition-colors mb-12 group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span>トップに戻る</span>
                </motion.button>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-16"
                >
                    <div className="relative mb-12">
                        <motion.div
                            className="absolute inset-0 blur-3xl bg-gradient-to-r from-neon-cyan/10 via-neon-purple/10 to-neon-blue/10 opacity-20 -bottom-20"
                            animate={{
                                opacity: [0.1, 0.2, 0.1],
                                scale: [1, 1.05, 1],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                            }}
                        />
                        <div className="relative text-center">
                            <p className="text-sm md:text-base text-neon-cyan font-bold mb-4 tracking-wider uppercase">
                                The Mind
                            </p>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight drop-shadow-lg">
                                Philosophy: Narrative<br />Architect SZ
                            </h1>
                            <div className="max-w-3xl mx-auto space-y-6">
                                <motion.blockquote
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="relative py-8 px-6 md:px-12"
                                >
                                    <div className="absolute top-0 left-0 text-6xl text-neon-cyan/30 font-serif">"</div>
                                    <p className="text-xl md:text-2xl text-slate-50 italic font-light leading-relaxed relative z-10">
                                        記述される現実から、記述する意志へ
                                    </p>
                                    <div className="absolute bottom-0 right-0 text-6xl text-neon-cyan/30 font-serif">"</div>
                                </motion.blockquote>

                                <motion.blockquote
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="border-l-4 border-neon-purple/50 pl-6 md:pl-8"
                                >
                                    <p className="text-lg md:text-xl text-slate-50 font-light leading-relaxed">
                                        「世界は原子でできているのではない。<br className="hidden md:block" />
                                        物語（ストーリー）でできているのだ。」
                                    </p>
                                </motion.blockquote>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="prose prose-invert prose-lg max-w-none"
                    >
                        <p className="text-slate-50 text-lg leading-relaxed mb-8">
                            この認識こそが、SZが20数年にわたり、情報の海を泳ぎ続けてたどり着いた唯一の解である。単なる編集、単なるリサーチ、単なるマーケティング。それらはすべて、巨大な「ストーリーテリング」という装置の断片に過ぎない。
                        </p>
                    </motion.div>
                </motion.div>

                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                    className="mb-20"
                >
                    <div className="relative mb-12">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent"></div>
                            <BookOpen className="w-6 h-6 text-neon-cyan" />
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent"></div>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-8 drop-shadow-lg">
                            知の系譜と、情報の考古学
                        </h2>
                    </div>

                    <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/10 mb-8">
                        <p className="text-slate-50 text-lg leading-relaxed mb-8">
                            1990年代後半から、メディア、リサーチ、人間心理、そしてデザインの境界線上を歩んできた。その歩みは、常に先人たちの巨大な足跡を辿る旅でもあった。
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            {[
                                { name: "ピーター・ドラッカー", insight: "社会における人間の位置" },
                                { name: "ユヴァル・ノア・ハラリ", insight: "人類を統合する「虚構（ストーリー）」の力" },
                                { name: "ノーム・チョムスキー", insight: "言語の深層構造" },
                                { name: "アルビン・トフラー", insight: "加速する未来" }
                            ].map((thinker, index) => (
                                <motion.div
                                    key={thinker.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.2 + index * 0.1 }}
                                    className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-neon-purple/70 transition-all"
                                >
                                    <p className="text-neon-cyan font-bold mb-2">{thinker.name}</p>
                                    <p className="text-slate-50 text-sm">{thinker.insight}</p>
                                </motion.div>
                            ))}
                        </div>

                        <p className="text-slate-50 text-lg leading-relaxed">
                            これらの知の巨人たちが示した「人間存在への問い」に対し、SZは<span className="text-neon-cyan font-bold">「ストーリーテリング・アナリシス（物語分析）」</span>という手法で応えようとしている。
                        </p>
                    </div>
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                    className="mb-20"
                >
                    <div className="relative mb-12">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
                            <Target className="w-6 h-6 text-red-400" />
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-8 drop-shadow-lg">
                            アルゴリズムの静かなる独裁
                        </h2>
                        <p className="text-center text-slate-50 text-lg font-bold">私たちが直面している課題</p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/10">
                        <p className="text-slate-50 text-lg leading-relaxed mb-6">
                            社会は今、かつてない危機に直面している。それはAIに仕事を奪われるといった単純な話ではない。私たちが自らの人生を語るための「言葉」や「思考のプロセス」さえもが、AIの最適解という名の「記号」に置き換わり、人間が自らの物語の主導権（ナラティブ・オーナーシップ）を失いつつあることだ。
                        </p>
                        <p className="text-slate-50 text-lg leading-relaxed">
                            多くの人が「AIが出した正解」を自らの意思だと錯覚し、独自の違和感や不合理な情熱を切り捨てている。このままでは、人間はアルゴリズムの隙間を埋めるだけの「効率的なパーツ」に成り下がってしまう。SZがStorytelling LLCを通じて対峙しているのは、この<span className="text-rose-400 font-bold">「人間性の記号化」</span>という静かなる独裁である。
                        </p>
                    </div>
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6 }}
                    className="mb-20"
                >
                    <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-12 drop-shadow-lg">
                        SZのアプローチ
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {principles.map((principle, index) => {
                            const Icon = principle.icon;
                            return (
                                <motion.div
                                    key={principle.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.8 + index * 0.1 }}
                                    className="bg-white/5 backdrop-blur-2xl rounded-2xl p-8 border border-white/10 hover:border-neon-purple/70 transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4 drop-shadow-lg">{principle.title}</h3>
                                    <p className="text-slate-50 leading-relaxed">{principle.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>

                    <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-6 text-center drop-shadow-lg">
                            あなたの「違和感」を、市場価値へ転換する
                        </h3>
                        <p className="text-slate-50 text-lg leading-relaxed mb-6">
                            SZが提供するのは、単なる情報ではない。AIという巨大な鏡を使い、あなたが「自分自身の物語」を再定義するための知的ソリューションである。
                        </p>
                        <p className="text-slate-50 text-lg leading-relaxed">
                            AIに問い、AIに論破させ、AIの隙間に自分だけの「解」を差し込む。このプロセスを繰り返すことで、あなたはAIが模倣できない「独自の文脈（ナラティブ）」を持つ存在へと変貌する。ストーリーテリング・アナリシスの技術をキャリアに適用することは、冷徹なデータの中に、あなたという「唯一無二の変数」を再投入することを意味する。
                        </p>
                    </div>
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.0 }}
                    className="mb-20"
                >
                    <div className="relative mb-12">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neon-purple/50 to-transparent"></div>
                            <Sparkles className="w-6 h-6 text-neon-purple" />
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neon-purple/50 to-transparent"></div>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-4 drop-shadow-lg">
                            手にすべきは、未来を記述する「ペン」である
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 2.2 + index * 0.1 }}
                                className="bg-white/5 backdrop-blur-2xl rounded-2xl p-8 border border-white/10 hover:border-neon-purple/70 transition-all group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-neon-purple to-neon-cyan flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                                        <span className="text-white font-bold text-sm">{index + 1}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-3 drop-shadow-lg">{benefit.title}</h3>
                                        <p className="text-slate-50 leading-relaxed">{benefit.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.6 }}
                        className="mt-12 bg-white/5 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/10"
                    >
                        <p className="text-slate-50 text-xl leading-relaxed text-center font-light">
                            私は、あなたに「AIの使い方」を教えたいのではない。<br className="hidden md:block" />
                            AIという魔法の杖を手にしたあなたが、<br className="hidden md:block" />
                            <span className="text-neon-cyan font-bold drop-shadow-lg">いかにして自らの人生の「絶対的な著者」であり続けるか。</span><br className="hidden md:block" />
                            そのための武器を、ここに置いておく。
                        </p>
                    </motion.div>
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.8 }}
                    className="mb-12"
                >
                    <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12"></div>

                    <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/10">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple flex items-center justify-center flex-shrink-0">
                                <span className="text-white font-black text-2xl">SZ</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-white drop-shadow-lg">Profile: SZ（すず）</h3>
                                <p className="text-neon-cyan text-sm font-bold">Storytelling LLC 代表 / ナラティブ・アーキテクト</p>
                            </div>
                        </div>

                        <div className="space-y-6 text-slate-50 leading-relaxed">
                            <p>
                                29年にわたり、「言葉」と「物語」が人・組織・社会に与える影響を多角的にリサーチし、実践を続けてきた。メディア編集者、マーケティングリサーチ、人間心理分析、ビジュアルデザイン、現代紙芝居など、多領域を横断するキャリアの中で一貫して追い求めてきたのは、「人間は、いかにして情報の海から自らの物語を救い出すか」という問いである。
                            </p>
                            <p>
                                現在は、ストーリーテリングの専門家として、ストーリーテリングリサーチ、ドキュメンタリーストーリーテリング、ナラティブアナリティクスに従事。AI時代の生存戦略を策定する知の伴走者として、AIという巨大な鏡を介して個人の内側に眠る「代替不能なナラティブ」を言語化し、その存在を唯一無二の価値へと変換する技術を提唱している。
                            </p>
                        </div>
                    </div>
                </motion.section>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.0 }}
                    className="text-center"
                >
                    <motion.button
                        onClick={() => router.push('/blog')}
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-blue text-white font-bold text-lg hover:scale-105 transition-all"
                        style={{
                            boxShadow: '0 0 30px rgba(34, 211, 238, 0.5)',
                        }}
                        whileHover={{
                            boxShadow: '0 0 50px rgba(34, 211, 238, 0.7)',
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <BookOpen className="w-5 h-5" />
                        <span>レポートを読む</span>
                    </motion.button>
                </motion.div>
            </div>
        </motion.div>
    );
}
