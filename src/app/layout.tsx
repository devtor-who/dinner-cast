import type { Metadata, Viewport } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import Script from 'next/script';
import { THEME_COLOR } from '@/config/constants';
import { publicEnv } from '@/config/env';
import { SessionProvider } from 'next-auth/react';

export const metadata: Metadata = {
  metadataBase: new URL(publicEnv.NEXT_PUBLIC_BASE_URL),
  title: {
    default: 'DinnerCast - Ai로 만드는 팟캐스트',
    template: '%s | DinnerCast - Ai로 만드는 팟캐스트',
  },
  description: 'Ai로 만드는 팟캐스트',
  keywords: ['DinnerCast', 'Podcast', '팟캐스트', 'AI', 'ai', 'Ai'],
};

export const viewport: Viewport = {
  themeColor: THEME_COLOR,
};

const SpoqaFont = localFont({
  src: [
    { path: './fonts/SpoqaHanSansNeo-Thin.woff2', weight: '100' },
    { path: './fonts/SpoqaHanSansNeo-Light.woff2', weight: '300' },
    { path: './fonts/SpoqaHanSansNeo-Regular.woff2', weight: '400' },
    { path: './fonts/SpoqaHanSansNeo-Medium.woff2', weight: '500' },
    { path: './fonts/SpoqaHanSansNeo-Bold.woff2', weight: '700' },
  ],
  variable: '--font-spoqa',
  style: 'normal',
  display: 'swap',
  preload: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={cn(SpoqaFont.variable)} lang="ko" suppressHydrationWarning>
      <body className="font-spoqa">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SessionProvider>{children}</SessionProvider>
        </ThemeProvider>

        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "f931931729bb427b925a54df1d5cb99f"}'
        />
      </body>
    </html>
  );
}
