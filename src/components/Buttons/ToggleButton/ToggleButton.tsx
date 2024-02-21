import React, { FC } from 'react';
import MDIcon from '../../MDIcon/MDIcon';
import { ToggleButtonProps } from './ToggleButton.types';
import styles from './ToggleButton.module.css';

export const ToggleButtonItem: FC<ToggleButtonProps> = ({
  icon = "",
  value,
  active = false,
  onClick,
  ...props
}) => (
  <button
    type="button"
    key={value}
    className={`${active ? styles.active : ''}`}
    onClick={onClick || null}
    {...props}
  >
    <MDIcon name={icon} />
  </button>);

export const ToggleButton: FC<ToggleButtonProps> = ({
  children,
  key,
  disabled,
  icon = "",
  label,
  isOpen,
}) => (
  <div key={key}>
    <input
      type="checkbox"
      id={styles.click}
      disabled={disabled}
      onChange={(e) => isOpen(e.target.checked) || null}
    />
    <div className={styles['buttons']}>
      <label htmlFor={styles.click} className={styles['share-btn']}>
        <MDIcon name={icon} />
        <p>{label}</p>
      </label>
      { children }
    </div>
  </div>);
