import './App.css';
import Container from './components/Container';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

function App() {
  return (
    <Container title="Phonebook">
      <ContactForm />
      <Filter />
      <ContactList />
    </Container>
  );
}

export default App;
