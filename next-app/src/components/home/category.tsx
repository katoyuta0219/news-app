"use client";
import { useState } from "react";
// import FilterSheet from "./FilterSheet"; // Removed as parent handles it

type Category = "すべて" | "生活に近い" | "はっけん"; // Or string if dynamic, but keeping for now
const categories: Category[] = ["すべて", "生活に近い", "はっけん"];

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
                                className={`rounded-[24px] border text-[12px] transition
                  ${active
                    ? "text-[#000000] bg-[#ffffff] border-[#FFE9DC]"
                    : "text-[#000000] bg-[#ffffff] border-[#FFE9DC]"
                                    }
                                    px-[10px] py-[10px]
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



