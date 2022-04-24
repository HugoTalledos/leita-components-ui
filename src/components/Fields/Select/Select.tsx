import React, { useEffect, FC, useRef, HTMLProps } from 'react';
import styles from '../Fields.module.css';
import { SelectProps } from '../Fields.types';
import MDIcon from '../../MDIcon/MDIcon';

const Select: FC<SelectProps & HTMLProps<HTMLSelectElement>> = ({
  label = "",
  value,
  options = [],
  icon = "",
  disabled = false,
  onChange,
  id,
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
    <div className={styles['leita-select__field']}>
      <label htmlFor={id}>
        <MDIcon name={icon} className={styles.icon} />
        <span>{label}</span>
        <select
          className={styles['leita-select__field--select']}
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
              className={styles['leita-select__field--option']}
            >
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>);
};

export default Select;
