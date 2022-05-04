import React, { FC, HTMLProps } from 'react';
import styles from './RadioButton.module.css';

const RadioButton: FC<HTMLProps<HTMLInputElement>> = ({
  label = '',
  id = '',
  name = '',
  value = '',
  onChange = undefined
}) => (<div className={styles.radiobutton__container}>
  <label htmlFor={id} className={styles.radiobutton__label}>
    <input
      type="radio"
      id={id}
      name={name}
      value={value}
      className={styles['radio-input']}
      onChange={onChange}
    />
    <span>{label}</span>
  </label>
  </div>);

export default RadioButton;
