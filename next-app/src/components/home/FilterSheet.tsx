"use client";

import { useState } from 'react';
import { Search, MapPin, Clock, Car, Coffee, PawPrint, Sparkles } from 'lucide-react';

interface Props {
    open: boolean;
    onClose: () => void;
    onApply: (filters: { keyword: string; tags: string[]; ratio: number }) => void;
}

const FILTERS = [
    { label: '近い場所', icon: MapPin },
    { label: '今週の話題', icon: Clock },
    { label: 'おでかけ', icon: Car },
    { label: 'カフェ', icon: Coffee },
    { label: '動物', icon: PawPrint },
    { label: 'ちょっと未来', icon: Sparkles },
];

export default function FilterSheet({ open, onClose, onApply }: Props) {
    const [sliderValue, setSliderValue] = useState(50);
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    const [keyword, setKeyword] = useState('');

    const toggleFilter = (label: string) => {
        if (selectedFilters.includes(label)) {
            setSelectedFilters(prev => prev.filter(f => f !== label));
        } else {
            setSelectedFilters(prev => [...prev, label]);
        }
    };

    const handleReset = () => {
        setSliderValue(50);
        setSelectedFilters([]);
        setKeyword('');
    };

    const handleApply = () => {
        onApply({ keyword, tags: selectedFilters, ratio: sliderValue });
        onClose();
    };

    return (
        <>
            {/* 背景の暗い幕 */}
            <div
                onClick={onClose}
                className={`fixed inset-0 z-[998] bg-black/40 transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            />

            {/* 下から出るボード */}
            <div
                className={`fixed left-0 right-0 bottom-0 z-[999] rounded-t-2xl bg-[#FFF9F1]
          p-6 shadow-xl transition-transform duration-300 max-h-[90vh] overflow-y-auto w-full
          ${open ? "translate-y-0" : "translate-y-full"}
        `}
            >
                {/* Handle bar */}
                <div className="flex justify-center mb-4">
                    <div className="w-12 h-1 bg-gray-300 rounded-full" />
                </div>

                <div className="flex items-center justify-center mb-6 relative">
                    <div className="flex items-center gap-1 text-[#5EA754] font-bold">
                        <span>♣ 絞り込み</span>
                    </div>
                </div>

                {/* 検索バー */}
                <div className="relative mb-6">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        placeholder="キーワードでさがす"
                        className="w-full h-12 pl-12 pr-4 rounded-[24px] border border-black text-black bg-white focus:outline-none"
                    />
                </div>

                {/* フィルターボタンGrid */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                    {FILTERS.map((filter) => {
                        const Icon = filter.icon;
                        const isSelected = selectedFilters.includes(filter.label);
                        return (
                            <button
                                key={filter.label}
                                onClick={() => toggleFilter(filter.label)}
                                className={`
                                    h-12 rounded-[24px] border flex items-center justify-center gap-2 text-sm font-medium transition
                                    ${isSelected
                                        ? 'bg-white border-[#5EA754] text-black shadow-sm'
                                        : 'bg-white border-gray-200 text-black shadow-sm'
                                    }
                                `}
                            >
                                <Icon size={16} />
                                {filter.label}
                            </button>
                        );
                    })}
                </div>

                {/* Slider */}
                <div className="mb-10">
                    <h3 className="text-sm font-medium text-black mb-4">発見ニュースの割合</h3>
                    <div className="relative h-2 bg-gray-200 rounded-full">
                        <div
                            className="absolute left-0 top-0 h-full bg-[#5EA754] rounded-full"
                            style={{ width: `${sliderValue}%` }}
                        />
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={sliderValue}
                            onChange={(e) => setSliderValue(Number(e.target.value))}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        />
                        <div
                            className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white border border-[#E5E5E5] rounded-full shadow pointer-events-none"
                            style={{ left: `calc(${sliderValue}% - 12px)` }}
                        />
                    </div>
                    <div className="flex justify-between text-xs text-black mt-2">
                        <span>少なめ</span>
                        <span>多め</span>
                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex gap-4">
                    <button
                        onClick={handleReset}
                        className="flex-1 h-12 rounded-[24px] border border-gray-300 bg-white text-black font-medium"
                    >
                        すべて戻す
                    </button>
                    <button
                        onClick={handleApply}
                        className="flex-1 h-12 rounded-[24px] bg-[#F3A683] text-black font-medium"
                    >
                        適用する
                    </button>
                </div>
            </div>
        </>
    );
}
