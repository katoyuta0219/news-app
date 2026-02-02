'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Loading from '@/components/ui/Loading';

export default function Page() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/onboarding');
    }, 3000);

    const countdownInterval = setInterval(() => {
      setCountdown((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(countdownInterval);
    };
  }, [router]);

  return (
    <main className="flex flex-col items-center justify-center h-full">
      <Loading />
      <p className="mt-4">
      </p>
    </main>
  );
}
