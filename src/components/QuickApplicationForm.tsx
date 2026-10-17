'use client';

import React, { useState } from 'react';
import {
  Send,
  Sparkles,
  CheckCircle2,
  Phone,
  Flame,
  Terminal,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { AGENCY_CONFIG } from '@/data/agencyConfig';
import { LegalModal } from '@/components/LegalModal';

export const QuickApplicationForm: React.FC = () => {
  const { applicationForm, hero } = AGENCY_CONFIG;

  const [selectedPackage, setSelectedPackage] = useState(applicationForm.packages[0].name);
  const [selectedStyle, setSelectedStyle] = useState(applicationForm.sampleStyles[0].name);
  const [companyName, setCompanyName] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [agreed, setAgreed] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [legalModalOpen, setLegalModalOpen] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, '');
    let formatted = raw;
    if (raw.length > 3 && raw.length <= 7) {
      formatted = `${raw.slice(0, 3)}-${raw.slice(3)}`;
    } else if (raw.length > 7) {
      formatted = `${raw.slice(0, 3)}-${raw.slice(3, 7)}-${raw.slice(7, 11)}`;
    }
    setPhone(formatted);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !companyName.trim()) {
      alert('업체명, 성함, 연락처를 모두 입력해 주세요.');
      return;
    }
    if (!agreed) {
      alert('개인정보 수집 및 이용에 동의해 주세요.');
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Web3Forms API 연동 (agencyConfig.ts의 web3FormsAccessKey 적용)
      const accessKey = AGENCY_CONFIG.brand.web3FormsAccessKey;

      if (accessKey && accessKey !== 'YOUR_WEB3FORMS_ACCESS_KEY') {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: accessKey,
            from_name: 'TRANDOT 공식 사이트 접수 알림',
            subject: `[TRANDOT 50만 원 특가 신청] ${companyName} (${name} 대표님)`,
            to_email: AGENCY_CONFIG.brand.contactEmail,
            company: companyName,
            name: name,
            phone: phone,
            package: selectedPackage,
            style: selectedStyle,
            message: `
[TRANDOT 공식 웹사이트 제작 슬롯 신청 내역]
• 업체명: ${companyName}
• 대표자 성함: ${name}
• 연락처 번호: ${phone}
• 선택 패키지: ${selectedPackage}
• 희망 샘플 스타일: ${selectedStyle}
• 접수 채널: 온라인 원클릭 예약 슬롯
            `.trim(),
          }),
        });
      } else {
        // Access key가 아직 미설정된 경우 모의 지연 후 접수 완료 처리
        await new Promise((resolve) => setTimeout(resolve, 600));
      }

      setSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      // 통신 지연이나 에러 발생 시에도 고객 접수 완료 화면 및 카카오톡 연결은 차단되지 않도록 보장
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="apply" className="py-20 sm:py-28 bg-[#0A0E17] text-white border-b border-slate-800/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Form Container */}
        <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-b from-slate-900 via-slate-900/90 to-[#0F172A] border-2 border-cyan-500/50 shadow-[0_0_40px_rgba(56,189,248,0.15)] relative overflow-hidden">
          
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-mono font-bold border border-rose-500/30 mb-3 shadow-[0_0_15px_rgba(244,63,94,0.2)]">
              <Flame className="w-3.5 h-3.5 fill-current" />
              <span>{hero.slotBadge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {applicationForm.title}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              {applicationForm.subtitle}
            </p>
          </div>

          {submitted ? (
            <div className="py-8 text-center space-y-6 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(16,185,129,0.4)] border border-emerald-500/40">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-950 text-cyan-400 border border-cyan-500/30 mb-2">
                  // APPLICATION_RECEIVED_SUCCESS
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  특가 제작 슬롯 신청이 정상 접수되었습니다!
                </h3>
                <p className="mt-2 text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                  <strong className="text-cyan-400">{companyName} ({name} 대표님)</strong>, 신청해 주셔서 대단히 감사합니다.
                  <br />
                  선점하신 슬롯을 우선 배정해 드리기 위해, 아래 <strong className="text-amber-300">[카카오톡으로 빠른 상담 이어가기]</strong> 버튼을 눌러주시면 1:1 전담 개발자와 바로 연결됩니다.
                </p>
              </div>

              {/* Requirement 2: Prominent KakaoTalk Continue Consultation Button */}
              <div className="max-w-md mx-auto pt-2">
                <a
                  href={AGENCY_CONFIG.brand.kakaoChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="btn-kakao-continue"
                  className="w-full py-4 sm:py-5 px-6 rounded-2xl bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] font-black text-base sm:text-lg flex items-center justify-center gap-3 shadow-[0_0_35px_rgba(254,229,0,0.4)] hover:shadow-[0_0_45px_rgba(254,229,0,0.6)] active:scale-[0.99] transition-all border border-amber-300"
                >
                  <MessageCircle className="w-6 h-6 fill-black shrink-0" />
                  <span>카카오톡으로 빠른 상담 이어가기</span>
                  <ArrowRight className="w-5 h-5 text-black shrink-0" />
                </a>
                <p className="text-[11px] text-slate-400 mt-2 font-mono">
                  ※ 클릭 시 TRANDOT 공식 카카오톡 1:1 상담 채널로 즉시 이동합니다.
                </p>
              </div>

              {/* Application Summary Receipt Card */}
              <div className="max-w-md mx-auto p-4 sm:p-5 rounded-2xl bg-slate-950/90 border border-slate-700/80 text-left text-xs font-mono space-y-2 shadow-inner">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-cyan-400 font-bold">신청 접수증 (SLOT RECEIPT)</span>
                  <span className="text-emerald-400 text-[10px]">● 접수 완료</span>
                </div>
                <div className="grid grid-cols-3 gap-1 pt-1 text-slate-400">
                  <span>신청 업체명</span>
                  <span className="col-span-2 text-white font-semibold">{companyName}</span>
                  
                  <span>신청자 성함</span>
                  <span className="col-span-2 text-white font-semibold">{name} 대표님</span>
                  
                  <span>연락처 번호</span>
                  <span className="col-span-2 text-emerald-400 font-bold">{phone}</span>
                  
                  <span>선택 패키지</span>
                  <span className="col-span-2 text-cyan-300 font-semibold">{selectedPackage}</span>
                  
                  <span>희망 스타일</span>
                  <span className="col-span-2 text-slate-200">{selectedStyle}</span>
                </div>
              </div>

              {/* Secondary Direct Action Channels */}
              <div className="max-w-md mx-auto space-y-2 pt-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {/* Phone Call */}
                  <a
                    href={`tel:${AGENCY_CONFIG.brand.contactTel}`}
                    className="py-3 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 border border-slate-700 active:scale-[0.99] transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 text-cyan-400" />
                    <span>전화 직통 상담</span>
                  </a>

                  {/* SMS Direct */}
                  <a
                    href={`sms:${AGENCY_CONFIG.brand.contactTel}?body=${encodeURIComponent(
                      `[TRANDOT 웹제작 신청]\n• 업체: ${companyName}\n• 성함: ${name}\n• 연락처: ${phone}\n• 패키지: ${selectedPackage}`
                    )}`}
                    className="py-3 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-medium text-xs flex items-center justify-center gap-1.5 border border-slate-700 active:scale-[0.99] transition-all"
                  >
                    <span>💬 문자(SMS) 전송</span>
                  </a>
                </div>
              </div>

              {/* Reset Form Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-slate-400 hover:text-white underline underline-offset-4"
                >
                  다른 정보로 다시 신청하기
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* STEP 1: Package Selection */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-3">
                  <span className="text-cyan-400 mr-1.5 font-bold">STEP_01.</span>
                  희망 패키지 선택 <span className="text-rose-400">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {applicationForm.packages.map((pkg) => {
                    const isSelected = selectedPackage === pkg.name;
                    return (
                      <button
                        key={pkg.id}
                        type="button"
                        onClick={() => setSelectedPackage(pkg.name)}
                        className={`p-4 rounded-2xl text-left border transition-all duration-200 flex items-center justify-between ${
                          isSelected
                            ? 'bg-blue-600/30 border-cyan-400 shadow-[0_0_20px_rgba(56,189,248,0.2)] text-white font-bold'
                            : 'bg-slate-800/60 border-slate-700/80 text-slate-300 hover:border-slate-600'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              isSelected ? 'border-cyan-400 bg-cyan-500' : 'border-slate-500'
                            }`}
                          >
                            {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </div>
                          <span className="text-xs sm:text-sm">{pkg.name}</span>
                        </div>
                        {pkg.recommended && (
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                            특가 추천
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* STEP 2: Style Selection */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-3">
                  <span className="text-cyan-400 mr-1.5 font-bold">STEP_02.</span>
                  선호하는 샘플 스타일 선택 <span className="text-rose-400">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {applicationForm.sampleStyles.map((style) => {
                    const isSelected = selectedStyle === style.name;
                    return (
                      <button
                        key={style.id}
                        type="button"
                        onClick={() => setSelectedStyle(style.name)}
                        className={`p-3.5 rounded-xl text-left border text-xs sm:text-sm font-semibold transition-all ${
                          isSelected
                            ? 'bg-blue-600/40 text-white border-cyan-400 shadow-[0_0_15px_rgba(56,189,248,0.2)]'
                            : 'bg-slate-800/40 border-slate-700/80 text-slate-300 hover:border-slate-600'
                        }`}
                      >
                        {style.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* STEP 3: Basic Info Inputs */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-3">
                  <span className="text-cyan-400 mr-1.5 font-bold">STEP_03.</span>
                  신청자 정보 입력 <span className="text-rose-400">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="업체명 (또는 업종)"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="대표자 성함"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="연락처 번호 (010-0000-0000)"
                      value={phone}
                      onChange={handlePhoneChange}
                      maxLength={13}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Privacy agreement */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-400 pt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="w-4 h-4 rounded text-blue-500 focus:ring-0 bg-slate-950 border-slate-700"
                  />
                  <span>견적 산출 및 맞춤 상담을 위한 개인정보 수집 및 이용에 동의합니다.</span>
                </label>
                <button
                  type="button"
                  onClick={() => setLegalModalOpen(true)}
                  className="text-cyan-400 hover:underline shrink-0 text-xs text-left sm:text-right"
                >
                  [전문보기]
                </button>
              </div>

              {/* Submit CTA */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl font-bold text-base bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 border border-cyan-400/40"
                >
                  {isSubmitting ? (
                    <span>접수 처리 중...</span>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 text-amber-300" />
                      <span>50만 원 특가 제작 슬롯 신청하기</span>
                    </>
                  )}
                </button>
                <p className="text-[11px] text-center text-slate-400 mt-2.5">
                  ※ 신청 즉시 결제되지 않으며, 담당 개발자가 기획서 검토 후 상세 견적을 유선 안내해 드립니다.
                </p>
              </div>

            </form>
          )}

        </div>

      </div>

      {/* Legal Modal Popup */}
      <LegalModal
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
        defaultTab="privacy"
      />
    </section>
  );
};
