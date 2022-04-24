import React, { useEffect, useRef, FC } from 'react';
import MDIcon from '../../MDIcon/MDIcon';
import { TextFieldProps } from '../Fields.types';
import '../Fields.css';

const TextField: FC<TextFieldProps> = ({
  label = '',
  value,
  type,
  icon = '',
  disabled = false,
  onChange,
  id,
  ...props
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
    <div className="leita-text__field">
      <label htmlFor={id}>
        <MDIcon name={icon} className="icon" />
        <span>{label}</span>
        <input
          {...props}
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
