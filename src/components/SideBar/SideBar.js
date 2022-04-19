import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SideBar.css';

export const SideBarItem = ({ label, icon }) => (
  <li>
    <span className={`mdi mdi-24px mdi-${icon}`} />
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
          <span className={`mdi mdi-24px mdi-${view ? 'backburger' : 'menu'}`} /> {title}
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
