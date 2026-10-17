'use client';

import React from 'react';
import { ArrowRight, Eye, Sparkles, CheckCircle2, Flame, Terminal, Cpu } from 'lucide-react';
import { AGENCY_CONFIG } from '@/data/agencyConfig';

export const HeroSection: React.FC = () => {
  const { hero } = AGENCY_CONFIG;

  return (
    <section className="relative pt-28 sm:pt-40 pb-20 sm:pb-32 overflow-hidden bg-tech-blueprint border-b border-slate-800/80">
      {/* Decorative ambient radial orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[750px] h-[380px] bg-gradient-to-b from-blue-600/20 via-cyan-500/10 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute top-28 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Animated Slot Pulse Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-cyan-500/30 shadow-[0_0_20px_rgba(56,189,248,0.15)] backdrop-blur-md mb-8 animate-pulse-subtle">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500 shadow-[0_0_8px_#F43F5E]"></span>
          </span>
          <span className="text-xs sm:text-sm font-bold text-slate-200">
            {hero.slotBadge}
          </span>
          <span className="hidden sm:inline-block text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
            SLOT LIMITED
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.28] sm:leading-[1.18] whitespace-pre-line text-white break-keep">
          {hero.mainCopy.split('평생 0원').map((part, index) =>
            index === 0 ? (
              <React.Fragment key={index}>
                {part}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 font-black underline decoration-cyan-400/60 decoration-wavy decoration-2 underline-offset-8 drop-shadow-[0_0_25px_rgba(56,189,248,0.4)]">
                  평생 0원
                </span>
              </React.Fragment>
            ) : (
              part
            )
          )}
        </h1>

        {/* Subtitle */}
        <p className="mt-6 sm:mt-8 max-w-2xl mx-auto text-base sm:text-lg text-slate-300 font-normal leading-relaxed break-keep">
          {hero.subCopy}
        </p>

        {/* 2 CTA Buttons */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary CTA */}
          <a
            href="#apply"
            id="hero-btn-slot"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-base text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 shadow-xl shadow-blue-600/30 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 border border-cyan-400/40"
          >
            <Flame className="w-5 h-5 text-amber-300 fill-amber-300 animate-bounce" />
            <span>{hero.ctaSlot}</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          {/* Secondary CTA */}
          <a
            href="#showcase"
            id="hero-btn-sample"
            className="w-full sm:w-auto px-7 py-4 rounded-2xl font-bold text-base text-slate-200 bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 shadow-lg shadow-black/50 transition-all flex items-center justify-center gap-2 hover:border-cyan-500/50 hover:text-white"
          >
            <Eye className="w-5 h-5 text-cyan-400" />
            <span>{hero.ctaSample}</span>
          </a>
        </div>

        {/* 3 Core Trust Cards */}
        <div className="mt-14 sm:mt-18 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
          {hero.trustMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 tech-card-glow shadow-xl backdrop-blur-md flex items-center gap-4 transition-all hover:-translate-y-1"
            >
              <div className="w-11 h-11 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 shadow-[0_0_12px_rgba(56,189,248,0.2)]">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-mono tracking-wide">{metric.label}</p>
                <p className="text-base sm:text-lg font-black text-white mt-0.5">{metric.value}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
