import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import initialContacts from '../../data/contacts.json';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedcontacts = window.localStorage.getItem('contacts');
    return savedcontacts !== null ? JSON.parse(savedcontacts) : initialContacts;
  });
  const [search, setSearch] = useState('');

  const addContact = newContact => {
    setContacts(currentContacts => {
      return [...currentContacts, newContact];
    });
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = contactId => {
    console.log(contactId);
    setContacts(currentContacts => {
      return currentContacts.filter(contact => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="header">Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
