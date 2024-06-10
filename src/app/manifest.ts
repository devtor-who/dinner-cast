import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'DinnerCast',
    short_name: 'DinnerCast',
    description: 'DinnerCast',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/icon.png',
        sizes: 'any',
      },
    ],
  };
}
