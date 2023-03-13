import { redirect } from 'next/navigation';

import { getCurrentUser } from '@/lib/auth/server';
import { MobileHeader, PromoCard } from './components';

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  if (user) {
    redirect('/');
  }

  return (
    <div>
      <MobileHeader />

      <div className="flex flex-col items-stretch gap-8 p-5 pb-24 lg:min-h-screen lg:flex-row lg:p-8">
        <PromoCard />

        <div className="flex flex-col items-center lg:grow lg:p-10">
          <div className="mt-10 flex w-full max-w-[32rem] flex-col items-center md:mt-20 lg:mt-36 lg:min-w-[24rem]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
