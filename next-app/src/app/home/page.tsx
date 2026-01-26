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
        <div className="flex flex-col min-h-screen">

            <main className="flex-1 p-4">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold">ニュース</h1>
                </div>

                <div className="flex items-center gap-4 mb-6">
                    <CategorySelector
                        category={formData.category}
                        onChange={(category) => setFormData((prev) => ({ ...prev, category }))}
                    />

                    <button 
                        onClick={() => setSheetOpen(true)}
                        className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                    >
                        絞り込み
                    </button>
                </div>

                <NewsList category={formData.category} />

                <FilterSheet open={sheetOpen} onClose={() => setSheetOpen(false)} />
            </main>

            <Footer />
        </div>
    );
}
