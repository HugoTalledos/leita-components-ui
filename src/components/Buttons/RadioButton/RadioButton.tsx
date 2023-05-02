import React, { FC, HTMLProps } from 'react';
import styles from './RadioButton.module.css';

const RadioButton: FC<HTMLProps<HTMLInputElement>> = ({
  label = '',
  id = '',
  name = '',
  value = '',
  checked = false,
  disabled = false,
  onChange = undefined
}) => (<div className={disabled ? styles.disabled : ''}>
  <label htmlFor={id} className={styles.radiobutton__label}>
    <input
      type="radio"
      id={id}
      disabled={disabled}
      name={name}
      checked={checked}
      value={value}
      className={styles['radio-input']}
      onChange={onChange}
    />
    <span>{label}</span>
  </label>
  </div>);

export default RadioButton;
