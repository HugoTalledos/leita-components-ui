import React, { useEffect, useRef, FC, HTMLProps } from 'react';
import MDIcon from '../../MDIcon/MDIcon';
import { TextFieldProps } from '../Fields.types';
import styles from '../Fields.module.css';

const TextField: FC<TextFieldProps & HTMLProps<HTMLInputElement>> = ({
  label = '',
  value,
  type,
  icon = '',
  disabled = false,
  onChange,
  id,
}) => {
  const textFieldRef = useRef<HTMLInputElement>(null as HTMLInputElement | null);
  useEffect(() => {
    if(!textFieldRef.current) return;
    if(!textFieldRef.current.previousElementSibling) return;
    
    if (disabled) textFieldRef.current.previousElementSibling.classList.add('top');
    if (value) textFieldRef.current.previousElementSibling.classList.add('top');
    
    textFieldRef.current.onfocus = () => {
      if(!textFieldRef.current) return;
      if(!textFieldRef.current.previousElementSibling) return;
      textFieldRef.current.previousElementSibling.classList.add('top');
      textFieldRef.current.previousElementSibling.classList.add('focus');
      textFieldRef.current.classList.add('focus');
    };
    
    textFieldRef.current.onblur = () => {
      if(!textFieldRef.current) return;
      if(!textFieldRef.current.previousElementSibling) return;
      if (textFieldRef.current.value.trim().length === 0) {
        textFieldRef.current.previousElementSibling.classList.remove('top');
      }
      textFieldRef.current.previousElementSibling.classList.remove('focus');
      textFieldRef.current.classList.remove('focus');
    };
  }, []);

  return (
    <div className={styles['leita-text__field']}>
      <label htmlFor={id}>
        <MDIcon name={icon} className={styles.icon} />
        <span>{label}</span>
        <input
          ref={textFieldRef}
          disabled={disabled}
          type={type}
          value={value}
          onChange={onChange}
          id={id}
        />
      </label>
    </div>);
};

export default TextField;
