import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../TextField/TextField.css';
import MDIcon from '../MDIcon/MDIcon';

const Select = ({
  label = '',
  value,
  options,
  disbaled = true,
  icon = '',
  onChange,
  id,
}) => {
  useEffect(() => {
    const input = document.getElementById(id);
    if (disbaled) input.previousElementSibling.classList.add('top');
    if (value) input.previousElementSibling.classList.add('top');

    input.onfocus = () => {
      input.previousElementSibling.classList.add('top');
      input.previousElementSibling.classList.add('focus');
      input.parentNode.classList.add('focus');
    };

    input.onblur = () => {
      if (input.value.trim().length === 0) {
        input.previousElementSibling.classList.remove('top');
      }
      input.previousElementSibling.classList.remove('focus');
      input.parentNode.classList.remove('focus');
    };
  }, []);

  return (
    <div className="leita-select__field">
      <label htmlFor={id}>
        <MDIcon name={icon} className="icon" />
        <span>{label}</span>
        <select
          className="leita-select__field--select"
          value={value}
          onChange={onChange}
          id={id}
          disabled={disbaled}
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="leita-select__field--option"
            >
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>);
};

Select.prototype = {
  label: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.array,
  disbaled: PropTypes.bool,
  icon: PropTypes.string,
  onChange: PropTypes.func,
};

export default Select;
