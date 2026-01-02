import { DatabaseSync } from 'node:sqlite';

export const db = new DatabaseSync('./turismo.db');

db.exec(`
  CREATE TABLE IF NOT EXISTS user (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
  );
`);
