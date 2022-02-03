import FormContact from '../../components/FormContact';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
import s from './ContactsPage.module.css';

function ContactsPage() {
  return (
    <div className={s.thumb}>
      <h1 className={s.title}>Your personal Phonebook</h1>
      <FormContact />
      <Filter />
      <ContactList />
    </div>
  );
}
export default ContactsPage;
