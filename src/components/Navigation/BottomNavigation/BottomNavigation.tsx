import React, { FC } from 'react';
import { BottomNavigationItemProps, NavigationProps } from '../Navigation.types';
import MDIcon from '../../MDIcon/MDIcon';
import styles from './BottomNavigation.module.css';

export const NavigationItem: FC<BottomNavigationItemProps> = ({
  label = '',
  icon = '',
  active = false,
}) => (
  <li className={`${styles['navigationBottom_container__item']} ${active ? styles.active : ''}`}>
    <MDIcon name={icon} />
    <p>{label}</p>
  </li>
);

export const BottomNavigation: FC<NavigationProps> = ({ children }) => (
  <div className={styles['navigationBottom_container']}>
    <ul className={styles['navigationBottom_container_contenstylest']}>
      { children}
    </ul>
  </div>);
