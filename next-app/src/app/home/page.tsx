'use client';

import { useState, useEffect } from 'react';
import Footer from '@/components/layout/footer';
import CategorySelector from '@/components/home/category';
import FilterSheet from '@/components/home/FilterSheet';
import NewsList from '@/components/home/news/NewsList';
import Loading from '@/components/ui/Loading';

export default function HomePage() {
    const [category, setCategory] = useState({ category: '全て' }); // Keep similar structure as before but simplified
    const [filters, setFilters] = useState({
        keyword: '',
        tags: [] as string[],
        ratio: 50
    });

    const [sheetOpen, setSheetOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    const handleFilterApply = (newFilters: { keyword: string; tags: string[]; ratio: number }) => {
        setFilters(newFilters);
        // You might want to update category if tags override it, but for now we keep them separate
        // passing both to NewsList
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#FFF9F1]">

            <main className="flex-1 p-4">
                <div className="flex items-center justify-center mb-6 h-[47px]">
                    <h1 className="text-[32px] font-lemon text-[#F3A683]">honnori</h1>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <CategorySelector
                        category={category.category}
                        onChange={(cat) => setCategory({ category: cat })}
                    />

                    <button
                        onClick={() => setSheetOpen(true)}
                        className="
                            px-4 py-2.5
                            text-xs font-medium
                            bg-white
                            text-black
                            border border-[#FFE9DC]
                            rounded-full
                            shadow-sm
                            transition
                            hover:bg-gray-50
                            whitespace-nowrap
                        "
                    >
                        絞り込み <span className='ml-2 text-[#F3A683]'>&#x21C4;</span>
                    </button>
                </div>

                {/* Pass both basic category and advanced filters */}
                <NewsList
                    category={category.category}
                    filters={filters}
                />

                <FilterSheet
                    open={sheetOpen}
                    onClose={() => setSheetOpen(false)}
                    onApply={handleFilterApply}
                />
            </main>

            <Footer />
        </div>
    );
}
