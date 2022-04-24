import React, { FC } from 'react';
import { TabsProps, TabItemProps } from './Tabs.types';
import './Tabs.css';

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
    className={`tab-list-item ${className} ${active ? 'active' : ''}`}
    onClick={onClick || null}
  >
    <p className="tab-label">{label}</p>
  </button>);

export const Tabs: FC<TabsProps> = ({ children }) => (
  <div className="tabs_container">
    { children }
  </div>
);
