'use client';

import { Home } from 'lucide-react';

interface Props {
    age: string;
    onChange: (age: string) => void;
}

export default function AgeSelector({ age, onChange }: Props) {
    return (
        <div className="space-y-2">
            <label className="block text-sm font-bold text-black" htmlFor="age">
                年齢
            </label>
            <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-black pointer-events-none">
                    <Home size={20} />
                </div>

                <input
                    type="text"
                    id="age"
                    value={age}
                    onChange={(e) => onChange(e.target.value)}
                    required
                    placeholder="例：20さい"
                    className="
                        w-full
                        h-[50px]
                        pl-12 pr-4
                        bg-white
                        border border-[#F3A683]
                        rounded-[24px]
                        text-black
                        placeholder-gray-400
                        focus:outline-none
                        focus:ring-2
                        focus:ring-[#F3A683]
                    "
                />
            </div>
        </div>
    );
}
