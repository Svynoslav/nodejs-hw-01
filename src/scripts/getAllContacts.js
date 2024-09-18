import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    return await readContacts();
  } catch (error) {
    console.log('get all error:', error);
  }
};

console.log('get all success:', await getAllContacts());
