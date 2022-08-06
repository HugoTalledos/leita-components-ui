import React, { useEffect, useRef, FC, HTMLProps } from 'react';
import MDIcon from '../../MDIcon/MDIcon';
import { TextFieldProps } from '../Fields.types';
import styles from '../Fields.module.css';
import { moveLabel } from '../../../Utils/utils';

const TextField: FC<TextFieldProps & HTMLProps<HTMLInputElement>> = ({
  label = '',
  value = '',
  type = 'text',
  icon = '',
  disabled = false,
  onChange = () => ({}),
  id,
}) => {
  const textFieldRef = useRef<HTMLInputElement>(null as HTMLInputElement | null);
  useEffect(() => moveLabel(textFieldRef, value, disabled), [value]);

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
