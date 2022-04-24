import React, { FC } from 'react';
import MDIcon from '../../MDIcon/MDIcon';
import { ToggleButtonProps } from './ToggleButton.types';
import './ToggleButton.css';

export const ToggleButtonItem: FC<ToggleButtonProps> = ({
  icon = "",
  value,
  active = false,
  onClick,
}) => (
  <button
    type="button"
    key={value}
    className={`ToggleButtonItem ${active ? 'active' : ''}`}
    onClick={() => (onClick || null)}
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
    <input type="checkbox" id="click" disabled={disabled} />
    <div className="buttons">
      <label htmlFor="click" className="share-btn">
        <MDIcon name={icon} />
        <p>{label}</p>
      </label>
      { children }
    </div>
  </>);
