'use client';

import Footer from "@/components/layout/footer";
import { useParams } from "next/navigation";

export default function ArticleDetailPage() {
    const params = useParams();
    const id = params.id;
    return (
        <div style={{ padding: 24 }}>
            <h1>記事詳細ページ</h1>
            <p>Article ID: {id}</p>
            <Footer />
        </div>
    );
}
