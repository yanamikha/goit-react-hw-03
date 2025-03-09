import { useState, useEffect } from 'react'
import './App.css'
import ContactForm from './components/ContactForm/ContactForm.jsx'
import SearchBox from './components/SearchBox/SearchBox.jsx'
import ContactList from './components/ContactList/ContactList.jsx'
import { Guid } from 'js-guid';

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem('contacts');
    return savedContacts && JSON.parse(savedContacts) || [];
  });
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  const [nameParam, setNameParam] = useState('');

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      newContact.id = Guid.newGuid().toString();
      return [...prevContacts, newContact];
    });
  };
  const deleteContact = (id) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== id);
    });
  };
  const contactsData = contacts.filter((contact) =>
    contact.name.toLowerCase().indexOf(nameParam.toLowerCase()) != -1);
  return (
    <div className='panel'>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
      </div>
      <div>
        <SearchBox name={nameParam} onChange={setNameParam} />
        <ContactList contacts={contactsData} deleteContact={deleteContact} />
      </div>
    </div>
  )
}

export default App
