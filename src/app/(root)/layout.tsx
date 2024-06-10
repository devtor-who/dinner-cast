import { LeftSidebar } from '@/components/app/(root)/LeftSidebar';
import { MobileNav } from '@/components/app/(root)/MoblieNav';
import { RightSidebar } from '@/components/app/(root)/RightSidebar';
import { LogoImage } from '@/components/app/LogoImage';

export const runtime = 'edge';

export default async function Layout({
  children, //
}: {
  children: Readonly<React.ReactNode>;
}) {
  return (
    <section className="relative flex flex-col">
      <section className="flex min-h-svh bg-black-3">
        <LeftSidebar></LeftSidebar>

        <main className="flex flex-1 flex-col px-14 max-sm:px-4">
          <section className="container max-sm:px-4">
            <article className="hidden h-16 items-center justify-between max-md:flex">
              <LogoImage></LogoImage>
              <MobileNav></MobileNav>
            </article>
            <article>{children}</article>
          </section>
        </main>

        <RightSidebar></RightSidebar>
      </section>
    </section>
  );
}
