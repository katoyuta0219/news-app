'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
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
        <div>
            <p>Step {step} / 3</p>
            {step === 1 && <Onboarding1 onNext={nextStep} />}
            {step === 2 && <Onboarding2 onNext={nextStep} onBack={prevStep} />}
            {step === 3 && <Onboarding3 onFinish={finish} onBack={prevStep} />}
        </div>
    );
}
