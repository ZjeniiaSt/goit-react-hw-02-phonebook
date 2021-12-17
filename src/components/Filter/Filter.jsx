import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';

function Filter({ value, onChange }) {
  return (
    <label>
      Find contacts by name <BsSearch />
      <input type="text" name="name" value={value} onChange={onChange}></input>
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
