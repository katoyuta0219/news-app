'use client';

import { useState } from 'react';
import Footer from '@/components/layout/footer';
import CategorySelector from '@/components/home/category';
import FilterSheet from '@/components/home/FilterSheet';
import NewsCard from '@/components/home/news/NewsCard';
import MapView from '@/components/map/MapView';

export default function HomePage() {
    const [formData, setFormData] = useState({
        category: '全て',
    });

    const [sheetOpen, setSheetOpen] = useState(false);

    return (
        <div>
            <h1>Home</h1>

            <div className="flex items-center">
                <CategorySelector
                    category={formData.category}
                    onChange={(category) => setFormData((prev) => ({ ...prev, category }))}
                />

                <div className="ml-6">
                    <button onClick={() => setSheetOpen(true)}>絞り込み</button>
                </div>
            </div>

            <FilterSheet open={sheetOpen} onClose={() => setSheetOpen(false)} />

            <NewsCard id="1" name="記事タイトル" description="記事の説明文" />


            <Footer />
        </div>
    );
}
