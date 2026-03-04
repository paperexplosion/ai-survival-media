"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Building2, User, Globe, Mail } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AboutPage() {
    const router = useRouter();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen py-12 px-6 relative z-10 pt-32 bg-[#0a0e1a]"
        >
            <div className="max-w-4xl mx-auto">
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

                {/* ヒーローセクション */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-20 text-center relative"
                >
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
                    <p className="text-sm md:text-base text-neon-cyan font-bold mb-4 tracking-wider uppercase relative">
                        ABOUT
                    </p>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight drop-shadow-lg relative">
                        不安な時代に、<br />光を見つけるメディア。
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto relative">
                        AIサバイバル・レポートは、AI時代を生き延びるための日刊メディアです。
                        毎日押し寄せるAIニュースを、「で、自分はどうすればいい？」に変換して届けます。
                    </p>
                </motion.div>

                {/* なぜつくったか */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-16"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 drop-shadow-lg">
                        なぜ、このメディアをつくったか。
                    </h2>
                    <div className="space-y-6 text-slate-200 text-lg leading-relaxed">
                        <p>
                            Mark Rober はこう言う。「エンジニアリングとは、バグを見つけ、壊しながら、
                            失敗しながら、新しいものをつくっていく発見の旅だ」と。
                        </p>
                        <p>
                            私が AI Survival Report を始めたのも、同じ理由からだ。
                        </p>
                        <p>
                            人類がかつて経験したことのない、巨大な知能との遭遇。
                            それは脅威でもあり、可能性でもある。
                            だが、ほとんどの人は「怖い」か「すごい」の二択で止まっている。
                        </p>
                        <p className="text-white font-semibold">
                            私はそこで止まりたくなかった。
                        </p>
                        <p>
                            不確かで、先の見えない時代だからこそ——
                            現実を直視し、おびえるだけじゃなく、
                            そこに一縷の光を見出し、広げていく。
                            それは、運動だと思っている。
                        </p>
                        <p>
                            AIのストーリーをどう紡ぐか。
                            その答えは、まだ人間の手の中にある。
                        </p>
                    </div>
                </motion.section>

                {/* ミッション */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-16"
                >
                    <div className="bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-neon-cyan/30">
                        <p className="text-sm text-neon-cyan font-bold mb-4 tracking-wider uppercase">MISSION</p>
                        <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
                            人類を飲み込もうとする巨大な力に、<br />
                            創造的ストーリーの力と言葉の力で立ち向かう。
                        </p>
                        <div className="mt-8 space-y-4 text-slate-200 text-lg leading-relaxed">
                            <p>
                                AIと人間が、どう共創していくか。
                                人間の幸せ、喜び、感情を忘れることなく、次の時代へバトンをつなぐ。
                                思考停止ではなく、解決志向で。恐怖で終わらず、希望へ転換して。
                            </p>
                            <p className="text-white font-semibold">
                                私たちが目指すゴールはひとつ——<br />
                                この時代を生きる子どもたちが、安心して、健やかに生きていける世の中を、
                                みんなでつくれると信じられること。
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* 編集長メッセージ */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 drop-shadow-lg">
                        編集長より
                    </h2>
                    <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/10">
                        <p className="text-neon-cyan font-bold mb-2 tracking-wide">鈴木 隆文（SZ）/ ナラティブ・アーキテクト・編集長</p>
                        <div className="space-y-5 text-slate-200 text-lg leading-relaxed mt-6">
                            <p>
                                29年のリサーチと、複数の事業変革を経て確信していることがある。
                                時代がどれだけ変わっても、人を動かすのは「物語」だ。
                            </p>
                            <p>
                                AIがどれほど賢くなっても、「なぜ生きるか」「何を大切にするか」を問うのは人間の仕事だ。
                                経済にも、政治にも、教育にも、社会のすべてにAIが関わってくるからこそ、
                                本当の意味でAIと人間がどう共存していくのか、どうコントロールしていくのかを
                                真剣に考えられる場が必要だと思った。
                            </p>
                            <p>
                                このメディアは、その問いを日々考えるための場所として運営している。
                                紙芝居師という現代の語り部として、言葉とナラティブの力で
                                この巨大な変化の波に立ち向かっていく。
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* 編集方針 */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 drop-shadow-lg">
                        編集方針
                    </h2>
                    <div className="space-y-4">
                        {[
                            { num: "01", text: "恐怖で終わらない。洞察と、次の一手まで届ける。" },
                            { num: "02", text: "難しい話を、人間の言葉で。テクノロジーの話ではなく、あなたの生き方の話として。" },
                            { num: "03", text: "毎日、更新する。AIの進化に、日刊で向き合う。" },
                            { num: "04", text: "希望を、根拠とともに語る。楽観論でも悲観論でもなく、現実から出発する。" },
                        ].map((item, i) => (
                            <motion.div
                                key={item.num}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 + i * 0.1 }}
                                className="flex items-start gap-6 bg-white/5 rounded-2xl p-6 border border-white/10"
                            >
                                <span className="text-neon-cyan font-black text-2xl flex-shrink-0">{item.num}</span>
                                <p className="text-slate-200 text-lg leading-relaxed">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* 運営情報 */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mb-12"
                >
                    <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/10 space-y-8">
                        <div className="flex items-start gap-6">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple flex items-center justify-center flex-shrink-0">
                                <Building2 className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-neon-cyan mb-2 tracking-wide uppercase">運営</h3>
                                <p className="text-slate-200 text-lg">ストーリーテリング合同会社（Storytelling LLC）</p>
                            </div>
                        </div>

                        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                        <div className="flex items-start gap-6">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple flex items-center justify-center flex-shrink-0">
                                <User className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-neon-cyan mb-2 tracking-wide uppercase">編集長</h3>
                                <p className="text-slate-200 text-lg">鈴木 隆文（SZ / ナラティブ・アーキテクト）</p>
                            </div>
                        </div>

                        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                        <div className="flex items-start gap-6">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple flex items-center justify-center flex-shrink-0">
                                <Globe className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-neon-cyan mb-2 tracking-wide uppercase">公式サイト</h3>
                                <a
                                    href="https://storytelling.studio.site/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-neon-cyan text-lg hover:text-neon-blue transition-colors underline"
                                >
                                    https://storytelling.studio.site/
                                </a>
                            </div>
                        </div>

                        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                        <div className="flex items-start gap-6">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple flex items-center justify-center flex-shrink-0">
                                <Mail className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-neon-cyan mb-2 tracking-wide uppercase">お問い合わせ</h3>
                                <a
                                    href="mailto:suzu@storytelling.team"
                                    className="text-neon-cyan text-lg hover:text-neon-blue transition-colors underline"
                                >
                                    suzu@storytelling.team
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.section>
            </div>
        </motion.div>
    );
}
