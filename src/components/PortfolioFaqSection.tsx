'use client';

import React, { useState } from 'react';
import { ChevronDown, Plus, Minus, ExternalLink, CheckCircle2, Eye, X } from 'lucide-react';
import { ThemeContent } from '@/data/themes';

interface PortfolioFaqSectionProps {
  theme: ThemeContent;
}

export const PortfolioFaqSection: React.FC<PortfolioFaqSectionProps> = ({ theme }) => {
  const isThemeA = theme.id === 'theme-a';
  
  // Accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Selected portfolio item for detail modal
  const [selectedPortfolio, setSelectedPortfolio] = useState<typeof theme.portfolio.items[0] | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section
      id="portfolio-faq"
      className={`py-20 sm:py-28 transition-colors duration-300 ${
        isThemeA ? 'bg-[#182025]' : 'bg-[#f8fafc]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className={`inline-block text-xs font-bold tracking-widest uppercase mb-3 px-3 py-1 rounded-full ${
              isThemeA
                ? 'bg-[#B89467]/15 text-[#cca573] border border-[#B89467]/30'
                : 'bg-blue-100 text-[#1E3A8A] border border-blue-200'
            }`}
          >
            {theme.portfolio.badge}
          </div>
          <h2
            className={`text-2xl sm:text-4xl font-extrabold tracking-tight ${
              isThemeA ? 'text-white' : 'text-slate-900'
            }`}
          >
            {theme.portfolio.title}
          </h2>
          <p
            className={`mt-4 text-sm sm:text-base ${
              isThemeA ? 'text-[#c5d0d8]' : 'text-slate-600'
            }`}
          >
            {theme.portfolio.subtitle}
          </p>
        </div>

        {/* Part 1: Portfolio 4-Grid Showcase */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3
              className={`text-lg sm:text-xl font-bold ${
                isThemeA ? 'text-white' : 'text-slate-900'
              }`}
            >
              대표 포트폴리오 사례 (4종)
            </h3>
            <span
              className={`text-xs ${
                isThemeA ? 'text-[#8495a4]' : 'text-slate-500'
              }`}
            >
              카드를 클릭하면 상세 내역을 확인할 수 있습니다
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {theme.portfolio.items.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedPortfolio(item)}
                className={`group cursor-pointer rounded-3xl overflow-hidden border transition-all duration-300 hover:-translate-y-1.5 ${
                  isThemeA
                    ? 'bg-[#212A30] border-[#3c4b56]/50 hover:border-[#B89467]/70 hover:shadow-2xl hover:shadow-black/60'
                    : 'bg-white border-slate-200 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-900/10'
                }`}
              >
                {/* Image Container with Hover Overlay */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div
                    className={`absolute inset-0 transition-opacity duration-300 ${
                      isThemeA
                        ? 'bg-gradient-to-t from-[#212A30] via-black/40 to-transparent group-hover:opacity-90'
                        : 'bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:opacity-95'
                    }`}
                  />

                  {/* Badges on top */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-black/60 text-white backdrop-blur-md border border-white/20">
                      {item.category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-amber-400 group-hover:text-black transition-colors">
                      <Eye className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Bottom Text Over Image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs font-semibold text-amber-300">
                      {item.spec}
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold text-white mt-1 group-hover:text-amber-200 transition-colors">
                      {item.title}
                    </h4>
                  </div>
                </div>

                {/* Content underneath */}
                <div className="p-5 sm:p-6">
                  <p
                    className={`text-xs sm:text-sm font-medium mb-3 ${
                      isThemeA ? 'text-[#c5d0d8]' : 'text-slate-600'
                    }`}
                  >
                    결과 요약: <strong className={isThemeA ? 'text-white' : 'text-slate-900'}>{item.result}</strong>
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.details.map((detail, dIdx) => (
                      <span
                        key={dIdx}
                        className={`text-[11px] px-2.5 py-1 rounded-md font-medium flex items-center gap-1 ${
                          isThemeA
                            ? 'bg-[#182025] text-zinc-300 border border-[#3c4b56]/40'
                            : 'bg-slate-100 text-slate-700 border border-slate-200'
                        }`}
                      >
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        <span>{detail}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: FAQ Accordion (4 Items) */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span
              className={`text-xs font-bold uppercase tracking-wider ${
                isThemeA ? 'text-[#cca573]' : 'text-[#1E3A8A]'
              }`}
            >
              궁금증 해결
            </span>
            <h3
              className={`text-xl sm:text-2xl font-bold mt-1 ${
                isThemeA ? 'text-white' : 'text-slate-900'
              }`}
            >
              자주 묻는 질문 (FAQ)
            </h3>
          </div>

          <div className="space-y-4">
            {theme.faq.items.map((faqItem, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                    isThemeA
                      ? isOpen
                        ? 'bg-[#212A30] border-[#B89467]/60 shadow-lg'
                        : 'bg-[#212A30]/50 border-[#3c4b56]/40 hover:border-[#3c4b56]'
                      : isOpen
                        ? 'bg-white border-blue-400 shadow-md'
                        : 'bg-white/80 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-black text-sm sm:text-base ${
                          isThemeA ? 'text-[#cca573]' : 'text-[#1E3A8A]'
                        }`}
                      >
                        Q{idx + 1}.
                      </span>
                      <span
                        className={`font-bold text-sm sm:text-base ${
                          isThemeA ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {faqItem.q}
                      </span>
                    </div>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      } ${
                        isThemeA
                          ? 'bg-[#182025] text-[#cca573]'
                          : 'bg-slate-100 text-[#1E3A8A]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Collapsible Answer */}
                  {isOpen && (
                    <div
                      className={`px-6 pb-6 pt-1 text-xs sm:text-sm leading-relaxed border-t ${
                        isThemeA
                          ? 'border-[#3c4b56]/40 text-[#c5d0d8]'
                          : 'border-slate-100 text-slate-600'
                      }`}
                    >
                      <div className="flex gap-2">
                        <span className="font-extrabold text-emerald-400 shrink-0">A.</span>
                        <p>{faqItem.a}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Portfolio Detail Modal */}
      {selectedPortfolio && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div
            className={`relative w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border ${
              isThemeA ? 'bg-[#1a2227] border-[#3c4b56] text-white' : 'bg-white border-slate-200 text-slate-900'
            }`}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPortfolio(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative h-64 sm:h-80 w-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${selectedPortfolio.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-400 text-black">
                  {selectedPortfolio.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {selectedPortfolio.title}
                </h3>
                <p className="text-xs text-zinc-300 mt-1">{selectedPortfolio.spec}</p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <h4 className="text-sm font-bold mb-2">시공 및 자문 주요 성과</h4>
              <p className={`text-sm mb-4 leading-relaxed ${isThemeA ? 'text-zinc-300' : 'text-slate-600'}`}>
                {selectedPortfolio.result}
              </p>

              <h4 className="text-sm font-bold mb-2">적용 기술 및 상세 내용</h4>
              <ul className="space-y-2 mb-6">
                {selectedPortfolio.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-3">
                <a
                  href="#contact"
                  onClick={() => setSelectedPortfolio(null)}
                  className={`flex-1 py-3 text-center rounded-xl font-bold text-sm ${
                    isThemeA
                      ? 'bg-[#B89467] text-stone-950 hover:bg-[#cca573]'
                      : 'bg-[#1E3A8A] text-white hover:bg-blue-700'
                  }`}
                >
                  이 스타일로 상담 예약하기
                </a>
                <button
                  onClick={() => setSelectedPortfolio(null)}
                  className="px-5 py-3 rounded-xl font-medium text-sm border border-zinc-500/40 hover:bg-white/5"
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
