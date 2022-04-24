import React, { useEffect, FC, useRef } from 'react';
import '../Fields.css';
import { SelectProps } from '../Fields.types';
import MDIcon from '../../MDIcon/MDIcon';

const Select: FC<SelectProps> = ({
  label = "",
  value,
  options = [],
  icon = "",
  disabled = false,
  onChange,
  id,
  ...props
}) => {
  const selectRef = useRef(null as HTMLSelectElement | null);
  useEffect(() => {
    if(!selectRef.current) return;
    if(!selectRef.current.previousElementSibling) return;
    if (disabled) selectRef.current.previousElementSibling.classList.add('top');
    if (value) selectRef.current.previousElementSibling.classList.add('top');

    selectRef.current.onfocus = () => {
      if(!selectRef.current) return;
      if(!selectRef.current.previousElementSibling) return;
      selectRef.current.previousElementSibling.classList.add('top');
      selectRef.current.previousElementSibling.classList.add('focus');
      selectRef.current.classList.add('focus');
    };

    selectRef.current.onblur = () => {
      if(!selectRef.current) return;
      if(!selectRef.current.previousElementSibling) return;
      if (selectRef.current.value.trim().length === 0) {
        selectRef.current.previousElementSibling.classList.remove('top');
      }
      selectRef.current.previousElementSibling.classList.remove('focus');
      selectRef.current.classList.remove('focus');
    };
  }, []);

  return (
    <div className="leita-select__field">
      <label htmlFor={id}>
        <MDIcon name={icon} className="icon" />
        <span>{label}</span>
        <select
          {...props}
          className="leita-select__field--select"
          value={value}
          onChange={onChange}
          id={id}
          ref={selectRef}
          disabled={disabled}
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

export default Select;
