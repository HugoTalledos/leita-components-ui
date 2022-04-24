import React, { FC } from 'react';
import { MDIconProps } from './MDIcon.types';

const MDIcon: FC<MDIconProps> = ({
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
    onClick={onClick || undefined}
    onKeyDown={onKeyDown || undefined}
  />
);

export default MDIcon;
