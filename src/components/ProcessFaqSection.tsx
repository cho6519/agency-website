'use client';

import React, { useState } from 'react';
import {
  FileText,
  Layout,
  Rocket,
  ChevronDown,
  CheckCircle2,
  Clock,
  Sparkles,
} from 'lucide-react';
import { AGENCY_CONFIG } from '@/data/agencyConfig';

export const ProcessFaqSection: React.FC = () => {
  const { process, faq } = AGENCY_CONFIG;
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText':
        return <FileText className="w-5 h-5 text-cyan-400" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-indigo-400" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-emerald-400" />;
      default:
        return <Clock className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="process-faq" className="py-20 sm:py-28 bg-[#0D121F] text-white border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Part 1: 3-Day Fast Timeline */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block text-xs font-mono font-bold tracking-widest uppercase mb-3 px-3.5 py-1.5 rounded-full bg-cyan-950/80 text-cyan-400 border border-cyan-500/30 shadow-[0_0_15px_rgba(56,189,248,0.15)]">
              // {process.badge}
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              {process.title}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              {process.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {process.steps.map((step, index) => (
              <div
                key={index}
                className="rounded-3xl p-6 sm:p-7 bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 tech-card-glow transition-all shadow-xl relative flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold tracking-wider px-3 py-1 rounded-lg bg-cyan-950/80 text-cyan-400 border border-cyan-500/30">
                      {step.day}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center shadow-inner">
                      {getStepIcon(step.icon)}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-800">
                  {step.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: FAQ Accordion 5 Items */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block text-xs font-mono font-bold tracking-widest uppercase mb-2 px-3 py-1 rounded-full bg-slate-800/80 text-cyan-400 border border-slate-700">
              {faq.badge}
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              {faq.title}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              {faq.subtitle}
            </p>
          </div>

          <div className="space-y-3.5">
            {faq.items.map((item) => {
              const isOpen = openFaqId === item.id;
              return (
                <div
                  key={item.id}
                  className={`rounded-2xl transition-all border overflow-hidden ${
                    isOpen
                      ? 'bg-slate-900 border-cyan-500/60 shadow-[0_0_20px_rgba(56,189,248,0.12)]'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 shadow-sm'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqId(isOpen ? null : item.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-bold text-sm sm:text-base text-white">
                      Q{item.id}. {item.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-cyan-400 bg-cyan-950 border border-cyan-500/40' : 'text-slate-400'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800 font-normal">
                      <div className="flex gap-2">
                        <span className="font-mono font-bold text-cyan-400 shrink-0">A.</span>
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
