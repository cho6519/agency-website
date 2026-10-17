'use client';

import React from 'react';
import {
  FileSpreadsheet,
  ShieldCheck,
  Sparkles,
  Award,
  BarChart3,
  Lock,
  Check,
} from 'lucide-react';
import { ThemeContent } from '@/data/themes';

interface WhyUsSectionProps {
  theme: ThemeContent;
}

export const WhyUsSection: React.FC<WhyUsSectionProps> = ({ theme }) => {
  const isThemeA = theme.id === 'theme-a';

  const renderIcon = (iconName: string) => {
    const iconClass = `w-7 h-7 ${isThemeA ? 'text-[#B89467]' : 'text-[#1E3A8A]'}`;
    switch (iconName) {
      case 'FileSpreadsheet':
        return <FileSpreadsheet className={iconClass} />;
      case 'ShieldCheck':
        return <ShieldCheck className={iconClass} />;
      case 'Sparkles':
        return <Sparkles className={iconClass} />;
      case 'Award':
        return <Award className={iconClass} />;
      case 'BarChart3':
        return <BarChart3 className={iconClass} />;
      case 'Lock':
        return <Lock className={iconClass} />;
      default:
        return <ShieldCheck className={iconClass} />;
    }
  };

  return (
    <section id="why-us" className={`py-20 sm:py-28 transition-colors duration-300 ${isThemeA ? 'bg-[#182025]' : 'bg-[#f8fafc]'}`}>
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
            {theme.whyUs.badge}
          </div>
          <h2
            className={`text-2xl sm:text-4xl font-extrabold tracking-tight ${
              isThemeA ? 'text-white' : 'text-slate-900'
            }`}
          >
            {theme.whyUs.title}
          </h2>
          <p
            className={`mt-4 text-sm sm:text-base ${
              isThemeA ? 'text-[#c5d0d8]' : 'text-slate-600'
            }`}
          >
            {theme.whyUs.subtitle}
          </p>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {theme.whyUs.items.map((item, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 transition-all duration-300 group hover:-translate-y-2 border ${
                isThemeA
                  ? 'bg-[#212A30]/90 border-[#3c4b56]/50 hover:border-[#B89467]/60 hover:shadow-2xl hover:shadow-black/60'
                  : 'bg-white border-slate-200 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-900/10'
              }`}
            >
              {/* Number Watermark */}
              <div
                className={`absolute top-6 right-8 text-4xl font-black select-none pointer-events-none transition-opacity duration-300 ${
                  isThemeA
                    ? 'text-white/5 group-hover:text-[#B89467]/20'
                    : 'text-slate-100 group-hover:text-blue-100'
                }`}
              >
                {item.number}
              </div>

              {/* Icon Container */}
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${
                  isThemeA
                    ? 'bg-[#182025] border border-[#B89467]/30 shadow-inner'
                    : 'bg-blue-50 border border-blue-200 shadow-sm'
                }`}
              >
                {renderIcon(item.icon)}
              </div>

              {/* Highlight Badge */}
              <div
                className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg mb-4 ${
                  isThemeA
                    ? 'bg-[#B89467]/15 text-[#cca573]'
                    : 'bg-blue-50 text-[#1E3A8A]'
                }`}
              >
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>{item.highlight}</span>
              </div>

              {/* Title */}
              <h3
                className={`text-lg sm:text-xl font-bold tracking-tight mb-3 ${
                  isThemeA ? 'text-white' : 'text-slate-900'
                }`}
              >
                {item.title}
              </h3>

              {/* 2-line Description */}
              <p
                className={`text-sm leading-relaxed ${
                  isThemeA ? 'text-[#c5d0d8]' : 'text-slate-600'
                }`}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
