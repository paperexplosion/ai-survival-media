"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { AffiliateService } from "@/lib/affiliate-data";

interface AffiliateInlineBannerProps {
  service: AffiliateService;
}

export function AffiliateInlineBanner({ service }: AffiliateInlineBannerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="my-8 bg-[#0a0a0f] rounded-xl p-6 border-l-2 border-[#00e5ff]"
      style={{
        boxShadow: '0 0 20px rgba(0, 229, 255, 0.08)'
      }}
    >
      <div className="flex flex-col gap-3">
        <h3 className="text-white font-bold text-lg">{service.name}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">{service.desc}</p>
        <a
          href={service.url}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-flex items-center gap-2 justify-center px-5 py-2.5 rounded-lg border border-[#00e5ff] text-[#00e5ff] font-medium text-sm transition-all hover:bg-[#00e5ff]/10 hover:shadow-[0_0_15px_rgba(0,229,255,0.3)]"
        >
          詳細を見る
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
}
