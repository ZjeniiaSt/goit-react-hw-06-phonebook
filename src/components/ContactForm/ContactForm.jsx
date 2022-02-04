import { useState } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { Form, FormInput, FormLabel, AddButton } from './ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/phonebook-actions';
import { getContacts } from '../../redux/phonebook-selectors';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase() || contact.number === number,
    )
      ? alert(`${name} is alredy in contacts`)
      : dispatch(addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel>
        <BsPersonCircle /> Name
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={e => setName(e.target.value)}
          value={name}
        />
      </FormLabel>
      <FormLabel>
        <BsFillTelephoneFill /> Number
        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
      </FormLabel>
      <AddButton type="submit">Add contact</AddButton>
    </Form>
  );
}

export default ContactForm;
