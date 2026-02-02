'use client';

import { useState, Suspense } from 'react';
import { useRouter } from 'next/navigation';
import Loading from '@/components/ui/Loading';
import Onboarding1 from '@/components/onboarding/onboarding1';
import Onboarding2 from '@/components/onboarding/onboarding2';
import Onboarding3 from '@/components/onboarding/onboarding3';

export default function OnboardingPage() {
    const router = useRouter();
    const [step, setStep] = useState(1);

    const nextStep = () => setStep((s) => Math.min(s + 1, 3));
    const prevStep = () => setStep((s) => Math.max(s - 1, 1));

    const finish = () => {
        router.push('/account');
    };

    return (
        <Suspense fallback={<Loading />}>
            <div className="flex flex-col min-h-screen items-center justify-center">
                <div className="w-full max-w-md">

                    {step === 1 && <Onboarding1 onNext={nextStep} />}
                    {step === 2 && <Onboarding2 onNext={nextStep} onBack={prevStep} />}
                    {step === 3 && <Onboarding3 onFinish={finish} onBack={prevStep} />}
                </div>
            </div>
        </Suspense>
    );
}
