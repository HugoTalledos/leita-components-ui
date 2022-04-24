import React, { FC } from 'react';
import MDIcon from '../../MDIcon/MDIcon';
import { ButtonProps } from './Button.types';
import './Button.css';

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
    className={`btn btn-${type} ${fullWidth ? 'full-width' : ''}`}
    onClick={onClick || undefined}
    {...props}
  >
    {
      loading
        ? <MDIcon name="loading" className="rotate" />
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
