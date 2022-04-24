import React, { FC, useState } from 'react';
import { SideBarProps, SideNavigationItemProps } from '../Navigation.types';
import MDIcon from '../../MDIcon/MDIcon';
import './SideBar.css';

export const SideBarItem: FC<SideNavigationItemProps> = ({
  label = "",
  icon = "",
  onClick,
  ...props
}) => (
  <li
    role="presentation"
    {...props}
    onClick={(e) => (onClick ? onClick(e) : null)}
  >
    <MDIcon name={icon} />
    <p>{label}</p>
  </li>
);

export const SideBar: FC<SideBarProps> = ({ children, title }) => {
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
