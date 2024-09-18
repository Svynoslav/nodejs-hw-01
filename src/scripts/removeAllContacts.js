import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await readContacts();
    await writeContacts([]);
    console.log('remove success');
  } catch (error) {
    console.log('remove error:', error);
  }
};

removeAllContacts().catch((err) => console.log(err));
