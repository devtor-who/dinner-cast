'use client';

import { ROOT_SIDEBAR_LINKS } from '@/config/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogoImage } from '../logo-image';

export function LeftSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky left-0 top-0 flex w-44 flex-col justify-between border-none bg-black-1 pt-8 text-white-1 max-md:hidden lg:w-64 lg:pl-8">
      <nav className="flex flex-col gap-6">
        <Link href={'/'} className="flex items-center gap-x-3 pb-10 max-lg:justify-center">
          <LogoImage></LogoImage>
          <h1 className="text-2xl font-extrabold max-lg:hidden">DinnerCast</h1>
        </Link>

        {ROOT_SIDEBAR_LINKS.map(({ label, route, Icon }) => (
          <Link
            href={route}
            key={route}
            className={cn(
              'flex items-center justify-start gap-x-3 py-4 max-lg:px-4',
              pathname === route || pathname.startsWith(`${route}/`)
                ? 'border-r-4 border-primary bg-gradient-to-l from-secondary/40 to-secondary/0 dark:border-primary-foreground'
                : '',
              'transition-all duration-500',
            )}
          >
            <Icon />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
