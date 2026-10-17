'use client';

import React, { useState } from 'react';
import { Zap, ShieldCheck } from 'lucide-react';
import { AGENCY_CONFIG } from '@/data/agencyConfig';
import { LegalModal } from '@/components/LegalModal';

export const Footer: React.FC = () => {
  const { brand } = AGENCY_CONFIG;
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<'privacy' | 'terms'>('privacy');

  const openLegal = (tab: 'privacy' | 'terms') => {
    setLegalTab(tab);
    setLegalModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-16 pb-28 md:pb-16 bg-[#060A12] text-slate-400 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Col (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white border border-cyan-400/30">
                <Zap className="w-4 h-4 fill-white" />
              </div>
              <span className="font-extrabold text-base text-white tracking-wider">
                {brand.name}
              </span>
            </div>

            <p className="text-slate-400 max-w-md leading-relaxed">
              {brand.tagline}. 매달 빠져나가는 서버비와 호스팅비를 평생 0원으로 낮추고, 고객 문의 전환에 집중한 차세대 클라우드 웹사이트를 제작합니다.
            </p>

            <div className="text-[11px] text-slate-400 space-y-1.5 font-mono bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
              <p>
                <span className="text-slate-500">상호명:</span> <strong className="text-slate-200">{brand.nameKr}</strong> | <span className="text-slate-500">대표자:</span> <strong className="text-slate-200">{brand.representative}</strong>
              </p>
              <p>
                <span className="text-slate-500">사업자등록번호:</span> <span className="text-slate-300">{brand.businessNumber}</span>
              </p>
              <p>
                <span className="text-slate-500">사업장 주소:</span> <span className="text-slate-300">{brand.address}</span>
              </p>
              <p>
                <span className="text-slate-500">대표전화:</span>{' '}
                <a href={`tel:${brand.contactTel}`} className="text-cyan-400 hover:underline">
                  {brand.contactTel}
                </a>{' '}
                | <span className="text-slate-500">이메일:</span>{' '}
                <a href={`mailto:${brand.contactEmail}`} className="text-cyan-400 hover:underline">
                  {brand.contactEmail}
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="font-mono font-bold uppercase tracking-wider text-cyan-400">// NAVIGATION</h5>
            <ul className="space-y-2">
              <li><a href="#comparison" className="hover:text-cyan-400 transition-colors">왜 TRANDOT인가 (비교우위)</a></li>
              <li><a href="#showcase" className="hover:text-cyan-400 transition-colors">실제 샘플 미리보기 (3대 업종)</a></li>
              <li><a href="#pricing" className="hover:text-cyan-400 transition-colors">50만 원 정찰제 가격표</a></li>
              <li><a href="#process-faq" className="hover:text-cyan-400 transition-colors">3일 완성 프로세스 & FAQ</a></li>
              <li><a href="#apply" className="hover:text-cyan-400 transition-colors">특가 슬롯 신청하기</a></li>
            </ul>
          </div>

          {/* Technology Attribution (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="font-mono font-bold uppercase tracking-wider text-cyan-400">// CLOUD_INFRASTRUCTURE</h5>
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                <ShieldCheck className="w-4 h-4" />
                <span>Cloudflare Pages Enterprise Edge</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                글로벌 초고속 CDN 무제한 무료 호스팅 인프라를 적용하여 영구 0원 유지비를 실현합니다.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© 2026 {brand.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => openLegal('privacy')}
              className="hover:text-cyan-400 underline underline-offset-4 transition-colors"
            >
              개인정보처리방침
            </button>
            <span className="text-slate-700">|</span>
            <button
              type="button"
              onClick={() => openLegal('terms')}
              className="hover:text-cyan-400 underline underline-offset-4 transition-colors"
            >
              이용약관
            </button>
            <span className="text-slate-700">|</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors py-1 px-2.5 rounded border border-slate-800 font-mono text-[10px]"
            >
              <span>TOP ↑</span>
            </button>
          </div>
        </div>

      </div>

      {/* Legal Modal Popup */}
      <LegalModal
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
        defaultTab={legalTab}
      />
    </footer>
  );
};
