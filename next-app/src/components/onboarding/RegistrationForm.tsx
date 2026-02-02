'use client';

import { useState } from 'react';
import LocationSelector from '@/components/account/location';
import AgeSelector from '@/components/account/age';
import PositionSelector from '@/components/account/position';
import GenreSelector from '@/components/account/genres';
import { Home, Smile, User } from 'lucide-react';

interface Props {
    onFinish: () => void;
}

export default function RegistrationForm({ onFinish }: Props) {
    const [formData, setFormData] = useState({
        location: '',
        age: '',
        position: '',
        genres: [] as string[],
    });

    const isFormValid = formData.location && formData.age && formData.position && formData.genres.length > 0;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, save to DB here. For now, save to localStorage as per profile page logic.
        localStorage.setItem('userProfile', JSON.stringify(formData));
        onFinish();
    };

    return (
        <div className="w-full max-w-md mx-auto px-6 py-8 flex flex-col items-center">
            {/* Logo */}
            <h1 className="text-[40px] font-lemon text-[#F3A683] mb-4">
                honnori
            </h1>

            {/* Description */}
            <div className="text-center mb-8">
                <p className="text-[#7A7A7A] text-sm leading-relaxed">
                    あなたのことを<br />
                    少しだけ教えてください
                </p>
            </div>

            <form onSubmit={handleSubmit} className="w-full space-y-4">
                <LocationSelector
                    location={formData.location}
                    onChange={(val) => setFormData(prev => ({ ...prev, location: val }))}
                />

                <AgeSelector
                    age={formData.age}
                    onChange={(val) => setFormData(prev => ({ ...prev, age: val }))}
                />

                <PositionSelector
                    position={formData.position}
                    onChange={(val) => setFormData(prev => ({ ...prev, position: val }))}
                />

                <GenreSelector
                    selectedGenres={formData.genres}
                    onChange={(val) => setFormData(prev => ({ ...prev, genres: val }))}
                />

                {/* Buttons */}
                <div className="mt-8 space-y-3">
                    <button
                        type="submit"
                        disabled={!isFormValid}
                        className="
              w-full
              py-4
              bg-white
              text-black
              font-bold
              rounded-[30px]
              shadow-md
              disabled:opacity-50
              disabled:cursor-not-allowed
              flex items-center justify-center gap-2
              hover:bg-[#FFF9F1]
              transition
            "
                    >
                        {/* Icon optional */}
                        <Smile size={20} className="text-[#F3A683]" />
                        はじめる
                    </button>

                    <div className="grid grid-cols-2 gap-3 mt-4">
                        <button
                            type="button"
                            disabled
                            className="
                 w-full py-3
                 rounded-[24px]
                 border border-dashed border-[#F3A683]
                 text-[#F3A683]
                 text-xs
                 flex items-center justify-center gap-1
                 opacity-50
               "
                        >
                            <div className="w-6 h-6 rounded-full bg-[#EBA388] flex items-center justify-center text-white">
                                <User size={12} />
                            </div>
                            エンタメ
                        </button>

                        <button
                            type="button"
                            disabled
                            className="
                 w-full py-3
                 rounded-[24px]
                 border border-dashed border-[#F3A683]
                 text-[#F3A683]
                 text-xs
                 flex items-center justify-center gap-1
                 opacity-50
               "
                        >
                            <div className="w-6 h-6 rounded-full bg-[#EBA388] flex items-center justify-center text-white">
                                <Home size={12} />
                            </div>
                            あそび
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
