import { NextResponse } from 'next/server';
import { db } from '@/lib/db'; // Direct DB access for filtering or update getNews helper

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const category = searchParams.get('category');
        const keyword = searchParams.get('keyword');
        const tags = searchParams.getAll('tags');

        // Basic SQL construction (secure enough for this internal app, but use params bindings)
        let query = 'SELECT * FROM news WHERE 1=1';
        const params: any[] = [];

        // Category Filter (Basic)
        if (category && category !== '全て') {
            // Assuming category in DB might be comma separated or single
            // Simplify: if DB category column contains the requested category
            query += ' AND category LIKE ?';
            params.push(`%${category}%`);
        }

        // Keyword Search (Name or Description)
        if (keyword) {
            query += ' AND (name LIKE ? OR description LIKE ? OR location LIKE ?)';
            params.push(`%${keyword}%`);
            params.push(`%${keyword}%`);
            params.push(`%${keyword}%`);
        }

        // Tags Filter (OR logic for tags? or AND? Usually OR for multiple selection)
        if (tags.length > 0) {
            // (category LIKE %tag1% OR category LIKE %tag2% ...)
            const tagConditions = tags.map(() => 'category LIKE ?').join(' OR ');
            query += ` AND (${tagConditions})`;
            tags.forEach(tag => params.push(`%${tag}%`));
        }

        query += ' ORDER BY createdAt DESC';

        const stmt = db.prepare(query);
        const news = stmt.all(...params);

        return NextResponse.json({ news });
    } catch (error) {
        console.error('Failed to fetch news:', error);
        return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 });
    }
}
