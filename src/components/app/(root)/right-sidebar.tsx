'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';

export function RightSidebar() {
  const { status } = useSession();

  const onClickAuthButton = () => {
    if (status === 'loading') return;
    if (status === 'authenticated') return signOut();
    if (status === 'unauthenticated') return signIn();
  };

  return (
    <aside className="sticky right-0 top-0 flex w-[310px] flex-col overflow-y-hidden border-none bg-black-1 px-8 pt-8 max-xl:hidden">
      <Button type="button" onClick={onClickAuthButton} disabled={status == 'loading'}>
        {status === 'unauthenticated' ? '로그인' : status === 'authenticated' ? '로그아웃' : ''}
      </Button>
    </aside>
  );
}
