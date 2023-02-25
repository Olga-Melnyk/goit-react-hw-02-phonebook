import PropTypes from 'prop-types';

export const ContactListItem = ({
  contact: { name, number, id },
  onDeleteContact,
}) => {
  return (
    <li>
      <span>
        {name}: <span>{number}</span>
      </span>
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func,
};
