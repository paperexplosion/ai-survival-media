"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { BookOpen, DoorOpen, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'ホーム', path: '/', icon: null },
    { label: 'レポート', path: '/blog', icon: BookOpen },
    { label: '自己の診断', path: '/diagnosis', icon: DoorOpen },
    { label: 'About', path: '/about', icon: null },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a]/80 backdrop-blur-lg border-b border-white/10"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            aria-label="AI Survival Report トップへ"
            className="flex items-center gap-3 group text-center"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple flex items-center justify-center">
              <span className="text-white font-bold text-lg">AI</span>
            </div>
            <div className="hidden md:block">
              <div className="font-bold text-white text-lg group-hover:text-neon-cyan transition-colors">
                AI Survival Report
              </div>
              <div className="text-xs text-gray-400">
                AIと人間の共存を記録する
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              const Icon = item.icon;

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-6 py-2 rounded-full font-bold text-sm transition-all flex items-center gap-2 ${
                    isActive
                      ? 'bg-gradient-to-r from-neon-cyan to-neon-purple text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  {item.label}
                </Link>
              );
            })}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={isMenuOpen}
            className="md:hidden p-2 text-white hover:text-neon-cyan transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                const Icon = item.icon;

                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-6 py-3 rounded-full font-bold text-sm transition-all flex items-center gap-2 ${
                      isActive
                        ? 'bg-gradient-to-r from-neon-cyan to-neon-purple text-white'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
