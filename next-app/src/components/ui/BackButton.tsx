'use client';

import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';

export default function BackButton() {
    const router = useRouter();

    return (
        <button
            type="button"
            onClick={() => router.back()}
            aria-label="戻る"
            className="mb-[40px] w-10 h-10 flex items-center justify-center -ml-2 text-black"
        >
            <ChevronLeft size={24} />
        </button>
    );
}
