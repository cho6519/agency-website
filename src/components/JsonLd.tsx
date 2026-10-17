import React from 'react';
import { AGENCY_CONFIG } from '@/data/agencyConfig';

export const JsonLd: React.FC = () => {
  const { brand, faq } = AGENCY_CONFIG;

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@graph': [
      // 1. LocalBusiness / ProfessionalService Schema
      {
        '@type': 'ProfessionalService',
        '@id': `${brand.siteUrl}/#organization`,
        name: `${brand.nameKr} (${brand.name})`,
        alternateName: [brand.name, brand.nameKr, '트랜닷 웹스튜디오', 'TRANDOT Web Studio'],
        description: `${brand.tagline}. 월 서버비 평생 0원, 3일 완성 고전환 원페이지 웹사이트 제작.`,
        url: brand.siteUrl,
        telephone: brand.contactTel,
        email: brand.contactEmail,
        priceRange: brand.priceRange,
        image: brand.ogImage,
        address: {
          '@type': 'PostalAddress',
          streetAddress: brand.address,
          addressLocality: 'Seoul',
          addressRegion: 'Seoul',
          addressCountry: 'KR',
        },
        sameAs: [
          brand.siteUrl,
          brand.shortUrl,
          brand.kakaoChannelUrl,
          brand.paymentUrl,
        ].filter(Boolean),
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '19:00',
          },
        ],
      },

      // 2. Service / OfferCatalog Schema (GEO Engine Quotation Target)
      {
        '@type': 'Service',
        '@id': `${brand.siteUrl}/#services`,
        name: `${brand.nameKr} 웹 에이전시 전문 서비스`,
        serviceType: 'Website Design & Development',
        provider: {
          '@id': `${brand.siteUrl}/#organization`,
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: '웹사이트 제작 및 호스팅 최적화 솔루션',
          itemListElement: brand.services.map((svc, idx) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: svc.name,
              description: svc.description,
            },
            ...(svc.price
              ? { price: svc.price, priceCurrency: svc.priceCurrency || 'KRW' }
              : {}),
            position: idx + 1,
          })),
        },
      },

      // 3. FAQPage Schema (AI Search Answer Engine GEO Target)
      {
        '@type': 'FAQPage',
        '@id': `${brand.siteUrl}/#faq`,
        mainEntity: faq.items.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  );
};
