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
  ...props
}) => (
  <button
    type="button"
    disabled={disabled}
    className={`${styles.btn} ${styles[`btn-${type}`]} ${fullWidth ? styles['full-width'] : ''}`}
    onClick={onClick || undefined}
    {...props}
  >
    {
      loading
        ? <MDIcon name="loading" className={styles.rotate} />
        : !trailingIcon && <MDIcon name={icon} className={className} style={style} />
    }
    {label}
    {children}
    {
      (trailingIcon && !icon)
      && <MDIcon name={trailingIcon} className={className} style={style} />
    }
  </button>);

export default Button;
