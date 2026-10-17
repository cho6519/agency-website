'use client';

import React from 'react';
import { Check, X, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { AGENCY_CONFIG } from '@/data/agencyConfig';

export const PricingSection: React.FC = () => {
  const { pricing } = AGENCY_CONFIG;

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#0A0E17] text-white border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-block text-xs font-mono font-bold tracking-widest uppercase mb-3 px-3.5 py-1.5 rounded-full bg-cyan-950/80 text-cyan-400 border border-cyan-500/30 shadow-[0_0_15px_rgba(56,189,248,0.15)]">
            // {pricing.badge}
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
            {pricing.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            {pricing.subtitle}
          </p>
        </div>

        {/* 2-Column Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {pricing.plans.map((plan) => {
            const isBest = plan.isPopular;
            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-6 sm:p-9 flex flex-col justify-between transition-all duration-300 relative ${
                  isBest
                    ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-[#0F172A] border-2 border-cyan-500 shadow-[0_0_35px_rgba(56,189,248,0.2)] lg:-translate-y-2'
                    : 'bg-slate-900/60 border border-slate-800 hover:border-slate-700 shadow-xl'
                }`}
              >
                {/* Popular Glow Badge */}
                {isBest && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white text-xs font-black shadow-lg shadow-cyan-500/30 flex items-center gap-1.5 border border-cyan-400/30">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Tag */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <h3 className="text-xl sm:text-2xl font-black text-white break-keep">
                      {plan.name}
                    </h3>
                    {!isBest && plan.badge && (
                      <span className="self-start sm:self-auto text-xs font-mono font-semibold px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 whitespace-nowrap">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    {plan.originalPrice && (
                      <div className="text-sm font-semibold text-slate-500 line-through">
                        정가 {plan.originalPrice}
                      </div>
                    )}
                    <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                      <span className={`text-3xl sm:text-4xl font-black tracking-tight whitespace-nowrap ${isBest ? 'text-cyan-400 drop-shadow-[0_0_12px_rgba(56,189,248,0.3)]' : 'text-white'}`}>
                        {plan.price}
                      </span>
                      <span className="text-xs text-slate-400 font-mono break-keep">
                        ({plan.periodNotice})
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Included Features */}
                  <div className="space-y-3 pt-5 border-t border-slate-800 mb-6">
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                      INCLUDED_FEATURES
                    </div>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 font-medium">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 stroke-[2.5]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Excluded Features (for Starter) */}
                  {plan.excludedFeatures && (
                    <div className="space-y-2 p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 mb-6">
                      <div className="text-[11px] font-mono font-bold text-slate-400">
                        ※ 투명성 공지 (제외 기능 안내)
                      </div>
                      {plan.excludedFeatures.map((ex, eIdx) => (
                        <div key={eIdx} className="flex items-start gap-2 text-xs text-slate-400">
                          <X className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                          <span>{ex}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom CTA */}
                <div className="pt-4">
                  <a
                    href="#apply"
                    className={`w-full py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                      isBest
                        ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white hover:brightness-110 shadow-xl shadow-cyan-500/25 border border-cyan-400/30'
                        : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Pricing Guarantee Banner */}
        <div className="mt-12 max-w-3xl mx-auto rounded-2xl p-4 bg-slate-900/80 border border-cyan-500/30 text-center flex flex-col sm:flex-row items-center justify-center gap-3 text-xs sm:text-sm text-slate-300">
          <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
          <span>
            <strong>100% 정찰제 계약 약속:</strong> 계약서에 명시되지 않은 숨은 추가금이나 임의 호스팅 청구는 일체 발생하지 않습니다.
          </span>
        </div>

      </div>
    </section>
  );
};
