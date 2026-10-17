'use client';

import React, { useState } from 'react';
import {
  Laptop,
  Smartphone,
  Sparkles,
  ExternalLink,
  ChevronDown,
  ShieldCheck,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  ArrowRight,
  Sun,
  Award,
  BarChart3,
  Layers,
  Send,
  Copy,
  Check,
  Car,
} from 'lucide-react';
import { AGENCY_CONFIG } from '@/data/agencyConfig';
import { SampleSite } from '@/types/agency';

export const InteractiveShowcase: React.FC = () => {
  const { showcase } = AGENCY_CONFIG;
  const [activeTabId, setActiveTabId] = useState<'construction' | 'professional' | 'studio'>('construction');
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Sample internal form interactive states
  const [selectedChip, setSelectedChip] = useState<string>('');
  const [sampleName, setSampleName] = useState<string>('');
  const [samplePhone, setSamplePhone] = useState<string>('');
  const [sampleSubmitted, setSampleSubmitted] = useState<boolean>(false);
  const [copiedAddress, setCopiedAddress] = useState<boolean>(false);

  const currentSample: SampleSite =
    showcase.samples.find((s) => s.id === activeTabId) || showcase.samples[0];

  // Sync selected chip when tab changes
  React.useEffect(() => {
    if (currentSample.sections.contact.chips && currentSample.sections.contact.chips.length > 0) {
      setSelectedChip(currentSample.sections.contact.chips[0]);
    }
    setSampleSubmitted(false);
  }, [activeTabId, currentSample]);

  const handleCopy = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const handleSampleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!sampleName.trim() || !samplePhone.trim()) {
      alert('성함과 연락처를 입력해 주세요.');
      return;
    }
    setSampleSubmitted(true);
  };

  const { themeStyle, sections } = currentSample;

  return (
    <section id="showcase" className="py-20 sm:py-28 bg-[#090E1A] text-white border-y border-slate-800 relative overflow-hidden">
      {/* Luxury Studio Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-blue-600/20 via-indigo-600/10 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block text-xs font-mono font-bold tracking-widest uppercase mb-3 px-3.5 py-1.5 rounded-full bg-cyan-950/80 text-cyan-400 border border-cyan-500/30 shadow-[0_0_15px_rgba(56,189,248,0.15)]">
            // {showcase.badge}
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
            {showcase.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            {showcase.subtitle}
          </p>
        </div>

        {/* Top Control Bar: Industry Tabs & Device Switcher */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8 bg-slate-900/90 backdrop-blur-xl p-2.5 sm:p-3 rounded-2xl border border-slate-700/80 shadow-2xl">
          
          {/* Industry 3 Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto w-full lg:w-auto pb-1 lg:pb-0 scrollbar-none">
            {showcase.samples.map((sample) => {
              const isActive = sample.id === activeTabId;
              return (
                <button
                  key={sample.id}
                  onClick={() => setActiveTabId(sample.id)}
                  className={`px-3.5 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold shrink-0 transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30 border border-blue-400/40'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
                  }`}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full border border-white/30"
                    style={{ backgroundColor: sample.themeStyle.accentHex }}
                  />
                  <span>{sample.tabTitle}</span>
                </button>
              );
            })}
          </div>

          {/* Device Mode Switcher (Desktop ↔ Mobile) */}
          <div className="flex items-center gap-2 self-end lg:self-auto bg-slate-950 p-1.5 rounded-xl border border-slate-800">
            <button
              onClick={() => setDeviceMode('desktop')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                deviceMode === 'desktop'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Laptop className="w-3.5 h-3.5" />
              <span>💻 PC 화면</span>
            </button>
            <button
              onClick={() => setDeviceMode('mobile')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                deviceMode === 'mobile'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>📱 모바일 390px</span>
            </button>
          </div>

        </div>

        {/* Current Sample Industry Target Badge */}
        <div className="mb-4 flex items-center justify-between text-xs text-slate-400 px-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-semibold text-slate-300">{currentSample.categoryLabel}</span>
          </div>
          <div className="hidden sm:flex items-center gap-1 text-cyan-400 font-mono text-[11px]">
            <span>↕ 프레임 안을 스크롤하여 5대 완성 섹션을 둘러보세요</span>
          </div>
        </div>

        {/* Mockup Frame Container */}
        <div className="flex justify-center transition-all duration-300">
          {deviceMode === 'desktop' ? (
            /* Desktop MacBook Frame */
            <div className="w-full max-w-5xl rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl shadow-black/80 overflow-hidden">
              {/* Browser Bar */}
              <div className="h-10 bg-slate-950 px-4 flex items-center justify-between border-b border-slate-800 select-none">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="px-6 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] text-slate-400 font-mono flex items-center gap-2">
                  <span>https://{currentSample.id}-demo.trandot.kr</span>
                </div>
                <div className="text-[11px] text-cyan-400 font-mono font-semibold">100% COMPLETE LIVE PREVIEW</div>
              </div>

              {/* Scrollable Preview Canvas */}
              <div className="h-[680px] overflow-y-auto scroll-smooth font-sans select-text">
                {renderFullSampleContent(currentSample)}
              </div>
            </div>
          ) : (
            /* Mobile iPhone 390px Frame */
            <div className="w-[390px] rounded-[44px] bg-slate-950 border-[6px] border-slate-700 shadow-2xl shadow-blue-900/30 overflow-hidden relative">
              {/* Phone Notch / Dynamic Island */}
              <div className="h-7 bg-slate-950 flex items-center justify-center relative select-none">
                <div className="w-24 h-4 rounded-full bg-black border border-slate-800" />
              </div>

              {/* Scrollable Preview Canvas */}
              <div className="h-[700px] overflow-y-auto scroll-smooth font-sans select-text pb-12">
                {renderFullSampleContent(currentSample)}
              </div>

              {/* Mobile Frame Bottom Home Indicator */}
              <div className="h-5 bg-slate-950 flex items-center justify-center">
                <div className="w-28 h-1 rounded-full bg-slate-600" />
              </div>
            </div>
          )}
        </div>

        {/* Action Button Below Showcase */}
        <div className="mt-10 text-center">
          <a
            href="#apply"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl font-bold text-sm bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all border border-cyan-400/30"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>선택한 [{currentSample.tabTitle}] 스타일로 50만 원 제작 신청하기</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );

  /* Helper to render the complete 5-section sample site inside preview frame */
  function renderFullSampleContent(sample: SampleSite) {
    const { sections, brandName, tagline } = sample;
    const isDark = sample.id === 'construction';
    const isStudio = sample.id === 'studio';

    // Bulletproof high-contrast color system per theme (prevents parent text-white inheritance)
    const themeBg = isDark ? '#0F172A' : isStudio ? '#FDFBF7' : '#F8FAFC';
    const themeHeaderBg = isDark ? '#0B1120' : isStudio ? '#FAF7F2' : '#FFFFFF';
    const themeCardBg = isDark ? '#1E293B' : '#FFFFFF';
    const themeCardBorder = isDark ? 'rgba(255,255,255,0.1)' : isStudio ? '#E7DEC8' : '#E2E8F0';
    const themeHeadingColor = isDark ? '#F8FAFC' : isStudio ? '#292524' : '#0F172A';
    const themeTextColor = isDark ? '#CBD5E1' : isStudio ? '#44403C' : '#334155';
    const themeMutedColor = isDark ? '#94A3B8' : isStudio ? '#78716C' : '#64748B';
    const themeAccentHex = sample.themeStyle.accentHex;
    const themeSubtleBg = isDark ? 'rgba(255,255,255,0.03)' : isStudio ? '#F5F0E6' : '#F1F5F9';
    const themeInputBg = isDark ? '#0F172A' : isStudio ? '#FAF7F2' : '#F8FAFC';
    const themeInputBorder = isDark ? '#334155' : isStudio ? '#D6C7B2' : '#CBD5E1';
    const themeSectionDivider = isDark ? 'rgba(255,255,255,0.08)' : isStudio ? 'rgba(140,109,83,0.18)' : 'rgba(37,99,235,0.12)';

    return (
      <div style={{ backgroundColor: themeBg, color: themeTextColor }} className="min-h-full font-sans transition-colors">
        {/* Sample Site Header */}
        <div
          style={{ backgroundColor: themeHeaderBg, borderColor: themeCardBorder }}
          className="sticky top-0 z-30 px-4 py-3 border-b flex items-center justify-between shadow-sm"
        >
          <div>
            <h4 style={{ color: themeHeadingColor }} className="font-extrabold text-sm sm:text-base leading-tight tracking-tight">
              {brandName}
            </h4>
            <p style={{ color: themeMutedColor }} className="text-[10px]">{tagline}</p>
          </div>
          <button
            style={{ backgroundColor: themeAccentHex }}
            className="px-3 py-1.5 rounded-lg text-xs font-bold text-white shadow-sm hover:opacity-90 transition-opacity"
          >
            상담 신청
          </button>
        </div>

        {/* =========================================
            Section 1: Hero Section with 3 Trust Metrics
           ========================================= */}
        <div className="relative py-14 sm:py-20 px-4 sm:px-8 text-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${sections.hero.bgImage})`,
              opacity: isDark ? 0.25 : 0.12,
            }}
          />
          <div className="relative z-10 max-w-xl mx-auto">
            <span
              style={{ backgroundColor: `${themeAccentHex}18`, color: themeAccentHex, borderColor: `${themeAccentHex}40` }}
              className="inline-block text-[11px] font-bold px-3 py-1 rounded-full mb-3 border backdrop-blur-sm"
            >
              {sections.hero.badge}
            </span>
            <h2 style={{ color: themeHeadingColor }} className="text-xl sm:text-3xl font-extrabold whitespace-pre-line leading-tight">
              {sections.hero.headline}
            </h2>
            <p style={{ color: themeTextColor }} className="mt-3 text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
              {sections.hero.subheadline}
            </p>
            <button
              style={{ backgroundColor: themeAccentHex }}
              className="mt-6 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white shadow-md hover:opacity-90"
            >
              {sections.hero.ctaText}
            </button>

            {/* 3 Trust Metrics inside Hero */}
            {sections.hero.metrics && (
              <div style={{ borderColor: themeSectionDivider }} className="mt-8 grid grid-cols-3 gap-2.5 pt-6 border-t">
                {sections.hero.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    style={{ backgroundColor: themeCardBg, borderColor: themeCardBorder }}
                    className="p-3 rounded-xl border shadow-sm"
                  >
                    <div style={{ color: themeAccentHex }} className="text-sm sm:text-lg font-black">
                      {m.value}
                    </div>
                    <div style={{ color: themeMutedColor }} className="text-[10px] mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* =========================================
            Section 2: Why Us (3 Core Strengths Cards)
           ========================================= */}
        <div style={{ borderColor: themeSectionDivider }} className="py-12 px-4 sm:px-8 border-t">
          <div className="text-center max-w-md mx-auto mb-6">
            <h3 style={{ color: themeHeadingColor }} className="text-base sm:text-lg font-bold">{sections.whyUs.title}</h3>
            <p style={{ color: themeMutedColor }} className="text-xs mt-1">{sections.whyUs.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {sections.whyUs.items.map((item, idx) => (
              <div
                key={idx}
                style={{ backgroundColor: themeCardBg, borderColor: themeCardBorder }}
                className="p-4 rounded-2xl border shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div
                      style={{ color: themeAccentHex, backgroundColor: `${themeAccentHex}15` }}
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                    >
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <span
                      style={{ backgroundColor: `${themeAccentHex}15`, color: themeAccentHex }}
                      className="text-[10px] font-bold px-2 py-0.5 rounded"
                    >
                      {item.highlight}
                    </span>
                  </div>
                  <h4 style={{ color: themeHeadingColor }} className="font-bold text-xs sm:text-sm mb-1">{item.title}</h4>
                  <p style={{ color: themeTextColor }} className="text-[11px] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================
            Section 3: Services (4 Core Services Cards)
           ========================================= */}
        <div style={{ backgroundColor: themeSubtleBg, borderColor: themeSectionDivider }} className="py-12 px-4 sm:px-8 border-t">
          <div className="text-center max-w-md mx-auto mb-6">
            <h3 style={{ color: themeHeadingColor }} className="text-base sm:text-lg font-bold">{sections.services.title}</h3>
            <p style={{ color: themeMutedColor }} className="text-xs mt-1">{sections.services.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {sections.services.items.map((svc, idx) => (
              <div
                key={idx}
                style={{ backgroundColor: themeCardBg, borderColor: themeCardBorder }}
                className="rounded-2xl overflow-hidden border shadow-sm flex flex-col justify-between"
              >
                <div
                  className="h-32 w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${svc.image})` }}
                />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-1">
                    <span
                      style={{ color: themeAccentHex }}
                      className="text-[10px] font-bold uppercase tracking-wider"
                    >
                      {svc.tag}
                    </span>
                    <span style={{ color: themeMutedColor }} className="text-[10px]">{svc.detail}</span>
                  </div>
                  <h4 style={{ color: themeHeadingColor }} className="font-bold text-xs sm:text-sm mt-0.5">{svc.title}</h4>
                  <p style={{ color: themeTextColor }} className="text-[11px] mt-1 leading-relaxed">{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================
            Section 4: Portfolio & FAQ (4 Grid & 4 Accordion)
           ========================================= */}
        <div style={{ borderColor: themeSectionDivider }} className="py-12 px-4 sm:px-8 border-t">
          <div className="text-center max-w-md mx-auto mb-6">
            <h3 style={{ color: themeHeadingColor }} className="text-base sm:text-lg font-bold">{sections.portfolio.title}</h3>
            <p style={{ color: themeMutedColor }} className="text-xs mt-1">{sections.portfolio.subtitle}</p>
          </div>
          
          {/* 4 Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {sections.portfolio.items.map((pf, idx) => (
              <div
                key={idx}
                style={{ backgroundColor: themeCardBg, borderColor: themeCardBorder }}
                className="rounded-2xl overflow-hidden border shadow-sm"
              >
                <div
                  className="h-32 w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${pf.image})` }}
                />
                <div className="p-3.5">
                  <div className="flex items-center justify-between text-[10px] mb-1">
                    <span style={{ color: themeAccentHex }} className="font-bold">
                      {pf.tag}
                    </span>
                    <span style={{ color: themeMutedColor }}>{pf.spec}</span>
                  </div>
                  <h5 style={{ color: themeHeadingColor }} className="font-bold text-xs">{pf.title}</h5>
                  <p style={{ color: themeTextColor }} className="text-[11px] mt-1">{pf.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 4 FAQ Accordion Items */}
          <div className="max-w-lg mx-auto">
            <h4 style={{ color: themeMutedColor }} className="text-xs font-bold text-center uppercase tracking-wider mb-3">
              자주 묻는 질문 (FAQ)
            </h4>
            <div className="space-y-2">
              {sections.faq.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    style={{ backgroundColor: themeCardBg, borderColor: themeCardBorder }}
                    className="p-3 rounded-xl border"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      style={{ color: themeHeadingColor }}
                      className="w-full text-left font-bold text-xs flex items-center justify-between"
                    >
                      <span>Q{idx + 1}. {faq.q}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <p
                        style={{ color: themeTextColor, borderColor: themeSectionDivider }}
                        className="mt-2 text-[11px] pt-2 border-t leading-relaxed"
                      >
                        A. {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* =========================================
            Section 5: Quick Contact Form & Location / Map
           ========================================= */}
        <div style={{ backgroundColor: themeSubtleBg, borderColor: themeSectionDivider }} className="py-12 px-4 sm:px-8 border-t">
          <div className="text-center max-w-md mx-auto mb-6">
            <h3 style={{ color: themeHeadingColor }} className="text-base sm:text-lg font-bold">{sections.contact.title}</h3>
            <p style={{ color: themeMutedColor }} className="text-xs mt-1">{sections.contact.subtitle}</p>
          </div>

          <div className="max-w-lg mx-auto space-y-4">
            
            {/* 1. Interactive Contact Form inside Sample */}
            <div
              style={{ backgroundColor: themeCardBg, borderColor: themeCardBorder }}
              className="p-5 rounded-2xl border shadow-md"
            >
              {sampleSubmitted ? (
                <div className="py-6 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h5 style={{ color: themeHeadingColor }} className="font-bold text-xs sm:text-sm">상담 신청이 정상 접수되었습니다!</h5>
                  <p style={{ color: themeTextColor }} className="text-[11px]">
                    담당자가 남겨주신 번호로 30분 내로 친절하게 안내드리겠습니다.
                  </p>
                  <button
                    onClick={() => setSampleSubmitted(false)}
                    style={{ color: themeAccentHex }}
                    className="mt-2 text-[10px] font-bold underline"
                  >
                    다시 작성하기
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSampleSubmit} className="space-y-3">
                  {/* Inquiry Type Chips */}
                  <div>
                    <span style={{ color: themeMutedColor }} className="block text-[10px] font-bold uppercase tracking-wider mb-1.5">
                      문의 항목 선택
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {sections.contact.chips && sections.contact.chips.map((chip, cIdx) => {
                        const isChipSelected = selectedChip === chip;
                        return (
                          <button
                            key={cIdx}
                            type="button"
                            onClick={() => setSelectedChip(chip)}
                            style={{
                              backgroundColor: isChipSelected ? themeAccentHex : themeCardBg,
                              color: isChipSelected ? '#FFFFFF' : themeTextColor,
                              borderColor: isChipSelected ? themeAccentHex : themeCardBorder,
                            }}
                            className="text-[10px] font-semibold px-2.5 py-1 rounded-lg border transition-all"
                          >
                            {chip}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      required
                      placeholder="성함 / 상호명"
                      value={sampleName}
                      onChange={(e) => setSampleName(e.target.value)}
                      style={{
                        backgroundColor: themeInputBg,
                        color: themeHeadingColor,
                        borderColor: themeInputBorder,
                      }}
                      className="w-full px-2.5 py-2 rounded-lg text-xs border focus:outline-none placeholder:opacity-50"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="연락처 (010-0000-0000)"
                      value={samplePhone}
                      onChange={(e) => setSamplePhone(e.target.value)}
                      style={{
                        backgroundColor: themeInputBg,
                        color: themeHeadingColor,
                        borderColor: themeInputBorder,
                      }}
                      className="w-full px-2.5 py-2 rounded-lg text-xs border focus:outline-none placeholder:opacity-50"
                    />
                  </div>

                  <button
                    type="submit"
                    style={{ backgroundColor: themeAccentHex }}
                    className="w-full py-2.5 rounded-xl font-bold text-xs text-white shadow-md flex items-center justify-center gap-1.5 hover:opacity-90 transition-opacity"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>상담 접수하기 (빠른 회신)</span>
                  </button>
                </form>
              )}
            </div>

            {/* 2. Location & Map Box */}
            <div
              style={{ backgroundColor: themeCardBg, borderColor: themeCardBorder }}
              className="p-4 rounded-2xl border text-xs space-y-2.5 shadow-sm"
            >
              {/* Simulated Map Visual */}
              <div className="h-28 w-full rounded-xl bg-slate-800 relative flex items-center justify-center overflow-hidden border border-black/10">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-40"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80')` }}
                />
                <div className="relative z-10 flex flex-col items-center">
                  <div
                    style={{ backgroundColor: themeAccentHex }}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white shadow-lg animate-bounce"
                  >
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-black/80 text-white mt-1 shadow">
                    {brandName} 본사
                  </span>
                </div>
              </div>

              {/* Address with Copy Button */}
              <div className="flex items-center justify-between pt-1">
                <div>
                  <p style={{ color: themeHeadingColor }} className="font-bold text-xs">{sections.contact.address}</p>
                  <p style={{ color: themeMutedColor }} className="text-[10px]">{sections.contact.addressDetail}</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(sections.contact.address)}
                  style={{ borderColor: themeCardBorder, color: themeTextColor }}
                  className="shrink-0 text-[10px] font-bold px-2 py-1 rounded-md border hover:opacity-80 flex items-center gap-1"
                >
                  {copiedAddress ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedAddress ? '복사됨' : '복사'}</span>
                </button>
              </div>

              {/* Subway & Parking details */}
              <div style={{ borderColor: themeSectionDivider }} className="pt-2 border-t space-y-1 text-[11px]">
                <div className="flex items-center gap-1.5" style={{ color: themeTextColor }}>
                  <MapPin className="w-3.5 h-3.5 shrink-0" style={{ color: themeAccentHex }} />
                  <span>{sections.contact.subway}</span>
                </div>
                <div className="flex items-center gap-1.5" style={{ color: themeTextColor }}>
                  <Phone className="w-3.5 h-3.5 shrink-0" style={{ color: themeAccentHex }} />
                  <span>{sections.contact.tel} ({sections.contact.hours})</span>
                </div>
                <div className="flex items-center gap-1.5" style={{ color: themeTextColor }}>
                  <Car className="w-3.5 h-3.5 shrink-0" style={{ color: themeAccentHex }} />
                  <span>{sections.contact.parking}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Sample Site Footer */}
        <div
          style={{ backgroundColor: isDark ? 'rgba(0,0,0,0.5)' : isStudio ? '#EFEAE1' : '#E2E8F0', color: themeMutedColor }}
          className="p-4 border-t border-black/5 text-center text-[10px]"
        >
          © {brandName}. All rights reserved. 5-Section Turnkey Solution Powered by TRANDOT WEB STUDIO
        </div>
      </div>
    );
  }
};
