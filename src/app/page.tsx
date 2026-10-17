'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ComparisonSection } from '@/components/ComparisonSection';
import { InteractiveShowcase } from '@/components/InteractiveShowcase';
import { PricingSection } from '@/components/PricingSection';
import { ProcessFaqSection } from '@/components/ProcessFaqSection';
import { QuickApplicationForm } from '@/components/QuickApplicationForm';
import { MobileFloatingBar } from '@/components/MobileFloatingBar';
import { FloatingKakaoButton } from '@/components/FloatingKakaoButton';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0E17] text-[#F8FAFC] font-sans selection:bg-blue-600 selection:text-white">
      {/* 1. Header Navigation */}
      <Header />

      <main className="relative">
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: Why Us (Comparison Table) */}
        <ComparisonSection />

        {/* Section 3: Interactive Live Sample Showcase */}
        <InteractiveShowcase />

        {/* Section 4: Pricing (Transparent Flat Rates) */}
        <PricingSection />

        {/* Section 5: 3-Day Process & 5 FAQs */}
        <ProcessFaqSection />

        {/* Section 6: Quick Slot Application Form */}
        <QuickApplicationForm />
      </main>

      {/* Footer */}
      <Footer />

      {/* Desktop Floating KakaoTalk Consultation Button */}
      <FloatingKakaoButton />

      {/* Mobile Bottom Floating Bar (390px optimized) */}
      <MobileFloatingBar />
    </div>
  );
}
