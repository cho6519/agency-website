'use client';

import React, { useState } from 'react';
import {
  X,
  Sparkles,
  CheckCircle2,
  Rocket,
  ShieldCheck,
  Zap,
  ArrowRight,
  Send,
  Smartphone,
  Search,
} from 'lucide-react';

interface AgencyConsultModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTheme: 'theme-a' | 'theme-b';
}

export const AgencyConsultModal: React.FC<AgencyConsultModalProps> = ({
  isOpen,
  onClose,
  defaultTheme,
}) => {
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [industry, setIndustry] = useState(
    defaultTheme === 'theme-a' ? '시공·인테리어·매장형' : '전문직·학원·컨설팅형'
  );
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, '');
    let formatted = raw;
    if (raw.length > 3 && raw.length <= 7) {
      formatted = `${raw.slice(0, 3)}-${raw.slice(3)}`;
    } else if (raw.length > 7) {
      formatted = `${raw.slice(0, 3)}-${raw.slice(3, 7)}-${raw.slice(7, 11)}`;
    }
    setClientPhone(formatted);
  };

  const handleAgencySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !clientPhone.trim()) {
      alert('성함과 연락처를 모두 입력해 주세요.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in overflow-y-auto">
      <div className="relative w-full max-w-2xl my-8 rounded-3xl bg-[#141a1e] border border-amber-500/40 text-white shadow-2xl overflow-hidden">
        
        {/* Top Header Glow */}
        <div className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 p-6 text-stone-950 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center transition-colors text-black"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/20 text-stone-950 text-xs font-black tracking-wide mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CONNECT AI LAB 공식 제작 플랜</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
            50만 원형 올인원 웹사이트 제작 신청
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-900 mt-1">
            보고 계신 완성도 그대로! 추가 비용 없는 투명한 1페이지 5섹션 고전환 맞춤 제작
          </p>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold">제작 신청서가 접수되었습니다!</h4>
              <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                대표 개발자가 입력해주신 번호(<strong className="text-amber-400">{clientPhone}</strong>)로
                <br />
                오늘 중 1:1 맞춤 견적서 및 기획 가이드 문서를 무료 발송해 드립니다.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-8 py-3 rounded-xl bg-amber-500 text-stone-950 font-bold text-sm hover:bg-amber-400"
              >
                데모 페이지 계속 살펴보기
              </button>
            </div>
          ) : (
            <>
              {/* Package Included Features (Why it's 500k KRW killer deal) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-[#1e272d] border border-white/10 flex items-start gap-3">
                  <Smartphone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-white">모바일 100% 최적화 반응형</h5>
                    <p className="text-[11px] text-zinc-400 mt-0.5">390px 스마트폰부터 1440px 데스크톱 완벽 대응</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#1e272d] border border-white/10 flex items-start gap-3">
                  <Zap className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-white">3영업일 초고속 납품</h5>
                    <p className="text-[11px] text-zinc-400 mt-0.5">기획 및 카피라이팅 가이드 즉시 세팅</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#1e272d] border border-white/10 flex items-start gap-3">
                  <Search className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-white">네이버·구글 SEO 검색 최적화</h5>
                    <p className="text-[11px] text-zinc-400 mt-0.5">메타태그 및 지도 플레이스 노출 지원</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#1e272d] border border-white/10 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-white">30일 무상 사후관리 지원</h5>
                    <p className="text-[11px] text-zinc-400 mt-0.5">텍스트 수정 및 이미지 교체 무상 지원</p>
                  </div>
                </div>
              </div>

              {/* Application Form */}
              <form onSubmit={handleAgencySubmit} className="space-y-4 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold mb-1.5 text-zinc-300">
                      신청자 성함 / 상호명 <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="예: 김대표 (디자인스튜디오)"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#1a2227] border border-zinc-700 text-sm focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-1.5 text-zinc-300">
                      연락처 번호 <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="010-0000-0000"
                      value={clientPhone}
                      onChange={handlePhoneChange}
                      maxLength={13}
                      className="w-full px-4 py-3 rounded-xl bg-[#1a2227] border border-zinc-700 text-sm focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1.5 text-zinc-300">
                    원하시는 업종 및 테마 <span className="text-amber-400">*</span>
                  </label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#1a2227] border border-zinc-700 text-sm focus:outline-none focus:border-amber-400 text-white"
                  >
                    <option value="시공·인테리어·매장형">테마 A: 시공·인테리어·매장형 (다크차콜 & 웜골드)</option>
                    <option value="전문직·학원·컨설팅형">테마 B: 전문직·학원·컨설팅형 (화이트 & 딥네이비)</option>
                    <option value="F&B·카페·레스토랑">F&B · 카페 · 베이커리형</option>
                    <option value="뷰티·헤어·병원형">뷰티 · 헤어살롱 · 병의원형</option>
                    <option value="스타트업·IT서비스">스타트업 · IT 솔루션형</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold text-base bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-stone-950 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  >
                    <Rocket className="w-5 h-5 fill-stone-950" />
                    <span>50만 원 제작 신청 및 무료 기획안 받기</span>
                  </button>
                  <p className="text-[11px] text-center text-zinc-400 mt-2">
                    신청 접수 후 바로 결제되지 않으며, 담당 개발자가 상담 후 착수합니다.
                  </p>
                </div>
              </form>
            </>
          )}

        </div>

      </div>
    </div>
  );
};
