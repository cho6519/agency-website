import type { Metadata, Viewport } from 'next';
import './globals.css';
import { AGENCY_CONFIG } from '@/data/agencyConfig';
import { JsonLd } from '@/components/JsonLd';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

const { brand } = AGENCY_CONFIG;

export const metadata: Metadata = {
  metadataBase: new URL(brand.siteUrl),
  title: 'TRANDOT WEB STUDIO | 평생 서버비 0원 · 50만원 반응형 홈페이지 제작',
  description: '매달 나가는 홈페이지 호스팅비 평생 0원! 소상공인·1인 기업·로컬 매장을 위한 5섹션 완결형 고전환 랜딩페이지를 3영업일 만에 제작해 드립니다.',
  keywords: '웹사이트 제작, 홈페이지 외주, 50만원 홈페이지, 원페이지 웹사이트, 반응형 웹, 클라우드 웹, 트랜닷 웹스튜디오, TRANDOT, 소상공인 홈페이지, 중소기업 웹사이트, Cloudflare 호스팅',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'TRANDOT | 평생 서버비 0원·50만원 웹 제작',
    description: '소상공인·기업 맞춤 초고속 반응형 홈페이지 (3일 완성)',
    url: brand.siteUrl,
    siteName: `${brand.name} WEB STUDIO`,
    images: [
      {
        url: '/trandot-og-v2.jpg',
        width: 1200,
        height: 630,
        alt: 'TRANDOT | 평생 서버비 0원·50만원 웹 제작',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TRANDOT | 평생 서버비 0원·50만원 웹 제작',
    description: '소상공인·기업 맞춤 초고속 반응형 홈페이지 (3일 완성)',
    images: [
      {
        url: '/trandot-og-v2.jpg',
        width: 1200,
        height: 630,
        alt: 'TRANDOT | 평생 서버비 0원·50만원 웹 제작',
      },
    ],
  },
  verification: {
    google: brand.googleVerification || undefined,
    other: {
      ...(brand.naverVerification ? { 'naver-site-verification': brand.naverVerification } : {}),
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <JsonLd />
      </head>
      <body className="antialiased bg-[#0A0E17] text-[#F8FAFC] selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
