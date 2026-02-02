import Database from 'better-sqlite3';
import path from 'path';

// Prevent multiple connections in development
const globalForDb = global as unknown as { db: ReturnType<typeof Database> };

export const db = globalForDb.db || new Database(path.join(process.cwd(), 'data/news.db'), {
    //   verbose: console.log, // Uncomment for debugging
});

if (process.env.NODE_ENV !== 'production') globalForDb.db = db;
