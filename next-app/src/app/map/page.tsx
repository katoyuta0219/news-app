'use client';

import { useState } from 'react';
import MapView from "@/components/map/MapView";
import Footer from "@/components/layout/footer";

export default function MapPage() {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className="flex flex-col h-full overflow-hidden">            
            <main className="flex-1 pb-24 overflow-y-auto">
                {isLoading && <div className="text-center mt-4">読み込み中...</div>}
                <MapView />
            </main>

            <Footer />
        </div>
    );
}