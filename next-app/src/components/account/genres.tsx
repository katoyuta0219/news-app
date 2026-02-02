'use client';

import { Home, Cloud, ChevronRight } from 'lucide-react';

type Props = {
    selectedGenres: string[];
    onChange: (genres: string[]) => void;
};

const GENRES = [
    '動物',
    'グルメ・カフェ',
    'エンタメ',
    'あそび',
    'ショッピング',
    '自然'
];

export default function GenreSelector({ selectedGenres, onChange }: Props) {
    const toggleGenre = (genre: string) => {
        if (selectedGenres.includes(genre)) {
            onChange(selectedGenres.filter((g) => g !== genre));
        } else {
            onChange([...selectedGenres, genre]);
        }
    };

    return (
        <div className="rounded-[24px] border border-[#F3A683] bg-white p-6 relative mt-6">
            <h3 className="text-sm font-bold text-black mb-4">
                好きなジャンル
            </h3>

            <div className="flex flex-wrap gap-3 items-center">
                {GENRES.map((genre) => {
                    const isSelected = selectedGenres.includes(genre);
                    return (
                        <button
                            key={genre}
                            type="button"
                            onClick={() => toggleGenre(genre)}
                            className={`
                                relative
                                px-4 py-2
                                rounded-[50px] /* Cloud shapes? rounded-full is safest fallback */
                                text-sm font-medium
                                transition
                                border
                                flex items-center gap-1
                                ${isSelected
                                    ? 'bg-[#F3A683]/20 border-[#F3A683] text-[#D2977C]'
                                    : 'bg-white border-gray-100 text-gray-600 shadow-sm'
                                }
                            `}
                        >
                            {/* Dummy cloud icon or shape? */}
                            <Home size={14} className={isSelected ? 'text-[#D2977C]' : 'text-gray-400'} />
                            {genre}
                        </button>
                    );
                })}
                {/* Arrow as visual cue? */}
                <div className="ml-auto">
                    <ChevronRight size={20} className="text-black" />
                </div>
            </div>
        </div>
    );
}
