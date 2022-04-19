import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';

export const TabItem = ({
  label = '',
  value = '',
  className = '',
  onClick,
  active = false,
}) => (
  <button
    key={value}
    type="button"
    className={`tab-list-item ${className} ${active ? 'active' : ''}`}
    onClick={(e) => onClick ? onClick({ ...e, value }) : null}
  >
    <p className='tab-label'>{label}</p>
  </button>);

export const Tabs = ({ children }) => (
  <div className='tabs_container'>
    {  children}
  </div>
);

Tabs.protoType = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.element)]),
};

TabItem.protoType = {
  label: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  active: PropTypes.bool,
  picture: PropTypes.string,
}

