import React, { FC } from 'react';
import MDIcon from '../../MDIcon/MDIcon';
import { ToggleButtonProps } from './ToggleButton.types';
import styles from './ToggleButton.module.css';

export const ToggleButtonItem: FC<ToggleButtonProps> = ({
  icon = "",
  value,
  active = false,
  onClick,
}) => (
  <button
    type="button"
    key={value}
    className={`${active ? styles.active : ''}`}
    onClick={onClick || null}
  >
    <MDIcon name={icon} />
  </button>);

export const ToggleButton: FC<ToggleButtonProps> = ({
  children,
  disabled,
  icon = "",
  label,
}) => (
  <>
    <input type="checkbox" id={styles.click} disabled={disabled} />
    <div className={styles['buttons']}>
      <label htmlFor={styles.click} className={styles['share-btn']}>
        <MDIcon name={icon} />
        <p>{label}</p>
      </label>
      { children }
    </div>
  </>);
