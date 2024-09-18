import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length > 0) {
      contacts.pop();
      await writeContacts(contacts);

      console.log('remove one success, new data:', await readContacts());
    } else {
      console.log('already empty');
    }
  } catch (error) {
    console.log('remove last error:', error);
  }
};

removeLastContact().catch((err) => console.log(err));
