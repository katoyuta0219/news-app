'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Loading from '@/components/ui/Loading';
import GenreSelector from '@/components/account/genres';
import LocationSelector from '@/components/account/location';
import AgeSelector from '@/components/account/age';
import PositionSelector from '@/components/account/position';

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
        <div className="flex min-h-screen bg-gray-50 dark:bg-black">
            <main className="w-full max-w-2xl mx-auto py-8 px-4">
                <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
                    アカウント登録
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

                <form onSubmit={handleSubmit} className="bg-white dark:bg-zinc-900 rounded-lg shadow-md p-8">
                    <div className="space-y-6">
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
                            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? '登録中...' : 'はじめる'}
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
}
