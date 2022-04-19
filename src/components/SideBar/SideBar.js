import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MDIcon from '../MDIcon/MDIcon';
import './SideBar.css';

export const SideBarItem = ({ label, icon }) => (
  <li>
    <MDIcon name={icon} />
    <p>{label}</p>
  </li>
);

export const SideBar = ({ children, title }) => {
  const [view, setView] = useState(false);
  return (
    <header>
      <div className="menu-navbar">
        <span
          className="btn-menu"
          onClick={() => setView(!view)}
          onKeyDown={() => setView(!view)}
        >
          <MDIcon name={view ? 'backburger' : 'menu'} /> {title}
        </span>
      </div>
      <ul className={`view-${view}`}>
        {children}
      </ul>
    </header>);
};

SideBarItem.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
};

SideBar.protoType = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.element)]),
  title: PropTypes.string,
};
