import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    let contacts = await readContacts();

    const updContacts = [];
    for (let i = 0; i < number; i++) {
      updContacts.push(createFakeContact());
    }

    const newContacts = [...contacts, ...updContacts];

    await writeContacts(newContacts);
    console.log('generate success, new data:', await readContacts());
  } catch (error) {
    console.log('generate error:', error);
  }
};

generateContacts(5).catch((err) => console.log(err));
