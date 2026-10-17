export interface ThemeContent {
  id: 'theme-a' | 'theme-b';
  categoryBadge: string;
  tabLabel: string;
  brandName: string;
  brandSubname: string;
  logoIcon: string;
  
  // Theme Color classes
  colors: {
    bg: string;
    cardBg: string;
    cardBorder: string;
    textPrimary: string;
    textSecondary: string;
    textMuted: string;
    accent: string;
    accentHex: string;
    accentHover: string;
    accentLight: string;
    accentBorder: string;
    accentText: string;
    badgeBg: string;
    badgeText: string;
    badgeBorder: string;
    navBg: string;
    footerBg: string;
  };

  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    bgImage: string;
    ctaPrimary: string;
    ctaSecondary: string;
    metrics: { value: string; label: string }[];
  };

  whyUs: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      number: string;
      title: string;
      desc: string;
      highlight: string;
      icon: string;
    }[];
  };

  services: {
    badge: string;
    title: string;
    subtitle: string;
    notice: string;
    items: {
      category: string;
      title: string;
      desc: string;
      tags: string[];
      image: string;
    }[];
  };

  portfolio: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      id: number;
      title: string;
      category: string;
      spec: string;
      result: string;
      image: string;
      details: string[];
    }[];
  };

  faq: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      q: string;
      a: string;
    }[];
  };

  contact: {
    badge: string;
    title: string;
    subtitle: string;
    types: string[];
    address: string;
    addressDetail: string;
    subway: string;
    hours: string;
    hoursDetail: string;
    tel: string;
    email: string;
    parking: string;
    mapName: string;
  };

  floatingBar: {
    tel: string;
    kakaoText: string;
    callText: string;
  };
}

export const THEME_A: ThemeContent = {
  id: 'theme-a',
  categoryBadge: '추천 업종: 인테리어 · 리모델링 · 건축 · 매장 · F&B',
  tabLabel: '테마 A : 시공·인테리어·매장형',
  brandName: 'STUDIO AURA',
  brandSubname: '스튜디오 아우라 인테리어 건축',
  logoIcon: 'Compass',

  colors: {
    bg: 'bg-[#182025]',
    cardBg: 'bg-[#212A30]/80 backdrop-blur-md',
    cardBorder: 'border-[#3c4b56]/40',
    textPrimary: 'text-white',
    textSecondary: 'text-[#c5d0d8]',
    textMuted: 'text-[#8495a4]',
    accent: 'bg-[#B89467]',
    accentHex: '#B89467',
    accentHover: 'hover:bg-[#cca573]',
    accentLight: 'bg-[#B89467]/15',
    accentBorder: 'border-[#B89467]/40',
    accentText: 'text-[#B89467]',
    badgeBg: 'bg-[#B89467]/15',
    badgeText: 'text-[#cca573]',
    badgeBorder: 'border-[#B89467]/30',
    navBg: 'bg-[#141a1e]/90 backdrop-blur-md border-b border-[#2b373f]/60',
    footerBg: 'bg-[#11161a]',
  },

  hero: {
    badge: '🏆 2026 하이엔드 공간디자인 & 시공 부문 대상',
    headline: '브랜드의 가치를 완성하는\n하이엔드 공간 디자인 & 책임 시공',
    subheadline: '주거부터 트렌디한 상업 공간까지, 1:1 전담 감리와 불필요한 거품 없는 100% 정찰제로 품격 있는 공간을 완성합니다.',
    bgImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85',
    ctaPrimary: '무료 현장 방문 상담 예약',
    ctaSecondary: '시공 포트폴리오 감상',
    metrics: [
      { value: '380+', label: '누적 시공 완공 실적' },
      { value: '98.6%', label: '고객 만족 및 추천률' },
      { value: '2년', label: '무상 하자보증 AS 책임제' },
    ],
  },

  whyUs: {
    badge: 'WHY STUDIO AURA',
    title: '왜 많은 고객이 아우라를 선택할까요?',
    subtitle: '시작부터 완공 후까지, 고객이 신뢰할 수 있는 3가지 정직한 원칙을 약속합니다.',
    items: [
      {
        number: '01',
        title: '투명한 100% 실시간 원가 내역 공개',
        desc: '착공 전 세부 자재 규격과 단가를 명시하며, 공사 중 무단 추가 비용을 요구하지 않습니다.',
        highlight: '불투명한 깜깜이 견적 Zero',
        icon: 'FileSpreadsheet',
      },
      {
        number: '02',
        title: '현장 소장 1:1 전담 직영 시공제',
        desc: '하도급 외주가 아닌 검증된 직영 시공팀과 전문 감리 소장이 매일 공정을 직접 체크합니다.',
        highlight: '매일 저녁 실시간 공정 사진 전송',
        icon: 'ShieldCheck',
      },
      {
        number: '03',
        title: '준공 후 2년 무상 하자보수 보증제',
        desc: '공사가 끝나도 인연은 계속됩니다. 정기 점검 서비스 및 하자에 대한 48시간 내 신속 방문을 보장합니다.',
        highlight: '보증서 공식 발행 및 사후관리',
        icon: 'Sparkles',
      },
    ],
  },

  services: {
    badge: 'OUR SERVICES',
    title: '공간의 목적에 맞춘 4대 전문 솔루션',
    subtitle: '설계부터 인허가, 시공, 스타일링까지 원스톱으로 제공합니다.',
    notice: '※ 3D 렌더링 시안 및 세부 견적서 무료 제공',
    items: [
      {
        category: 'Residential',
        title: '프리미엄 주거 리모델링',
        desc: '아파트, 단독주택, 빌라 등 라이프스타일과 동선에 맞춘 감각적인 공간 재구성.',
        tags: ['동선 최적화', '친환경 자재', '히든도어/조명설계'],
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
      },
      {
        category: 'Commercial',
        title: 'F&B 카페 & 레스토랑 인테리어',
        desc: '고객의 체류 시간을 늘리고 인스타그래머블한 무드를 자아내는 상업 공간 연출.',
        tags: ['브랜드 브랜딩 연계', '주방설비 동선', '포토존 기획'],
        image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
      },
      {
        category: 'Corporate',
        title: '스마트 오피스 & 사옥 디자인',
        desc: '업무 몰입도를 높이고 기업의 정체성을 한눈에 보여주는 현대적 워크스페이스.',
        tags: ['집중/휴게 분리', '방음 솔루션', '스마트 미팅룸'],
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      },
      {
        category: 'Retail & Beauty',
        title: '뷰티샵 · 쇼룸 · 프리미엄 매장',
        desc: '제품과 서비스가 돋보이도록 세심한 조도 설계와 고급스러운 마감재를 적용한 쇼룸.',
        tags: ['조도 맞춤 설계', '맞춤 가구 제작', '프라이빗 룸'],
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },

  portfolio: {
    badge: 'PORTFOLIO & FAQ',
    title: '실제 완공 사례 및 자주 묻는 질문',
    subtitle: '아우라의 손길로 탄생한 실제 공간들의 완성도와 고객분들의 주요 문의사항입니다.',
    items: [
      {
        id: 1,
        title: '한남동 더힐 54평 하이엔드 모던 리노베이션',
        category: '주거 인테리어',
        spec: '178㎡ (54평) | 공사기간 5주',
        result: '천연 대리석과 간접조명으로 구현한 호텔형 주거 공간',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
        details: ['이태리 천연 세라믹 아일랜드 시공', '무몰딩·무문선 미니멀 디테일', '스마트홈 IoT 조명/냉난방 연동'],
      },
      {
        id: 2,
        title: '성수동 스페셜티 로스터리 카페 & 쇼룸',
        category: '상업 F&B',
        spec: '120㎡ (36평) | 공사기간 3주',
        result: '노출 콘크리트와 웜우드가 어우러진 감각적 공간',
        image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
        details: ['바리스타 맞춤 인체공학적 바 카운터', '오픈 글라스 로스팅 룸', '자연광을 극대화한 보이드 설계'],
      },
      {
        id: 3,
        title: '판교 테크노밸리 AI 스타트업 스마트 사옥',
        category: '오피스',
        spec: '290㎡ (88평) | 공사기간 4주',
        result: '유연한 협업 공간과 프라이빗 폰부스를 결합한 사옥',
        image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
        details: ['전 좌석 모션데스크 및 모듈형 라운지', '글라스 흡음 파티션', '사내 카페테리아 구축'],
      },
      {
        id: 4,
        title: '청담동 프라이빗 프리미엄 헤어 살롱',
        category: '뷰티/매장',
        spec: '95㎡ (29평) | 공사기간 2.5주',
        result: '개별 VIP 프라이빗 부스와 아치형 우아한 동선',
        image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
        details: ['그림자 없는 특수 메이크업 조명', '완전 독립형 샴푸 스파 룸', '대리석 리셉션 카운터'],
      },
    ],
  },

  faq: {
    badge: 'FAQ',
    title: '자주 묻는 질문',
    subtitle: '시공 전 가장 많이 궁금해하시는 사항을 투명하게 안내드립니다.',
    items: [
      {
        q: '견적 상담 및 현장 실측 시 비용이 발생하나요?',
        a: '아닙니다. 수도권 전 지역 무료 현장 실측과 함께 고객 맞춤형 레이아웃 배치 제안서 및 세부 견적서를 비용 부담 없이 제공해 드립니다.',
      },
      {
        q: '공사 도중 갑작스러운 추가 비용이 발생할 위험은 없나요?',
        a: '스튜디오 아우라는 사전 실측 단계에서 모든 구조와 배관을 면밀히 분석하여 계약서에 100% 명시합니다. 고객의 설계 변경 요청이 없는 한 임의 추가 비용은 단 1원도 발생하지 않습니다.',
      },
      {
        q: '공사 기간은 평균적으로 얼마나 소요되나요?',
        a: '30평형 주거 공간 기준 보통 3~4주, 상업 매장은 2~3주가 표준 공기입니다. 체계적인 직영 공정표에 맞춰 단 하루의 지연 없이 약속한 입주일정에 맞춰 완공합니다.',
      },
      {
        q: '공사 완료 후 사후 관리나 AS는 어떻게 보장되나요?',
        a: '준공 시 공식 2년 무상 하자보수 보증서를 발행합니다. 전용 고객센터를 통해 하자가 접수되면 24시간 내 전문 기사가 연락드리고 48시간 내 현장 출동 조치를 원칙으로 합니다.',
      },
    ],
  },

  contact: {
    badge: 'CONTACT & VISIT',
    title: '빠른 상담 신청 및 쇼룸 오시는 길',
    subtitle: '궁금하신 공간 유형을 선택해 주시면 전문 디자이너가 1시간 내로 친절하게 상담해 드립니다.',
    types: ['주거 전체 리모델링', '카페/식음료 매장', '오피스/사옥 인테리어', '뷰티/쇼룸/상업공간', '부분 리모델링/상담'],
    address: '서울특별시 강남구 논현로 642 아우라 디자인 타워 3층',
    addressDetail: '학동역 3번 출구 도보 3분 거리 (주차 발렛 무료 지원)',
    subway: '지하철 7호선 학동역 3번 출구 도보 200m 직진',
    hours: '평일 09:30 - 19:30 | 토요일 10:00 - 17:00',
    hoursDetail: '일요일 및 공휴일은 사전 예약 시 1:1 VIP 상담 가능',
    tel: '02-548-8920',
    email: 'contact@studio-aura.kr',
    parking: '건물 1층 전용 주차장 무료 발렛 주차 지원',
    mapName: '스튜디오 아우라 강남 본점 쇼룸',
  },

  floatingBar: {
    tel: '02-548-8920',
    kakaoText: '카카오톡 1:1 견적 문의',
    callText: '전화 상담 바로 연결',
  },
};

export const THEME_B: ThemeContent = {
  id: 'theme-b',
  categoryBadge: '추천 업종: 법무법인 · 회계/세무 · 입시학원 · 경영컨설팅 · 병의원',
  tabLabel: '테마 B : 전문직·학원·컨설팅형',
  brandName: 'VERITAS PARTNERS',
  brandSubname: '베리타스 법률·경영 컨설팅 그룹',
  logoIcon: 'Scale',

  colors: {
    bg: 'bg-[#f8fafc]',
    cardBg: 'bg-white shadow-consulting',
    cardBorder: 'border-slate-200/90',
    textPrimary: 'text-[#0f172a]',
    textSecondary: 'text-[#334155]',
    textMuted: 'text-[#64748b]',
    accent: 'bg-[#1E3A8A]',
    accentHex: '#1E3A8A',
    accentHover: 'hover:bg-[#1d4ed8]',
    accentLight: 'bg-[#1E3A8A]/10',
    accentBorder: 'border-[#1E3A8A]/30',
    accentText: 'text-[#1E3A8A]',
    badgeBg: 'bg-[#1E3A8A]/10',
    badgeText: 'text-[#1E3A8A]',
    badgeBorder: 'border-[#1E3A8A]/25',
    navBg: 'bg-white/95 backdrop-blur-md border-b border-slate-200/80',
    footerBg: 'bg-[#0f172a]',
  },

  hero: {
    badge: '⚖️ 국내 100대 기업 및 1,200+ 고객사 공식 자문 파트너',
    headline: '압도적 전문성과 명쾌한 전략,\n결과로 증명하는 비즈니스 파트너',
    subheadline: '대형 로펌 및 회계법인 출신 수석 전문가 그룹이 기업 법률 리스크 차단, 전략적 절세, 성장 컨설팅을 원스톱으로 책임집니다.',
    bgImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85',
    ctaPrimary: '전문가 1:1 맞춤 진단 신청',
    ctaSecondary: '주요 성공 사례 확인',
    metrics: [
      { value: '1,250+', label: '누적 승소 및 자문 실적' },
      { value: '98.2%', label: '분쟁 방어 및 절세 성공률' },
      { value: '15인', label: '수석 변호사·세무사 상주' },
    ],
  },

  whyUs: {
    badge: 'WHY VERITAS',
    title: '왜 각계 리더들이 베리타스를 신뢰할까요?',
    subtitle: '단편적 조언을 넘어 실질적인 승리와 이익을 만들어내는 3가지 핵심 강점입니다.',
    items: [
      {
        number: '01',
        title: '대형 펌 출신 수석 1:1 전담 TFT 배속',
        desc: '주니어 실무자가 아닌 15년 차 이상의 전문 파트너가 상담 초기부터 종결까지 직접 책임집니다.',
        highlight: '의뢰 당일 전담 TFT 즉시 구성',
        icon: 'Award',
      },
      {
        number: '02',
        title: '빅데이터 기반 정밀 승소 및 절세 솔루션',
        desc: '수만 건의 최신 판례와 세법 개정 데이터를 시뮬레이션하여 가장 안전하고 확실한 방안을 도출합니다.',
        highlight: '예측 오차 최소화 맞춤 리포트',
        icon: 'BarChart3',
      },
      {
        number: '03',
        title: '철저한 비밀유지(NDA) & 24H 신속 대응',
        desc: '모든 상담 내용은 암호화 관리되며, 비상 상황 시 1시간 내 긴급 법률·세무 가이드를 제공합니다.',
        highlight: '100% 비밀보장 보안 시스템',
        icon: 'Lock',
      },
    ],
  },

  services: {
    badge: 'OUR EXPERTISE',
    title: '신뢰할 수 있는 4대 핵심 자문 영역',
    subtitle: '법률, 세무, 입시/학원, 기업 컨설팅까지 다각도 솔루션을 제공합니다.',
    notice: '※ 초기 30분 전문가 브리핑 무료 진단 제공',
    items: [
      {
        category: 'Corporate Law',
        title: '기업 법무 및 계약 리스크 자문',
        desc: '스타트업 투자계약, 주주간 계약, 영업비밀 보호 및 소송 전 분쟁 사전 차단 컨설팅.',
        tags: ['투자 유치 자문', '계약서 정밀 검토', '지식재산권(IP)'],
        image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
      },
      {
        category: 'Tax & Accounting',
        title: '전략적 절세 및 세무조사 대응',
        desc: '법인세 절감, 가업 승계 플랜, 사전 모의 세무진단을 통한 합법적 최대 절세 효과 실현.',
        tags: ['세무조사 방어', '가업승계/증여', '법인 전환'],
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
      },
      {
        category: 'Academy & Education',
        title: '대형 학원 브랜딩 & 입시 컨설팅',
        desc: '학원 원생 모집 전략, 가맹 프랜차이즈 시스템 구축, 맞춤형 프리미엄 입시 로드맵.',
        tags: ['원생 유치 전략', '프랜차이즈화', '강사 노무관리'],
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
      },
      {
        category: 'Wealth & Asset',
        title: '고액 자산가 프라이빗 자산 승계',
        desc: '부동산 권리 분석, 상속세 절감 솔루션 및 패밀리 오피스 맞춤 법률·세무 종합 설계.',
        tags: ['상속 플래닝', '부동산 법률 자문', '자산 방어'],
        image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },

  portfolio: {
    badge: 'CASE STUDIES & FAQ',
    title: '주요 성공 사례 및 자주 묻는 질문',
    subtitle: '클라이언트의 중요한 비즈니스와 권리를 지켜낸 실제 성공 레퍼런스입니다.',
    items: [
      {
        id: 1,
        title: 'IT 유니콘 기업 120억 시리즈B 투자계약 자문',
        category: '기업 법무',
        spec: '투자 기간 6주 | 리스크 조항 14건 방어',
        result: '창업자 경영권 방어 및 불리한 풋옵션 조항 전면 수정 타결',
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
        details: ['투자계약서(SPA) 독소조항 완전 배제', '스톡옵션 규정 정비', 'VC 협상 직접 대리'],
      },
      {
        id: 2,
        title: '중견 제조기업 가업상속 공제 42억 절세 성공',
        category: '세무 회계',
        spec: '진행 기간 3개월 | 국세청 사전 심의 통과',
        result: '가업 승계 요건 사전 완비로 증여세 85% 절감',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
        details: ['사전 모의 세무진단 수행', '비상장주식 가치평가 최적화', '세무조사 완벽 방어'],
      },
      {
        id: 3,
        title: '대치동 유명 단과 학원 4개 직영점 프랜차이즈 확장',
        category: '학원 컨설팅',
        spec: '컨설팅 4개월 | 원생 340% 증가',
        result: '표준화된 커리큘럼 및 원생 관리 CRM 도입으로 기업화 성공',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
        details: ['학원 프랜차이즈 가맹계약서 작성', '강사 근로계약 체계 정립', '온·오프라인 마케팅 수립'],
      },
      {
        id: 4,
        title: '유명 프랜차이즈 상표권 및 영업비밀 침해 승소',
        category: '지식재산권',
        spec: '가처분 인용 및 3.5억 손해배상 판결',
        result: '유사 브랜드 무단 사용 전면 금지 및 손해배상액 전액 회수',
        image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
        details: ['신속한 증거보전 가처분 신청', '부정경쟁방지법 위반 입증', '합의금 및 배상금 조기 회수'],
      },
    ],
  },

  faq: {
    badge: 'FAQ',
    title: '자주 묻는 질문',
    subtitle: '전문가 상담 전 의뢰인분들께서 가장 궁금해하시는 질문들입니다.',
    items: [
      {
        q: '첫 방문 상담 시 상담 비용이 발생하나요?',
        a: '홈페이지를 통해 사전 예약해 주시는 분들께는 첫 30분간 전문 변호사/세무사가 쟁점을 분석해 드리는 초기 진단 브리핑을 무료로 제공해 드립니다.',
      },
      {
        q: '지방이나 해외에 있는 기업도 원활하게 자문받을 수 있나요?',
        a: '네, 가능합니다. 줌(Zoom) 화상 회의 및 전용 보안 메신저 채널을 통해 전국 및 해외 고객사들을 대상으로 동일한 퀄리티의 실시간 법률·세무 자문을 제공하고 있습니다.',
      },
      {
        q: '수임료 및 자문 비용 체계는 어떻게 책정되나요?',
        a: '사전 약정 없는 불명확한 청구는 일체 없습니다. 사건의 난이도와 예상 소요 시간에 따라 착수 전 확정 견적서를 교부하며, 투명한 정액제 또는 성과 연동제로 운영됩니다.',
      },
      {
        q: '상담 내용과 기업 내부 정보의 비밀유지는 철저한가요?',
        a: '모든 상담은 변호사법 및 세무사법상 비밀유지의무가 엄격히 적용되며, 상담 전 의뢰인의 요청 시 표준 비밀유지서약서(NDA)를 즉시 체결하고 데이터를 철저히 암호화 관리합니다.',
      },
    ],
  },

  contact: {
    badge: 'CONSULTATION & LOCATION',
    title: '전문가 상담 신청 및 오시는 길',
    subtitle: '해결이 필요한 사안의 분야를 선택해 주시면 담당 전문 파트너가 30분 이내로 연락드립니다.',
    types: ['기업 법무/계약서 검토', '세무 진단 및 절세 플랜', '학원/교육 프랜차이즈', '민·형사 소송 분쟁', '고액 자산 승계/상속'],
    address: '서울특별시 서초구 서초대로 301 베리타스빌딩 7층',
    addressDetail: '교대역 9번 출구 도보 2분 거리 (발렛 주차 가능)',
    subway: '지하철 2호선·3호선 교대역 9번 출구 도보 150m 직진',
    hours: '평일 09:00 - 18:30 | 토요일 09:30 - 14:00',
    hoursDetail: '야간 긴급 법률 자문은 사전 예약 의뢰인 전용 핫라인 운영',
    tel: '02-3472-7711',
    email: 'help@veritas-partners.com',
    parking: '베리타스빌딩 지하 자주식 주차장 및 무료 발렛 주차 지원',
    mapName: '베리타스 파트너스 서초 본사',
  },

  floatingBar: {
    tel: '02-3472-7711',
    kakaoText: '카카오톡 1:1 비밀상담',
    callText: '전문가 직통 전화상담',
  },
};
