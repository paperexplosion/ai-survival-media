'use client';

import { AffiliateService } from '@/lib/affiliate-data';

interface AffiliateServiceCardProps {
  service: AffiliateService;
}

export default function AffiliateServiceCard({ service }: AffiliateServiceCardProps) {
  return (
    <a
      href={service.url}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="block bg-[#0c0c0c] border-t-2 hover:-translate-y-0.5 transition-all duration-200 group"
      style={{ borderTopColor: service.tagColor }}
    >
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-bold text-white group-hover:text-[#cc0000] transition-colors">
            {service.name}
          </h3>
          <span className="text-[10px] text-gray-500 bg-gray-900 px-2 py-0.5 rounded">
            PR
          </span>
        </div>

        <div className="mb-3">
          <span
            className="inline-block text-xs px-2.5 py-1 rounded-full font-medium"
            style={{
              backgroundColor: `${service.tagColor}20`,
              color: service.tagColor,
              border: `1px solid ${service.tagColor}40`
            }}
          >
            {service.category}
          </span>
        </div>

        <p className="text-sm text-gray-400 mb-4 leading-relaxed">
          {service.desc}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-sm text-white group-hover:text-[#cc0000] transition-colors font-medium">
            {service.cta}
          </span>
          <svg
            className="w-5 h-5 text-gray-600 group-hover:text-[#cc0000] group-hover:translate-x-1 transition-all"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </a>
  );
}
