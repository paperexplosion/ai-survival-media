"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface AffiliateCardProps {
    title: string;
    description: string;
    url: string;
    label: string;
}

export function AffiliateCard({ title, description, url, label }: AffiliateCardProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="my-8 p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-red-500/10 border border-amber-500/30"
        >
            <div className="flex items-start gap-4">
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold text-amber-500 uppercase tracking-wider">
                            {label}
                        </span>
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-2">
                        {title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                        {description}
                    </p>
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-sm hover:shadow-lg hover:shadow-amber-500/30 transition-all"
                    >
                        <span>詳細を見る</span>
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
