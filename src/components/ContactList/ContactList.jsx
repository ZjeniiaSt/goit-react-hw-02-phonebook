import PropTypes from 'prop-types';
import { BsTrashFill } from 'react-icons/bs';

function ContactList({ contacts, onDelete }) {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name} : {contact.number}
          <button type="button" onClick={() => onDelete(contact.id)}>
            <BsTrashFill />
          </button>
        </li>
      ))}
    </ul>
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
