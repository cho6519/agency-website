import { MetadataRoute } from 'next';
import { AGENCY_CONFIG } from '@/data/agencyConfig';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const { brand } = AGENCY_CONFIG;
  const siteUrl = brand.siteUrl;

  return {
    rules: [
      // 1. General search engines (Google, Naver, Bing, etc.)
      {
        userAgent: '*',
        allow: '/',
      },
      // 2. Generative AI Search & Answer Engines (GEO - ChatGPT, Perplexity, Claude, Gemini, Naver CLOVA)
      {
        userAgent: [
          'GPTBot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'PerplexityBot',
          'ClaudeBot',
          'Google-Extended',
          'Yeti',
          'NaverBot',
          'Applebot-Extended',
          'CCBot',
          'cohere-ai',
        ],
        allow: '/',
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
