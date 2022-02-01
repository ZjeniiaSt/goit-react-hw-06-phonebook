import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import { FilterInput, FilterLabel } from './Filter.styled';

function Filter({ value, onChange }) {
  return (
    <FilterLabel>
      <BsSearch /> Find contacts by name
      <FilterInput type="text" name="name" value={value} onChange={onChange}></FilterInput>
    </FilterLabel>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
