import React, { useEffect, useRef, FC, HTMLProps } from 'react';
import MDIcon from '../../MDIcon/MDIcon';
import { TextAreaProps } from '../Fields.types';
import styles from '../Fields.module.css';
import { moveLabel } from '../../../Utils/utils';

const TextArea: FC<TextAreaProps & HTMLProps<HTMLTextAreaElement>>= ({
  label = "",
  value = "",
  icon = "",
  disabled = false,
  onChange,
  id,
}) => {
  const textareaRef = useRef(null as HTMLTextAreaElement | null);
  useEffect(() => moveLabel(textareaRef, value, disabled), [value]);

  return (
    <div className={styles['leita-text__field']}>
      <label htmlFor={id}>
        <MDIcon name={icon} className={styles.icon} />
        <span>{label}</span>
        <textarea
          disabled={disabled}
          className={styles['form-content']}
          ref={textareaRef}
          value={value}
          onChange={onChange}
          id={id}
        />
      </label>
    </div>);
};

export default TextArea;
