import React, { FC, MouseEvent } from 'react';
import { TabsProps, TabItemProps } from './Tabs.types';
import styles from './Tabs.module.css';

export const TabItem: FC<TabItemProps> = ({
  label = '',
  value = '',
  className = '',
  onClick,
  active = false,
}) => {
  const handleEvent = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.dataset.value = value;
    return onClick(e);
  };

  return (
    <button
      key={value}
      type="button"
      className={`${styles['tab-list-item']} ${className} ${active ? styles.active : ''}`}
      onClick={(e) => handleEvent(e)}
    >
      <p className={styles['tab-label']}>{label}</p>
    </button>);
};

export const Tabs: FC<TabsProps> = ({ children }) => (
  <div className={styles['tabs_container']}>
    { children }
  </div>
);
