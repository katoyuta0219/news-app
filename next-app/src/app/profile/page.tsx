'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Loading from '@/components/ui/Loading';
import Footer from "@/components/layout/footer";
import GenreSelector from '@/components/account/genres';
import LocationSelector from '@/components/account/location';
import AgeSelector from '@/components/account/age';
import PositionSelector from '@/components/account/position';

interface ProfileFormData {
    age: string;
    location: string;
    position: string;
    genres: string[];
}

export default function ProfilePage() {
    const router = useRouter();
    const [formData, setFormData] = useState<ProfileFormData>({
        age: '',
        location: '',
        position: '',
        genres: [],
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Load profile data from localStorage on mount
    useEffect(() => {
        try {
            const savedProfile = localStorage.getItem('userProfile');
            if (savedProfile) {
                setFormData(JSON.parse(savedProfile));
            }
        } catch (error) {
            console.error('Failed to load profile:', error);
        }
    }, []);

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
            setSuccessMessage('プロフィールが更新されました！');

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

            <main className="flex-1 w-full max-w-2xl mx-auto px-4 pb-24 overflow-y-auto">
                <h1 className="h-[20%] flex items-center justify-center text-[32px] font-lemon text-[#F3A683]">
                    profile
                </h1>

                {successMessage && (
                    <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-100 rounded-lg">
                        {successMessage}
                    </div>
                )}

                {errorMessage && (
                    <div className="mb-6 p-4 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-100 rounded-lg">
                        {errorMessage}
                    </div>
                )}

                <form
                    onSubmit={handleSubmit}
                    className="bg-[#FFF9F1] p-8"
                >
                    <div className="space-y-3">
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
                    </div>

                    <div className="mt-8">
                        <button
                            type="submit"
                            disabled={!isFormValid || isSubmitting}
                            className="
      w-full
      px-6 py-3
      bg-[#F3A683]/50   /* 背景だけ50% */
      text-black       /* 文字は100% */
      rounded-[50px]
      transition
      hover:bg-[#F3A683]/60
      font-medium
      disabled:bg-[#F3A683]/30
      disabled:cursor-not-allowed
    "
                        >
                            {isSubmitting ? '保存中...' : 'けってい'}
                        </button>
                    </div>



                </form>
            </main>

            <Footer />
        </div>
    );
}