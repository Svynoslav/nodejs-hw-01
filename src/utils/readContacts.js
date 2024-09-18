import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log('read error:', error);
    return [];
  }
};

readContacts()
  .then((data) => console.log('prev data:', data))
  .catch((err) => console.log(err));
