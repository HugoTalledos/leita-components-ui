import React, { useEffect, useRef, FC } from 'react';
import MDIcon from '../../MDIcon/MDIcon';
import { TextAreaProps } from '../Fields.types';
import '../Fields.css';

const TextArea: FC<TextAreaProps>= ({
  label = "",
  value,
  icon = "",
  disabled = false,
  onChange,
  id,
  ...props
}) => {
  const textareaRef = useRef(null as HTMLTextAreaElement | null);
  useEffect(() => {
    if(!textareaRef.current) return;
    if(!textareaRef.current.previousElementSibling) return;
    if (disabled) textareaRef.current.previousElementSibling.classList.add('top');
    if (value) textareaRef.current.previousElementSibling.classList.add('top');

    textareaRef.current.onfocus = () => {
      if(!textareaRef.current) return;
    if(!textareaRef.current.previousElementSibling) return;
      textareaRef.current.previousElementSibling.classList.add('top');
      textareaRef.current.previousElementSibling.classList.add('focus');
      textareaRef.current.classList.add('focus');
    };

    textareaRef.current.onblur = () => {
      if(!textareaRef.current) return;
    if(!textareaRef.current.previousElementSibling) return;
      if (textareaRef.current.value.trim().length === 0) {
        textareaRef.current.previousElementSibling.classList.remove('top');
      }
      textareaRef.current.previousElementSibling.classList.remove('focus');
      textareaRef.current.classList.remove('focus');
    };
  }, [id]);

  return (
    <div className="leita-text__field">
      <label htmlFor={id}>
        <MDIcon name={icon} className="icon" />
        <span>{label}</span>
        <textarea
          {...props}
          disabled={disabled}
          className="form-content"
          ref={textareaRef}
          value={value}
          onChange={onChange}
          id={id}
        />
      </label>
    </div>);
};

export default TextArea;
