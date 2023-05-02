import React, { FC } from 'react';
import { TabsProps, TabItemProps } from './Tabs.types';
import styles from './Tabs.module.css';

export const TabItem: FC<TabItemProps> = ({
  label = '',
  className = '',
  onClick = () => ({}),
  active = false,
}) => (
    <button
      type="button"
      className={`${styles['tab-list-item']} ${className} ${active ? styles.active : ''}`}
      onClick={onClick}
    >
      <p className={styles['tab-label']}>{label}</p>
    </button>);

export const Tabs: FC<TabsProps> = ({ children }) => (
  <div className={styles['tabs_container']}>
    { children }
  </div>
);
