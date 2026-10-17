export interface ComparisonItem {
  category: string;
  legacy: string;
  legacyDesc: string;
  trandot: string;
  trandotDesc: string;
  isPositive: boolean;
}

export interface SampleSectionData {
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    bgImage: string;
    ctaText: string;
    metrics: { label: string; value: string }[];
  };
  whyUs: {
    title: string;
    subtitle: string;
    items: { title: string; desc: string; icon: string; highlight: string }[];
  };
  services: {
    title: string;
    subtitle: string;
    items: { title: string; desc: string; tag: string; image: string; detail: string }[];
  };
  portfolio: {
    title: string;
    subtitle: string;
    items: { title: string; desc: string; spec: string; image: string; tag: string }[];
  };
  faq: {
    q: string;
    a: string;
  }[];
  contact: {
    title: string;
    subtitle: string;
    chips: string[];
    address: string;
    addressDetail: string;
    subway: string;
    tel: string;
    hours: string;
    parking: string;
  };
}

export interface SampleSite {
  id: 'construction' | 'professional' | 'studio';
  tabTitle: string;
  categoryLabel: string;
  brandName: string;
  tagline: string;
  themeStyle: {
    bg: string;
    headerBg: string;
    textColor: string;
    accentColor: string;
    accentHex: string;
    cardBg: string;
    cardBorder: string;
    badgeBg: string;
    badgeText: string;
  };
  sections: SampleSectionData;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  originalPrice?: string;
  price: string;
  periodNotice: string;
  description: string;
  features: string[];
  excludedFeatures?: string[];
  ctaText: string;
  isPopular: boolean;
}

export interface ProcessStep {
  day: string;
  title: string;
  description: string;
  details: string[];
  icon: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}
