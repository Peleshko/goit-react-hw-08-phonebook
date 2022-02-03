import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as operations from '../../redux/contacts/contacts-operations';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import ContactListItem from '../ContactList/ContactListItem';

const ContactList = () => {
  const items = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => dispatch(operations.fetchContacts()), [dispatch]);

  return (
    <ul>
      {items.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          contactName={name}
          contactNumber={number}
          onClickDeleteContact={() => dispatch(operations.deleteContact(id))}
        />
      ))}
    </ul>
  );
};

export default ContactList;
