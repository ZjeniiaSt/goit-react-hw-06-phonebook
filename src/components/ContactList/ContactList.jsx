import PropTypes from 'prop-types';
import { BsTrashFill } from 'react-icons/bs';
import { ContactsRoster, ContactsData, ContactNumber, ContactDelete } from './ContactList.styled';

function ContactList({ contacts, onDelete }) {
  return (
    <ContactsRoster>
      {contacts.map(contact => (
        <ContactsData key={contact.id}>
          <span>
            {contact.name}: <ContactNumber>{contact.number}</ContactNumber>
          </span>
          <ContactDelete type="button" onClick={() => onDelete(contact.id)}>
            <BsTrashFill />
          </ContactDelete>
        </ContactsData>
      ))}
    </ContactsRoster>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
