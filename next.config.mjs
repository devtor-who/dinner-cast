/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
  images: {
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
