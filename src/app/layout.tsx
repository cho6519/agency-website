import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: 'TRANDOT WEB STUDIO | 월 유지비 평생 0원 50만 원 고전환 웹 제작',
  description: '매달 나가는 홈페이지 호스팅비, 평생 0원으로 끝내드립니다. 소상공인·중소기업 타깃 1페이지 5섹션 고전환 PC·모바일 반응형 웹사이트 3일 완성 솔루션',
  keywords: '웹사이트 제작, 홈페이지 외주, 50만원 홈페이지, 원페이지 웹사이트, 반응형 웹, 클라우드 웹, 트랜닷 웹스튜디오, TRANDOT',
  openGraph: {
    title: 'TRANDOT WEB STUDIO | 월 유지비 평생 0원 50만 원 고전환 웹 제작',
    description: '매달 나가는 홈페이지 호스팅비, 평생 0원으로 끝내드립니다. 소상공인·중소기업 타깃 1페이지 5섹션 고전환 반응형 웹사이트 3일 완성 솔루션',
    type: 'website',
    locale: 'ko_KR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="antialiased bg-[#0A0E17] text-[#F8FAFC] selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
