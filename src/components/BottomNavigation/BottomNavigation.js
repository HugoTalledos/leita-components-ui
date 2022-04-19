import React from 'react';
import PropTypes from 'prop-types';
import './BottomNavigation.css';

export const NavigationItem = ({
  label = '',
  icon = '',
  active,
}) => (
  <li className={`navigationBottom_container__item ${active ? 'active' : ''}`}>
    <span className={`mdi mdi-24px mdi-${icon}`} />
    <p>{label}</p>
  </li>
);

export const BottomNavigation = ({ children }) => (
  <div className="navigationBottom_container">
    <ul className="navigationBottom_container_content">
      { children}
    </ul>
  </div>);

BottomNavigation.protoType = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.element)]),
};

NavigationItem.protoType = {
  label: PropTypes.string,
  icon: PropTypes.string,
  active: PropTypes.bool,
};
