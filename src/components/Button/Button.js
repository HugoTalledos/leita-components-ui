import PropTypes from 'prop-types';
import '@mdi/font/css/materialdesignicons.min.css';
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
  type ='primary',
}) => {
 return (
  <button
    type="button"
    disabled={disabled}
    className={`btn btn-${type} ${fullWidth ? 'full-width' : ''}`}
    onClick={(e) => onClick(e)}
  >
    {
      loading 
      ? <span className="mdi mdi-24px mdi-loading rotate" />
      : !trailingIcon
        && <span className={`mdi mdi-24px mdi-${icon} ${className}`} style={style}/>
    }
    {label}
    {children}
    {
      (trailingIcon && !icon)
      && <span className={`mdi mdi-24px mdi-${trailingIcon} ${className}`} style={style}/>
    }
  </button>);
};

Button.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.element)]),
  style: PropTypes.oneOfType(
    [PropTypes.object, PropTypes.arrayOf(PropTypes.element)]),
};


export default Button;