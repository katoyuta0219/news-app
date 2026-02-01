'use client';

import { useState, useEffect } from 'react';
import Footer from '@/components/layout/footer';
import CategorySelector from '@/components/home/category';
import FilterSheet from '@/components/home/FilterSheet';
import NewsList from '@/components/home/news/NewsList';
import Loading from '@/components/ui/Loading';

export default function HomePage() {
    const [formData, setFormData] = useState({
        category: '全て',
    });

    const [sheetOpen, setSheetOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="flex flex-col min-h-screen bg-[#FFF9F1]">

            <main className="flex-1 p-4">
                <div className="flex items-center justify-center mb-6 h-[47px]">
                    <h1 className="text-[32px] font-lemon text-[#F3A683]">honnori</h1>
                </div>
            
                <div className="flex items-center gap-4 mb-6">
                    <CategorySelector
                        category={formData.category}
                        onChange={(category) => setFormData((prev) => ({ ...prev, category }))}
                    />

                    <button 
                        onClick={() => setSheetOpen(true)}
                        className="
                            px-[10px] py-[10px]
                            ml-[20px]
                            text-[12px]
                            bg-[#ffffff]
                            text-[#000000]
                            border border-[#FFE9DC]
                            rounded-[24px]
                            transition
                        "
                    >
                        絞り込み <span className='pl-[10px]'>&#x21C4;</span>
                    </button>
                </div>

                <NewsList category={formData.category} />

                <FilterSheet open={sheetOpen} onClose={() => setSheetOpen(false)} />
            </main>

            <Footer />
        </div>
    );
}
