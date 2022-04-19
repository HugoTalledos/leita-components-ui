import React from 'react';
import PropTypes from 'prop-types';

const MDIcon = ({
  size = 24,
  name,
  className = '',
  onClick,
  onKeyDown,
  style = {},
}) => (
  <span
    className={`mdi mdi-${size}px mdi-${name} ${className}`}
    style={style}
    onClick={onClick || null}
    onKeyDown={onKeyDown || null}
  />
);

MDIcon.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string,
  name: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.element)]),
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
};

export default MDIcon;
