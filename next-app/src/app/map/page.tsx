'use client';

import { useState } from 'react';
import MapView from "@/components/map/MapView";
import Footer from "@/components/layout/footer";

export default function MapPage() {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className="flex flex-col min-h-screen">            
            <main className="flex-1 pb-20">
                {isLoading && <div className="text-center mt-4">読み込み中...</div>}
                <MapView />
            </main>

            <Footer />
        </div>
    );
}