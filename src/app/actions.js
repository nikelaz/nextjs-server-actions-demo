'use server';

import { getDb } from './db';
import { revalidatePath } from 'next/cache';

export const create = async (oldState, formData) => {
  const db = await getDb();
  
  try {
    await db.run(
      'INSERT INTO todos (title) VALUES (?)',
      formData.get('title')
    );
  } catch (error) {
    return { message: error.message };
  }

  revalidatePath('/');

  return { message: 'Item created successfully.' };
};

export const getAll = async () => {
  const db = await getDb();

  const rows = await db.all('SELECT * FROM todos');

  return rows;
};

export const remove = async (title) => {
  const db = await getDb();

  await db.run('DELETE FROM todos WHERE title=?', title);

  revalidatePath('/');
}