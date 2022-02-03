import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/phonebook-selectors';
import { changeFilter } from '../../redux/phonebook-actions';
import { BsSearch } from 'react-icons/bs';
import { FilterInput, FilterLabel } from './Filter.styled';

function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <FilterLabel>
      <BsSearch /> Find contacts by name
      <FilterInput
        type="text"
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
      ></FilterInput>
    </FilterLabel>
  );
}

export default Filter;
