"use client";
import { useState } from "react";
// import FilterSheet from "./FilterSheet"; // Removed as parent handles it

type Category = "全て" | "生活に近い" | "はっけん"; // Or string if dynamic, but keeping for now
const categories: Category[] = ["全て", "生活に近い", "はっけん"];

interface Props {
    category: string;
    onChange: (category: string) => void;
}

export default function CategorySelector({ category, onChange }: Props) {
    // const [category, setCategory] = useState<Category>("全て"); // Lifted up
    // const [sheetOpen, setSheetOpen] = useState(false); // Lifted up

    return (
        <div>
            {/* 上段：カテゴリ */}
            <div className="flex items-center">
                {/* カテゴリ3つ */}
                <div className="flex gap-2">
                    {categories.map((c) => {
                        const active = category === c;
                        return (
                            <button
                                key={c}
                                type="button"
                                onClick={() => onChange(c)}
                                className={`px-4 py-2 rounded-lg border text-sm transition
                  ${active
                                        ? "bg-blue-600 text-white border-blue-600"
                                        : "bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"
                                    }
                `}
                            >
                                {c}
                            </button>
                        );
                    })}
                </div>

                {/* Filter button moved to parent */}
            </div>

            {/* FilterSheet moved to parent */}
        </div>
    );
}



