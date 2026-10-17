'use client';

import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';
import { PRIVACY_POLICY, TERMS_OF_SERVICE } from '@/data/legalPolicy';
import { AGENCY_CONFIG } from '@/data/agencyConfig';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'privacy' | 'terms';
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'privacy',
}) => {
  const [activeTab, setActiveTab] = React.useState<'privacy' | 'terms'>(defaultTab);

  useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab, isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentDoc = activeTab === 'privacy' ? PRIVACY_POLICY : TERMS_OF_SERVICE;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      {/* Frosted Glass Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#0B1120] border border-cyan-500/30 rounded-3xl shadow-2xl shadow-cyan-950/50 flex flex-col overflow-hidden text-slate-200 z-10">
        
        {/* Header with Title & Tab Switcher */}
        <div className="px-5 sm:px-8 py-5 border-b border-slate-800 bg-[#070D18]/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
              {activeTab === 'privacy' ? (
                <ShieldCheck className="w-5 h-5" />
              ) : (
                <FileText className="w-5 h-5" />
              )}
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold">
                // LEGAL_DOCUMENT
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white">
                트랜닷(TRANDOT) 법적 고지
              </h3>
            </div>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-2">
            {/* Tab Buttons */}
            <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-bold">
              <button
                onClick={() => setActiveTab('privacy')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'privacy'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                개인정보처리방침
              </button>
              <button
                onClick={() => setActiveTab('terms')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'terms'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                서비스 이용약관
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-all border border-slate-700"
              aria-label="창 닫기"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          
          {/* Document Title Banner */}
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h4 className="font-bold text-white text-base sm:text-lg">
                {currentDoc.title}
              </h4>
              <p className="text-[11px] text-slate-400 mt-0.5">
                시행일자: {currentDoc.effectiveDate} (최종 개정: {currentDoc.lastUpdated})
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>법적 효력 준수 공시</span>
            </div>
          </div>

          {/* Intro Paragraph */}
          <p className="text-slate-300 bg-black/20 p-4 rounded-xl border border-slate-800/80">
            {currentDoc.intro}
          </p>

          {/* Articles */}
          <div className="space-y-6">
            {currentDoc.articles.map((art, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-slate-900/40 border border-slate-800/90 space-y-2.5"
              >
                <h5 className="font-extrabold text-sm sm:text-base text-cyan-300">
                  {art.title}
                </h5>
                <div className="space-y-1.5 text-slate-300">
                  {Array.isArray(art.content) ? (
                    art.content.map((c, cIdx) => (
                      <p key={cIdx} className="whitespace-pre-line leading-relaxed">
                        {c}
                      </p>
                    ))
                  ) : (
                    <p className="whitespace-pre-line leading-relaxed">
                      {art.content}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Company Signoff Box */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400 space-y-1 font-mono">
            <p className="font-bold text-white text-xs">{AGENCY_CONFIG.brand.nameKr} ({AGENCY_CONFIG.brand.name})</p>
            <p>대표자: {AGENCY_CONFIG.brand.representative} | 사업자등록번호: {AGENCY_CONFIG.brand.businessNumber}</p>
            <p>사업장 소재지: {AGENCY_CONFIG.brand.address}</p>
            <p>대표전화: {AGENCY_CONFIG.brand.contactTel} | 대표 이메일: {AGENCY_CONFIG.brand.contactEmail}</p>
          </div>

        </div>

        {/* Footer with Action */}
        <div className="px-6 py-4 border-t border-slate-800 bg-[#070D18] flex items-center justify-between">
          <span className="text-[11px] text-slate-400">
            내용 확인 후 닫기를 누르시면 이전 화면으로 복귀합니다.
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors shadow-md"
          >
            확인 및 닫기
          </button>
        </div>

      </div>
    </div>
  );
};
