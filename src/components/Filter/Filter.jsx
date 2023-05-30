import PropTypes from 'prop-types';
import css from './Filter.module.css';

function Filter({ value, onFilter }) {
  return (
    <label htmlFor="filter" className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        name="filter"
        value={value}
        onChange={onFilter}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onFilter: PropTypes.func.isRequired,
};

export default Filter;