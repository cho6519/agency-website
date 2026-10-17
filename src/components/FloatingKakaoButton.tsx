'use client';

import React from 'react';
import { AGENCY_CONFIG } from '@/data/agencyConfig';

export const FloatingKakaoButton: React.FC = () => {
  const { brand } = AGENCY_CONFIG;

  return (
    <aside
      aria-label="카카오톡 실시간 상담"
      className="hidden md:flex fixed bottom-8 right-8 z-40 items-center gap-3 group"
    >
      {/* Speech Bubble Label */}
      <div className="relative px-3.5 py-2 rounded-xl bg-slate-900/95 text-white text-xs font-bold border border-amber-400/40 shadow-xl backdrop-blur-md transition-all duration-300 transform group-hover:-translate-x-1">
        <span className="text-amber-300 font-extrabold mr-1">1:1 빠른 문의</span>
        <span className="text-slate-200">카톡 실시간 상담</span>
        {/* Right Arrow pointer pointing to the button */}
        <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-0 h-0 border-y-4 border-y-transparent border-l-6 border-l-slate-900" />
      </div>

      {/* Floating Kakao Circle Button */}
      <a
        href={brand.kakaoChannelUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="desktop-floating-kakao"
        className="relative w-14 h-14 rounded-full bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] flex items-center justify-center shadow-[0_8px_25px_rgba(254,229,0,0.35)] hover:shadow-[0_10px_35px_rgba(254,229,0,0.6)] hover:scale-110 active:scale-95 transition-all duration-200 border-2 border-amber-300/60"
        title="카카오톡 1:1 상담 열기"
      >
        {/* Ambient Ring Glow */}
        <span className="absolute -inset-1 rounded-full bg-[#FEE500] opacity-40 blur-sm group-hover:opacity-75 transition-opacity animate-pulse" />

        {/* Kakao Speech Bubble SVG Icon */}
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="relative w-7 h-7 text-[#191919] shrink-0"
        >
          <path d="M12 3C6.48 3 2 6.58 2 11c0 2.87 1.88 5.4 4.75 6.78-.17.6-.62 2.18-.71 2.52-.11.44.16.43.34.31.14-.09 2.24-1.52 3.14-2.14.79.11 1.62.17 2.48.17 5.52 0 10-3.58 10-8s-4.48-8-10-8z" />
        </svg>

        {/* Notification Dot */}
        <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-rose-500 border-2 border-white" />
        </span>
      </a>
    </aside>
  );
};
