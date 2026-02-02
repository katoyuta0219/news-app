const Database = require('better-sqlite3');
const db = new Database('./data/news.db');

try {
    const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
    console.log('Tables:', JSON.stringify(tables, null, 2));

    tables.forEach(table => {
        const columns = db.prepare(`PRAGMA table_info(${table.name})`).all();
        console.log(`\nRequirements for ${table.name}:`);
        console.log(JSON.stringify(columns, null, 2));

        const count = db.prepare(`SELECT count(*) as count FROM ${table.name}`).get();
        console.log(`Row count: ${count.count}`);

        const rows = db.prepare(`SELECT * FROM ${table.name} LIMIT 3`).all();
        console.log(`Sample data for ${table.name}:`);
        console.log(JSON.stringify(rows, null, 2));
    });
} catch (error) {
    console.error('Error:', error);
}
