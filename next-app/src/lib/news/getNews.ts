import { db } from '@/lib/db';

export interface NewsItem {
    id: number;
    name: string;
    location: string;
    description: string;
    category: string;
    imageUrl: string;
    latitude?: number;
    longitude?: number;
    createdAt?: string;
}

export function getNewsById(id: string): NewsItem | null {
    const stmt = db.prepare('SELECT * FROM news WHERE id = ?');
    const news = stmt.get(id) as NewsItem | undefined;
    return news || null;
}

export function getAllNews(): NewsItem[] {
    const stmt = db.prepare('SELECT * FROM news ORDER BY createdAt DESC');
    return stmt.all() as NewsItem[];
}
