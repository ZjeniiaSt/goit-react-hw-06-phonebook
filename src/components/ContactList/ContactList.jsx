import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/phonebook-actions';
import { getvisibleContacts } from '../../redux/phonebook-selectors';
import { BsTrashFill } from 'react-icons/bs';
import { ContactsRoster, ContactsData, ContactNumber, ContactDelete } from './ContactList.styled';

function ContactList() {
  const contacts = useSelector(getvisibleContacts);
  const dispatch = useDispatch();

  const onDelete = id => dispatch(deleteContact(id));

  return (
    <ContactsRoster>
      {contacts.map(({ id, name, number }) => (
        <ContactsData key={id}>
          <span>
            {name}: <ContactNumber>{number}</ContactNumber>
          </span>
          <ContactDelete type="button" onClick={() => onDelete(id)}>
            <BsTrashFill />
          </ContactDelete>
        </ContactsData>
      ))}
    </ContactsRoster>
  );
}

export default ContactList;
