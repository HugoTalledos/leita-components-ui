import React, { useEffect, FC, useRef, HTMLProps } from 'react';
import styles from '../Fields.module.css';
import { SelectProps } from '../Fields.types';
import MDIcon from '../../MDIcon/MDIcon';
import { moveLabel } from '../../../Utils/utils';

const Select: FC<SelectProps & HTMLProps<HTMLSelectElement>> = ({
  label = "",
  value = "",
  options = [],
  icon = "",
  disabled = false,
  onChange,
  id,
}) => {
  const selectRef = useRef(null as HTMLSelectElement | null);
  useEffect(() => moveLabel(selectRef, value, disabled), []);

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
