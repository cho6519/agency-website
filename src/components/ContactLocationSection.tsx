'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Copy,
  Check,
  Navigation,
  Send,
  ShieldCheck,
  CheckCircle2,
  X,
  ExternalLink,
  Car,
  Train,
} from 'lucide-react';
import { ThemeContent } from '@/data/themes';

interface ContactLocationSectionProps {
  theme: ThemeContent;
}

export const ContactLocationSection: React.FC<ContactLocationSectionProps> = ({
  theme,
}) => {
  const isThemeA = theme.id === 'theme-a';

  // Form states
  const [selectedType, setSelectedType] = useState<string>(theme.contact.types[0]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [agreed, setAgreed] = useState(true);
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);

  // Sync selectedType when theme changes
  React.useEffect(() => {
    setSelectedType(theme.contact.types[0]);
  }, [theme.id]);

  // Auto format phone number
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

  // Copy address to clipboard
  const handleCopyAddress = () => {
    navigator.clipboard.writeText(theme.contact.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      alert('성함 또는 회사명을 입력해 주세요.');
      return;
    }
    if (!phone.trim() || phone.replace(/[^0-9]/g, '').length < 9) {
      alert('올바른 연락처 번호를 입력해 주세요.');
      return;
    }
    if (!agreed) {
      alert('개인정보 수집 및 이용에 동의해 주세요.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccessModalOpen(true);
    }, 700);
  };

  const handleResetForm = () => {
    setIsSuccessModalOpen(false);
    setName('');
    setPhone('');
    setMessage('');
  };

  return (
    <section
      id="contact"
      className={`py-20 sm:py-28 transition-colors duration-300 border-t ${
        isThemeA
          ? 'bg-[#141a1e] border-[#2b373f]/60'
          : 'bg-white border-slate-200'
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
            {theme.contact.badge}
          </div>
          <h2
            className={`text-2xl sm:text-4xl font-extrabold tracking-tight ${
              isThemeA ? 'text-white' : 'text-slate-900'
            }`}
          >
            {theme.contact.title}
          </h2>
          <p
            className={`mt-4 text-sm sm:text-base ${
              isThemeA ? 'text-[#c5d0d8]' : 'text-slate-600'
            }`}
          >
            {theme.contact.subtitle}
          </p>
        </div>

        {/* 2-Column Layout: Form (Left) & Location (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Quick Contact Form (7 cols) */}
          <div
            className={`lg:col-span-7 rounded-3xl p-6 sm:p-10 border transition-all ${
              isThemeA
                ? 'bg-[#212A30] border-[#3c4b56]/50 shadow-2xl'
                : 'bg-white border-slate-200 shadow-xl'
            }`}
          >
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-zinc-700/20">
              <h3
                className={`text-xl font-bold flex items-center gap-2 ${
                  isThemeA ? 'text-white' : 'text-slate-900'
                }`}
              >
                <span>간편 1:1 상담 예약 접수</span>
              </h3>
              <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 font-semibold border border-emerald-500/20">
                ● 실시간 전담팀 대기 중
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 1. Inquiry Type Chips */}
              <div>
                <label
                  className={`block text-xs font-bold uppercase tracking-wider mb-2.5 ${
                    isThemeA ? 'text-zinc-300' : 'text-slate-700'
                  }`}
                >
                  문의 유형 선택 <span className="text-rose-500">*</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {theme.contact.types.map((type) => {
                    const isSelected = selectedType === type;
                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setSelectedType(type)}
                        className={`text-xs sm:text-sm font-semibold px-3.5 py-2 rounded-xl transition-all duration-200 border ${
                          isSelected
                            ? isThemeA
                              ? 'bg-[#B89467] text-stone-950 border-[#B89467] shadow-md shadow-[#B89467]/30 scale-[1.02]'
                              : 'bg-[#1E3A8A] text-white border-[#1E3A8A] shadow-md shadow-blue-900/20 scale-[1.02]'
                            : isThemeA
                              ? 'bg-[#182025] text-zinc-300 border-[#3c4b56]/60 hover:border-zinc-500'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-400'
                        }`}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Name & Phone 2-col inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className={`block text-xs font-bold mb-1.5 ${
                      isThemeA ? 'text-zinc-300' : 'text-slate-700'
                    }`}
                  >
                    성함 / 기업명 <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="예: 홍길동 (또는 주식회사 OO)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl text-sm transition-all focus:outline-none border ${
                      isThemeA
                        ? 'bg-[#182025] border-[#3c4b56]/60 text-white placeholder-zinc-500 focus:border-[#B89467]'
                        : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-[#1E3A8A]'
                    }`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className={`block text-xs font-bold mb-1.5 ${
                      isThemeA ? 'text-zinc-300' : 'text-slate-700'
                    }`}
                  >
                    연락처 번호 <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    placeholder="010-0000-0000"
                    value={phone}
                    onChange={handlePhoneChange}
                    maxLength={13}
                    className={`w-full px-4 py-3 rounded-xl text-sm transition-all focus:outline-none border ${
                      isThemeA
                        ? 'bg-[#182025] border-[#3c4b56]/60 text-white placeholder-zinc-500 focus:border-[#B89467]'
                        : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-[#1E3A8A]'
                    }`}
                  />
                </div>
              </div>

              {/* 3. Message Textarea */}
              <div>
                <label
                  htmlFor="contact-message"
                  className={`block text-xs font-bold mb-1.5 ${
                    isThemeA ? 'text-zinc-300' : 'text-slate-700'
                  }`}
                >
                  상담 희망 내용 또는 일정 (선택사항)
                </label>
                <textarea
                  id="contact-message"
                  rows={3}
                  placeholder="예: 34평 아파트 리모델링 예상 견적과 미팅 가능한 날짜 문의드립니다."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl text-sm transition-all focus:outline-none border ${
                    isThemeA
                      ? 'bg-[#182025] border-[#3c4b56]/60 text-white placeholder-zinc-500 focus:border-[#B89467]'
                      : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-[#1E3A8A]'
                  }`}
                />
              </div>

              {/* 4. Privacy Agreement */}
              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="w-4 h-4 rounded text-amber-500 focus:ring-0"
                  />
                  <span className={isThemeA ? 'text-zinc-300' : 'text-slate-600'}>
                    개인정보 수집 및 이용에 동의합니다.
                  </span>
                </label>
                <button
                  type="button"
                  onClick={() => setTermsModalOpen(true)}
                  className="text-zinc-400 underline hover:text-zinc-200"
                >
                  전문보기
                </button>
              </div>

              {/* 5. Submit Button */}
              <button
                id="btn-submit-contact"
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-bold text-base transition-all duration-300 flex items-center justify-center gap-2 shadow-xl ${
                  isThemeA
                    ? 'bg-[#B89467] text-stone-950 hover:bg-[#cca573] hover:shadow-[#B89467]/30'
                    : 'bg-[#1E3A8A] text-white hover:bg-blue-700 hover:shadow-blue-900/30'
                }`}
              >
                {isSubmitting ? (
                  <span>접수 처리 중...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>상담 접수하기 (빠른 회신 약속)</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Location & Visit Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Map Placeholder Card */}
            <div
              className={`rounded-3xl overflow-hidden border p-6 ${
                isThemeA
                  ? 'bg-[#212A30] border-[#3c4b56]/50 shadow-xl'
                  : 'bg-white border-slate-200 shadow-lg'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h4
                  className={`font-bold text-base flex items-center gap-2 ${
                    isThemeA ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  <MapPin className={`w-5 h-5 ${isThemeA ? 'text-[#B89467]' : 'text-[#1E3A8A]'}`} />
                  <span>{theme.contact.mapName}</span>
                </h4>
                <button
                  onClick={handleCopyAddress}
                  className={`inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg border transition-colors ${
                    copied
                      ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                      : isThemeA
                        ? 'bg-[#182025] text-zinc-300 border-[#3c4b56] hover:bg-white/5'
                        : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>복사완료!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>주소 복사</span>
                    </>
                  )}
                </button>
              </div>

              {/* Styled Interactive Map Mockup Area */}
              <div className="relative h-52 w-full rounded-2xl overflow-hidden bg-slate-800 flex items-center justify-center border border-white/10 group">
                {/* Simulated map background grid pattern */}
                <div
                  className="absolute inset-0 opacity-40 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80')`,
                  }}
                />
                <div className="absolute inset-0 bg-slate-950/60" />

                {/* Pin marker pulse animation */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative flex items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-12 w-12 rounded-full bg-amber-400 opacity-60"></span>
                    <div
                      className={`relative w-11 h-11 rounded-full flex items-center justify-center text-white shadow-2xl ${
                        isThemeA ? 'bg-[#B89467]' : 'bg-[#1E3A8A]'
                      }`}
                    >
                      <MapPin className="w-6 h-6 stroke-[2.5]" />
                    </div>
                  </div>
                  <div className="mt-2 px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md text-white text-xs font-bold border border-white/20 shadow-lg">
                    {theme.brandName} 본사
                  </div>
                </div>

                {/* Map Action Overlay */}
                <div className="absolute bottom-3 right-3 flex gap-2">
                  <a
                    href="https://map.naver.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-[#03C75A] text-white hover:brightness-110 flex items-center gap-1 shadow-md"
                  >
                    <span>네이버 지도</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://map.kakao.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-[#FEE500] text-black hover:brightness-95 flex items-center gap-1 shadow-md"
                  >
                    <span>카카오맵</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Address & Subway details */}
              <div className="mt-4 space-y-2 text-xs sm:text-sm">
                <p className={`font-semibold ${isThemeA ? 'text-white' : 'text-slate-800'}`}>
                  {theme.contact.address}
                </p>
                <p className={isThemeA ? 'text-[#c5d0d8]' : 'text-slate-600'}>
                  {theme.contact.addressDetail}
                </p>
                <div className="flex items-center gap-2 pt-1 text-amber-500 font-medium">
                  <Train className="w-4 h-4 shrink-0" />
                  <span>{theme.contact.subway}</span>
                </div>
              </div>
            </div>

            {/* Hours & Contact Info Card */}
            <div
              className={`rounded-3xl p-6 border space-y-4 ${
                isThemeA
                  ? 'bg-[#212A30] border-[#3c4b56]/50 text-white'
                  : 'bg-white border-slate-200 text-slate-900 shadow-md'
              }`}
            >
              <div className="flex items-start gap-3">
                <Clock className={`w-5 h-5 shrink-0 mt-0.5 ${isThemeA ? 'text-[#B89467]' : 'text-[#1E3A8A]'}`} />
                <div>
                  <h5 className="font-bold text-xs uppercase tracking-wider text-zinc-400">운영 시간</h5>
                  <p className="text-sm font-semibold mt-0.5">{theme.contact.hours}</p>
                  <p className="text-xs text-zinc-400 mt-0.5">{theme.contact.hoursDetail}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-zinc-700/20">
                <Car className={`w-5 h-5 shrink-0 mt-0.5 ${isThemeA ? 'text-[#B89467]' : 'text-[#1E3A8A]'}`} />
                <div>
                  <h5 className="font-bold text-xs uppercase tracking-wider text-zinc-400">주차 안내</h5>
                  <p className="text-sm font-semibold mt-0.5">{theme.contact.parking}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-zinc-700/20">
                <Phone className={`w-5 h-5 shrink-0 mt-0.5 ${isThemeA ? 'text-[#B89467]' : 'text-[#1E3A8A]'}`} />
                <div>
                  <h5 className="font-bold text-xs uppercase tracking-wider text-zinc-400">전화 & 이메일</h5>
                  <p className="text-sm font-bold mt-0.5">{theme.contact.tel}</p>
                  <p className="text-xs text-zinc-400 mt-0.5">{theme.contact.email}</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Success Modal */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div
            className={`w-full max-w-md rounded-3xl p-6 sm:p-8 border shadow-2xl ${
              isThemeA ? 'bg-[#1a2227] border-[#3c4b56] text-white' : 'bg-white border-slate-200 text-slate-900'
            }`}
          >
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-bold text-center mb-1">상담 접수가 완료되었습니다</h3>
            <p className="text-xs sm:text-sm text-center text-zinc-400 mb-6">
              입력해주신 연락처로 담당 전문 수석이 1시간 이내에 직접 연락드리겠습니다.
            </p>

            <div
              className={`p-4 rounded-2xl mb-6 space-y-2 text-xs border ${
                isThemeA ? 'bg-[#141a1e] border-[#3c4b56]/40' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="flex justify-between">
                <span className="text-zinc-400">문의 유형:</span>
                <span className="font-bold">{selectedType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">성함/상호:</span>
                <span className="font-bold">{name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">연락처:</span>
                <span className="font-bold">{phone}</span>
              </div>
            </div>

            <button
              onClick={handleResetForm}
              className={`w-full py-3.5 rounded-xl font-bold text-sm ${
                isThemeA
                  ? 'bg-[#B89467] text-stone-950 hover:bg-[#cca573]'
                  : 'bg-[#1E3A8A] text-white hover:bg-blue-700'
              }`}
            >
              확인 및 창 닫기
            </button>
          </div>
        </div>
      )}

      {/* Terms Modal */}
      {termsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div
            className={`w-full max-w-lg rounded-3xl p-6 border shadow-2xl ${
              isThemeA ? 'bg-[#1a2227] border-[#3c4b56] text-white' : 'bg-white border-slate-200 text-slate-900'
            }`}
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-700/30">
              <h4 className="font-bold text-base">개인정보 수집 및 이용 동의</h4>
              <button onClick={() => setTermsModalOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="text-xs leading-relaxed space-y-3 text-zinc-400 max-h-60 overflow-y-auto pr-2">
              <p>
                1. 수집 항목: 성함/기업명, 연락처, 상담 내용
              </p>
              <p>
                2. 수집 및 이용 목적: 견적 산출 및 맞춤형 1:1 상담 안내 연락
              </p>
              <p>
                3. 보유 및 이용 기간: 상담 접수일로부터 1년간 보관 후 지체 없이 파기
              </p>
              <p>
                귀하는 개인정보 수집에 동의를 거부할 권리가 있으며, 거부 시 상담 신청이 제한될 수 있습니다.
              </p>
            </div>
            <button
              onClick={() => setTermsModalOpen(false)}
              className="mt-6 w-full py-2.5 rounded-xl font-bold text-xs bg-zinc-700 text-white hover:bg-zinc-600"
            >
              동의 및 닫기
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
