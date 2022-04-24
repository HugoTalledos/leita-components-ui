import React, { FC } from 'react';
import { BottomNavigationItemProps, NavigationProps } from '../Navigation.types';
import MDIcon from '../../MDIcon/MDIcon';
import './BottomNavigation.css';

export const NavigationItem: FC<BottomNavigationItemProps> = ({
  label = '',
  icon = '',
  active = false,
  ...props
}) => (
  <li {...props} className={`navigationBottom_container__item ${active ? 'active' : ''}`}>
    <MDIcon name={icon} />
    <p>{label}</p>
  </li>
);

export const BottomNavigation: FC<NavigationProps> = ({ children }) => (
  <div className="navigationBottom_container">
    <ul className="navigationBottom_container_content">
      { children}
    </ul>
  </div>);
