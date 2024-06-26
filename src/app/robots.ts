import { publicEnv } from '@/config/env';
import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${publicEnv.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
  };
}
