import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  const jsonData = JSON.stringify(updatedContacts, null, 2);

  try {
    await fs.writeFile(PATH_DB, jsonData, 'utf8');
    console.log('write success');
  } catch (error) {
    console.log('write error:', error);
  }
};
