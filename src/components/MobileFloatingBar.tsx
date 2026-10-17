'use client';

import React from 'react';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';
import { AGENCY_CONFIG } from '@/data/agencyConfig';

export const MobileFloatingBar: React.FC = () => {
  const { brand } = AGENCY_CONFIG;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] bg-[#0A0E17]/95 backdrop-blur-xl border-t border-slate-800 shadow-[0_-10px_30px_rgba(0,0,0,0.6)]">
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        {/* 1. 좌측: 전화 상담 연결 */}
        <a
          href={`tel:${brand.contactTel}`}
          id="mobile-btn-call"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-700/80 font-bold text-xs active:scale-95 transition-all shadow-md"
        >
          <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>전화 상담 연결</span>
        </a>

        {/* 2. 우측: 카카오톡 실시간 문의 */}
        <a
          href={brand.kakaoChannelUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-btn-kakao"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-2xl bg-[#FEE500] hover:brightness-95 text-[#191919] font-black text-xs active:scale-95 transition-all shadow-lg shadow-amber-500/10 border border-amber-300/50"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 fill-[#191919] shrink-0">
            <path d="M12 3C6.48 3 2 6.58 2 11c0 2.87 1.88 5.4 4.75 6.78-.17.6-.62 2.18-.71 2.52-.11.44.16.43.34.31.14-.09 2.24-1.52 3.14-2.14.79.11 1.62.17 2.48.17 5.52 0 10-3.58 10-8s-4.48-8-10-8z" />
          </svg>
          <span>카카오톡 실시간 문의</span>
        </a>
      </div>
    </div>
  );
};
