import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    let contacts = await readContacts();

    const newContact = createFakeContact();
    const updContacts = [...contacts, newContact];

    await writeContacts(updContacts);
    console.log(
      'single contact generate success, new data:',
      await readContacts(),
    );
  } catch (error) {
    console.log('single contact generate error:', error);
  }
};

addOneContact().catch((err) => console.log(err));
