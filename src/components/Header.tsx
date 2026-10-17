'use client';

import React, { useState } from 'react';
import { Menu, X, ArrowRight, Zap, Sparkles } from 'lucide-react';
import { AGENCY_CONFIG } from '@/data/agencyConfig';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: '비교우위', href: '#comparison' },
    { label: '샘플보기', href: '#showcase' },
    { label: '제작비용', href: '#pricing' },
    { label: '진행절차 & FAQ', href: '#process-faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0E17]/85 backdrop-blur-xl border-b border-slate-800/80 text-white shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform border border-cyan-400/30">
            <Zap className="w-5 h-5 text-white fill-white" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-black text-lg sm:text-xl tracking-tight text-white">
                TRANDOT
              </span>
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#38BDF8]"></span>
            </div>
            <span className="text-[10px] text-cyan-400/80 font-mono tracking-wider uppercase -mt-0.5">
              WEB STUDIO // CLOUD
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-300 hover:text-cyan-400 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={AGENCY_CONFIG.brand.kakaoChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="header-btn-kakao"
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl font-bold text-xs bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] shadow-md hover:shadow-amber-400/20 active:scale-95 transition-all border border-amber-300/50"
            title="카카오톡 1:1 빠른 문의"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 fill-[#191919] shrink-0">
              <path d="M12 3C6.48 3 2 6.58 2 11c0 2.87 1.88 5.4 4.75 6.78-.17.6-.62 2.18-.71 2.52-.11.44.16.43.34.31.14-.09 2.24-1.52 3.14-2.14.79.11 1.62.17 2.48.17 5.52 0 10-3.58 10-8s-4.48-8-10-8z" />
            </svg>
            <span>카톡 1:1 문의</span>
          </a>

          <a
            href="#apply"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all border border-cyan-400/30"
          >
            <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
            <span>50만 원 특가 신청</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 bg-[#0E1422] border-t border-slate-800 shadow-2xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg text-sm font-semibold text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60"
              >
                {link.label}
              </a>
            ))}
            <a
              href={AGENCY_CONFIG.brand.kakaoChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 py-3 px-4 rounded-xl text-center text-sm font-black bg-[#FEE500] text-[#191919] shadow-md flex items-center justify-center gap-2"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 fill-[#191919] shrink-0">
                <path d="M12 3C6.48 3 2 6.58 2 11c0 2.87 1.88 5.4 4.75 6.78-.17.6-.62 2.18-.71 2.52-.11.44.16.43.34.31.14-.09 2.24-1.52 3.14-2.14.79.11 1.62.17 2.48.17 5.52 0 10-3.58 10-8s-4.48-8-10-8z" />
              </svg>
              <span>카카오톡 1:1 빠른 문의하기</span>
            </a>
            <a
              href="#apply"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-4 rounded-xl text-center text-sm font-bold bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-600/30"
            >
              50만 원 특가 슬롯 신청하기
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
