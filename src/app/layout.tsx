import type { Metadata, Viewport } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'DinnerCast',
  description: 'Ai로 만드는 팟캐스트',
};

export const viewport: Viewport = {
  themeColor: '#fff',
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
