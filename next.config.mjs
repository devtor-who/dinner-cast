import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

// we only need to use the utility during development so we can check NODE_ENV
// (note: this check is recommended but completely optional)
if (process.env.NODE_ENV === 'development') {
  // we simply need to call the utility
  setupDevPlatform();
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { hostname: 'lovely-flamingo-139.convex.cloud', protocol: 'https' }, //
    ],
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/sitemap',
      },
    ];
  },
};

export default nextConfig;
