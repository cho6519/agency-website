'use client';

import React from 'react';
import { Sparkles, Layers, ArrowRight, CheckCircle2 } from 'lucide-react';

interface DemoSwitcherProps {
  currentTheme: 'theme-a' | 'theme-b';
  onSelectTheme: (theme: 'theme-a' | 'theme-b') => void;
  onOpenAgencyModal: () => void;
}

export const DemoSwitcher: React.FC<DemoSwitcherProps> = ({
  currentTheme,
  onSelectTheme,
  onOpenAgencyModal,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0e1317]/95 backdrop-blur-xl border-b border-white/10 text-white shadow-2xl transition-all">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Left: Agency branding badge */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
            <Layers className="w-4 h-4 text-black font-bold" />
          </div>
          <div className="hidden lg:flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-sm tracking-tight text-white">커넥트 AI랩</span>
              <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">
                외주 수주 데모
              </span>
            </div>
            <span className="text-[11px] text-zinc-400">1페이지 · 5섹션 맞춤 패키지</span>
          </div>
        </div>

        {/* Center: Theme Switcher Tabs */}
        <div className="flex items-center bg-black/40 p-1 rounded-xl border border-white/10">
          {/* Tab 1: Theme A */}
          <button
            id="tab-theme-a"
            type="button"
            onClick={() => onSelectTheme('theme-a')}
            className={`relative flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ${
              currentTheme === 'theme-a'
                ? 'bg-[#212A30] text-amber-300 shadow-lg border border-[#B89467]/50'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <span
              className="w-2.5 h-2.5 rounded-full border border-white/30 shrink-0"
              style={{ backgroundColor: '#B89467' }}
            />
            <span className="hidden sm:inline">테마 A :</span>
            <span>시공·인테리어</span>
            {currentTheme === 'theme-a' && (
              <span className="hidden md:inline-flex items-center text-[10px] bg-amber-400/10 text-amber-300 px-1.5 py-0.2 rounded font-normal">
                선택됨
              </span>
            )}
          </button>

          {/* Tab 2: Theme B */}
          <button
            id="tab-theme-b"
            type="button"
            onClick={() => onSelectTheme('theme-b')}
            className={`relative flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ${
              currentTheme === 'theme-b'
                ? 'bg-white text-[#1E3A8A] shadow-lg border border-blue-400/50'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <span
              className="w-2.5 h-2.5 rounded-full border border-zinc-300 shrink-0"
              style={{ backgroundColor: '#1E3A8A' }}
            />
            <span className="hidden sm:inline">테마 B :</span>
            <span>전문직·학원·컨설팅</span>
            {currentTheme === 'theme-b' && (
              <span className="hidden md:inline-flex items-center text-[10px] bg-blue-100 text-[#1E3A8A] px-1.5 py-0.2 rounded font-bold">
                선택됨
              </span>
            )}
          </button>
        </div>

        {/* Right CTA: 50만원 제작 신청하기 */}
        <div className="flex items-center shrink-0">
          <button
            id="btn-agency-order"
            type="button"
            onClick={onOpenAgencyModal}
            className="relative group overflow-hidden bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-stone-950 font-bold text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 fill-stone-950 animate-bounce" />
            <span>50만 원 제작 신청하기</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </header>
  );
};
