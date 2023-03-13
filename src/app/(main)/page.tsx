'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

import { logout } from '@/lib/auth';
import { Button, Text } from '@/lib/ui';

export default function HomePage() {
  const router = useRouter();

  const onClickLogout = useCallback(async () => {
    try {
      await logout();
      router.push('/sign-in');
    } catch {
      alert("Couldn't logout. Something went wrong.");
    }
  }, [router]);

  return (
    <div className="flex flex-col items-start gap-10">
      <Text variant="h1">Home</Text>
      <Button onClick={onClickLogout}>Log out</Button>
    </div>
  );
}
