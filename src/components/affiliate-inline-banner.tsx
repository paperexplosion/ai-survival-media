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
      className="my-8 p-5 rounded-xl bg-gradient-to-br from-[#00e5ff]/5 via-[#00e5ff]/3 to-[#00e5ff]/5 border border-[#00e5ff]/20 relative"
    >
      <span className="absolute top-3 right-3 text-xs text-gray-500 font-medium">PR</span>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-gray-300 mb-1 font-medium">
            {service.name}
          </p>
          <p className="text-xs text-gray-500">
            {service.desc}
          </p>
        </div>

        <a
          href={service.url}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#00e5ff] to-[#00b8d4] text-black font-bold text-sm hover:shadow-lg hover:shadow-[#00e5ff]/30 transition-all whitespace-nowrap"
        >
          詳細を見る
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
}
