import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

let db = null;

export const getDb = async () => {
  if (db === null) {
    db = await open({
      filename: 'db/todos.db',
      driver: sqlite3.Database
    });
  }

  return db;
};
