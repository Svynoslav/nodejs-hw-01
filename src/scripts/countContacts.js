import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts.length;
  } catch (error) {
    console.log('count error:', error);
    return 0;
  }
};

console.log('count success:', await countContacts());
