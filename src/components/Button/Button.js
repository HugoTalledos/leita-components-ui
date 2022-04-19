import React from 'react';
import PropTypes from 'prop-types';
import MDIcon from '../MDIcon/MDIcon';
import './Button.css';

const Button = ({
  children,
  className = '',
  disabled = false,
  fullWidth = false,
  icon,
  label,
  loading,
  onClick,
  style,
  trailingIcon,
  type = 'primary',
}) => (
  <button
    type="button"
    disabled={disabled}
    className={`btn btn-${type} ${fullWidth ? 'full-width' : ''}`}
    onClick={(e) => onClick(e)}
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

Button.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.element)]),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.element)]),
};

export default Button;
