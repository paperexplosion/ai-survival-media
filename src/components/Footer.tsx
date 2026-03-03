"use client";

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FileText, Mail, Info } from 'lucide-react';

export default function Footer() {
  const router = useRouter();
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'About', path: '/about', icon: Info },
    { label: 'Privacy Policy', path: '/privacy', icon: FileText },
    { label: 'Contact', path: '/contact', icon: Mail },
  ];

  return (
    <footer className="relative z-10 bg-[#0a0e1a]/95 backdrop-blur-lg border-t border-white/10 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple flex items-center justify-center">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <div>
                <div className="font-bold text-white text-lg">
                  AIサバイバル・レポート
                </div>
                <div className="text-xs text-gray-400">未来を予測し、今を生き抜く</div>
              </div>
            </div>
            <p className="text-slate-50 text-sm leading-relaxed max-w-md">
              AI時代の生存戦略を12ジョブ診断で提案。あなたの可能性を拡張し、自らの物語を繁栄させるための地図を提供します。
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">リンク</h3>
            <div className="flex flex-col gap-3">
              {footerLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.button
                    key={link.path}
                    onClick={() => router.push(link.path)}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-slate-50 hover:text-neon-cyan transition-colors text-left"
                  >
                    <Icon className="w-4 h-4" />
                    {link.label}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-50">
          <div>
            <p>運営：ストーリーテリング合同会社 (Storytelling LLC)</p>
          </div>
          <div>
            <p>&copy; {currentYear} AIサバイバル・レポート. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
