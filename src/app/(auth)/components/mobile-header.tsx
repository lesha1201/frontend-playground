import { Logo } from '@/app/components';

export function MobileHeader() {
  return (
    <header className="flex items-center px-5 py-6 lg:hidden">
      <Logo className="h-5" />
    </header>
  );
}
