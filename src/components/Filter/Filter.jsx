import PropTypes from 'prop-types';
import css from './Filter.module.css';

function Filter({ value, onFilter }) {
  return (
    <label className={css.label}>
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
  onChange: PropTypes.func.isRequired,
};

export default Filter;