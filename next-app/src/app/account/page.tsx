'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Loading from '@/components/ui/Loading';
import GenreSelector from '@/components/account/genres';
import LocationSelector from '@/components/account/location';
import AgeSelector from '@/components/account/age';
import PositionSelector from '@/components/account/position';
import { Smile } from 'lucide-react';

interface RegistrationFormData {
    age: string;
    location: string;
    position: string;
    genres: string[];
}

export default function AccountPage() {
    const router = useRouter();
    const [formData, setFormData] = useState<RegistrationFormData>({
        age: '',
        location: '',
        position: '',
        genres: [],
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const isFormValid = formData.age && formData.location && formData.position && formData.genres.length > 0;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage('');
        setSuccessMessage('');

        try {
            if (!isFormValid) {
                throw new Error('すべてのフィールドを入力してください');
            }

            // Save to localStorage
            localStorage.setItem('userProfile', JSON.stringify(formData));
            setSuccessMessage('アカウント登録が完了しました！');

            setTimeout(() => {
                router.push('/home');
            }, 2000);
        } catch (error) {
            setErrorMessage(
                error instanceof Error ? error.message : 'エラーが発生しました'
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitting) {
        return <Loading />;
    }

    return (
        <div className="flex flex-col h-full bg-[#FFF9F1] overflow-hidden">
            <main className="w-full max-w-md mx-auto py-8 px-6 flex flex-col items-center overflow-y-auto">
                {/* Header/Logo Style */}
                <h1 className="text-[40px] font-lemon text-[#F3A683] mb-4">
                    Account
                </h1>
                <p className="text-[#7A7A7A] text-sm mb-8">
                    アカウント登録
                </p>

                {successMessage && (
                    <div className="w-full mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-[24px]">
                        {successMessage}
                    </div>
                )}

                {errorMessage && (
                    <div className="w-full mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-[24px]">
                        {errorMessage}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="w-full space-y-4">
                    <LocationSelector
                        location={formData.location}
                        onChange={(location) =>
                            setFormData((prev) => ({ ...prev, location }))
                        }
                    />

                    <AgeSelector
                        age={formData.age}
                        onChange={(age) =>
                            setFormData((prev) => ({ ...prev, age }))
                        }
                    />

                    <PositionSelector
                        position={formData.position}
                        onChange={(position) =>
                            setFormData((prev) => ({ ...prev, position }))
                        }
                    />

                    <GenreSelector
                        selectedGenres={formData.genres}
                        onChange={(genres) =>
                            setFormData((prev) => ({ ...prev, genres }))
                        }
                    />

                    <div className="mt-8">
                        <button
                            type="submit"
                            disabled={!isFormValid || isSubmitting}
                            className="
                                w-full
                                py-4
                                bg-white
                                text-black
                                font-bold
                                rounded-[30px]
                                shadow-md
                                hover:bg-[#FFF9F1]
                                transition
                                disabled:opacity-50
                                disabled:cursor-not-allowed
                                flex items-center justify-center gap-2
                            "
                        >
                            <Smile size={20} className="text-[#F3A683]" />
                            {isSubmitting ? '登録中...' : 'はじめる'}
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
}
