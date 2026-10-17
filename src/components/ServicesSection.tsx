'use client';

import React from 'react';
import { ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { ThemeContent } from '@/data/themes';

interface ServicesSectionProps {
  theme: ThemeContent;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ theme }) => {
  const isThemeA = theme.id === 'theme-a';

  return (
    <section
      id="services"
      className={`py-20 sm:py-28 transition-colors duration-300 border-t ${
        isThemeA
          ? 'bg-[#141a1e] border-[#2b373f]/60'
          : 'bg-white border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div
              className={`inline-block text-xs font-bold tracking-widest uppercase mb-3 px-3 py-1 rounded-full ${
                isThemeA
                  ? 'bg-[#B89467]/15 text-[#cca573] border border-[#B89467]/30'
                  : 'bg-blue-100 text-[#1E3A8A] border border-blue-200'
              }`}
            >
              {theme.services.badge}
            </div>
            <h2
              className={`text-2xl sm:text-4xl font-extrabold tracking-tight ${
                isThemeA ? 'text-white' : 'text-slate-900'
              }`}
            >
              {theme.services.title}
            </h2>
            <p
              className={`mt-4 text-sm sm:text-base ${
                isThemeA ? 'text-[#c5d0d8]' : 'text-slate-600'
              }`}
            >
              {theme.services.subtitle}
            </p>
          </div>

          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold shrink-0 self-start md:self-auto ${
              isThemeA
                ? 'bg-[#212A30] text-[#cca573] border border-[#B89467]/30'
                : 'bg-slate-50 text-[#1E3A8A] border border-blue-100 shadow-sm'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>{theme.services.notice}</span>
          </div>
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {theme.services.items.map((service, index) => (
            <div
              key={index}
              className={`group rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 border hover:-translate-y-2 ${
                isThemeA
                  ? 'bg-[#212A30] border-[#3c4b56]/50 hover:border-[#B89467]/70 hover:shadow-2xl hover:shadow-black/70'
                  : 'bg-white border-slate-200 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-900/10'
              }`}
            >
              <div>
                {/* Service Card Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div
                    className={`absolute inset-0 ${
                      isThemeA
                        ? 'bg-gradient-to-t from-[#212A30] via-black/30 to-transparent'
                        : 'bg-gradient-to-t from-black/50 via-transparent to-transparent'
                    }`}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-black/70 text-white backdrop-blur-md border border-white/20">
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className={`text-lg font-bold mb-2 group-hover:text-amber-400 transition-colors ${
                      isThemeA ? 'text-white' : 'text-slate-900 group-hover:text-[#1E3A8A]'
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                      isThemeA ? 'text-[#c5d0d8]' : 'text-slate-600'
                    }`}
                  >
                    {service.desc}
                  </p>
                </div>
              </div>

              {/* Tags & Action Footer */}
              <div
                className={`p-6 pt-0 border-t ${
                  isThemeA ? 'border-[#3c4b56]/30' : 'border-slate-100'
                }`}
              >
                <div className="flex flex-wrap gap-1.5 pt-4 mb-4">
                  {service.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className={`text-[11px] px-2 py-0.5 rounded-md font-medium ${
                        isThemeA
                          ? 'bg-[#182025] text-[#8495a4] border border-[#3c4b56]/40'
                          : 'bg-slate-100 text-slate-600 border border-slate-200'
                      }`}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors ${
                    isThemeA
                      ? 'bg-[#182025] text-[#cca573] hover:bg-[#B89467] hover:text-stone-950 border border-[#B89467]/30'
                      : 'bg-slate-100 text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white border border-slate-200'
                  }`}
                >
                  <span>이 서비스 상담받기</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Agency Note Box */}
        <div
          className={`mt-12 rounded-2xl p-5 text-center flex flex-col sm:flex-row items-center justify-between gap-4 border ${
            isThemeA
              ? 'bg-[#182025] border-[#B89467]/30 text-zinc-300'
              : 'bg-blue-50/60 border-blue-200 text-slate-700'
          }`}
        >
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <span className="font-bold text-amber-500">💡 50만원 패키지 특전:</span>
            <span>귀사의 사업 분야에 맞는 대표 서비스 4종 및 고화질 라이선스 이미지를 무료로 세팅해 드립니다.</span>
          </div>
          <a
            href="#contact"
            className={`shrink-0 text-xs font-bold underline underline-offset-4 ${
              isThemeA ? 'text-[#cca573]' : 'text-[#1E3A8A]'
            }`}
          >
            내 업종 맞춤 구성 문의하기 →
          </a>
        </div>

      </div>
    </section>
  );
};
