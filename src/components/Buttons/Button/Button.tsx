import React, { FC } from 'react';
import MDIcon from '../../MDIcon/MDIcon';
import { ButtonProps } from './Button.types';
import styles from './Button.module.css';

const Button: FC<ButtonProps> = ({
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
}) => (
  <button
    type="button"
    disabled={disabled}
    className={`${styles.btn} ${styles[`btn-${type}`]} ${fullWidth ? styles['full-width'] : ''} ${className || ''}`}
    style={style}
    onClick={onClick || undefined}
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
