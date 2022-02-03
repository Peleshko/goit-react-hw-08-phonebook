import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';

const ContactListItem = ({
  id,
  contactName,
  contactNumber,
  onClickDeleteContact,
}) => {
  return (
    <li className={s.listItem}>
      <span className={s.listItemText}>{contactName}:</span>
      <span className={s.listItemText}>{contactNumber}</span>
      <button
        className={s.button}
        type="button"
        onClick={() => onClickDeleteContact(id)}
      >
        Delete contact
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  contactName: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
  onClickDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
