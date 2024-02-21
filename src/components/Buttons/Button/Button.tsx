import React, { FC } from 'react';
import MDIcon from '../../MDIcon/MDIcon';
import { ButtonProps } from './Button.types';
import styles from './Button.module.css';

const Button: FC<ButtonProps> = ({
  key,
  children,
  className,
  disabled = false,
  fullWidth = false,
  icon = "",
  label = "",
  loading = false,
  onClick = undefined,
  style,
  trailingIcon,
  type = "primary",
  ...props
}) => (
  <button
    type="button"
    key={key}
    disabled={disabled}
    className={`${styles.btn} ${styles[`btn-${type}`]} ${fullWidth ? styles['full-width'] : ''} ${className || ''}`}
    style={style}
    onClick={onClick || undefined}
    {...props}
  >
    {
      loading
        ? <MDIcon name="loading" className={styles.rotate} />
        : !trailingIcon && <MDIcon name={icon} />
    }
    {label}
    {children}
    {
      (trailingIcon && !icon)
      && <MDIcon name={trailingIcon} />
    }
  </button>);

export default Button;
