import './App.css';
import { useState, useEffect, useReducer } from 'react';
import Container from './components/Container';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import shortid from 'shortid';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return { ...state, contacts: [...state.contacts, action.payload] };

    case 'DELETE_USER': {
      return { ...state, contacts: state.contacts.filter(user => user.id !== action.payload) };
    }

    default:
      return state;
  }
};

const init = {
  contacts: JSON.parse(window.localStorage.getItem('contacts')) ?? [],
};

function App() {
  const [list, dispatch] = useReducer(reducer, init);
  const addContact = (name, number) => {
    if (
      list.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase() || contact.number === number,
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch({ type: 'ADD_USER', payload: { id: shortid(), name: name, number: number } });
  };

  const deleteContact = id => {
    dispatch({ type: 'DELETE_USER', payload: id });
  };

  const [filter, setFilter] = useState('');
  const changeFilter = ({ target }) => {
    setFilter(target.value);
  };

  const getvisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return list.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(list.contacts));
  }, [list.contacts]);

  return (
    <>
      <Container title="Phonebook">
        <ContactForm onSubmit={addContact}></ContactForm>
        <Filter value={filter} onChange={changeFilter}></Filter>
        <ContactList contacts={getvisibleContacts()} onDelete={deleteContact} />
      </Container>
    </>
  );
}
export default App;
