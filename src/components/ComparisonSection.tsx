'use client';

import React from 'react';
import { XCircle, CheckCircle2, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { AGENCY_CONFIG } from '@/data/agencyConfig';

export const ComparisonSection: React.FC = () => {
  const { comparison } = AGENCY_CONFIG;

  return (
    <section id="comparison" className="py-20 sm:py-28 bg-[#0D121F] text-white border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-block text-xs font-mono font-bold tracking-widest uppercase mb-3 px-3.5 py-1.5 rounded-full bg-cyan-950/80 text-cyan-400 border border-cyan-500/30 shadow-[0_0_15px_rgba(56,189,248,0.15)]">
            // {comparison.badge}
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
            {comparison.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            {comparison.subtitle}
          </p>
        </div>

        {/* 1:1 Comparison Cards Stack */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {comparison.items.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl p-5 sm:p-6 bg-slate-900/90 border border-slate-800/90 hover:border-slate-700 transition-all shadow-xl backdrop-blur-md"
            >
              {/* Category Title */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <span className="text-xs sm:text-sm font-mono font-bold text-cyan-400/80 uppercase tracking-wider">
                  SPEC_0{index + 1}
                </span>
                <span className="text-sm sm:text-base font-extrabold text-white">
                  {item.category}
                </span>
              </div>

              {/* 2 Sides Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Left: Legacy Agency / Imweb */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/60 border border-rose-900/30 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                      <span className="text-xs font-bold text-rose-300">
                        기존 아임웹 · 일반 외주업체
                      </span>
                    </div>
                    <div className="text-base font-bold text-slate-400 line-through decoration-rose-500/80 decoration-2">
                      {item.legacy}
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {item.legacyDesc}
                  </p>
                </div>

                {/* Right: TRANDOT Cloud Web */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-blue-950/40 via-slate-900 to-emerald-950/30 border-2 border-emerald-500/60 flex flex-col justify-between shadow-[0_0_25px_rgba(16,185,129,0.12)] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-400/10 rounded-full blur-xl pointer-events-none" />
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="text-xs font-bold text-emerald-300">
                          TRANDOT 차세대 클라우드 웹
                        </span>
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                        BEST SPEC
                      </span>
                    </div>
                    <div className="text-base sm:text-lg font-black text-emerald-300 flex items-center gap-2">
                      <span>{item.trandot}</span>
                      <Sparkles className="w-4 h-4 text-amber-300" />
                    </div>
                  </div>
                  <p className="text-xs text-slate-200 mt-2 leading-relaxed font-medium">
                    {item.trandotDesc}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center max-w-xl mx-auto">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>50만 원에 이 모든 차세대 사양이 포함되는 가격표 확인하기</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
