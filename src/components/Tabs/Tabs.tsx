import React, { FC } from 'react';
import { TabsProps, TabItemProps } from './Tabs.types';
import styles from './Tabs.module.css';

export const TabItem: FC<TabItemProps> = ({
  label = '',
  value = '',
  className = '',
  onClick,
  active = false,
}) => (
  <button
    key={value}
    type="button"
    className={`${styles['tab-list-item']} ${className} ${active ? styles.active : ''}`}
    onClick={onClick || null}
  >
    <p className={styles['tab-label']}>{label}</p>
  </button>);

export const Tabs: FC<TabsProps> = ({ children }) => (
  <div className={styles['tabs_container']}>
    { children }
  </div>
);
