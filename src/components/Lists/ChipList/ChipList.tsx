import React, { FC } from 'react';
import { ListProps, ChipProps } from '../Lists.types';
import './ChipList.css';

const ChipListLoading = () => (
  <button type="button" className="chip-list-item">
    <div className="chip-img-container shimmer" />
  </button>);

export const ChipListItem: FC<ChipProps> = ({
  label = '',
  value = '',
  className = '',
  onClick,
  picture,
  active = false,
}) => (
  <button
    key={value}
    type="button"
    id={value}
    className={`chip-list-item ${className} ${active ? 'active' : ''}`}
    onClick={onClick || undefined}
  >
    { picture
      && (
        <div className="chip-img-container">
          <img src={picture} alt={`item_${value}`} />
        </div>)}
    <p className="chip-label">{label}</p>
  </button>);

export const ChipList: FC<ListProps> = ({ children, loading }) => (
  <div className="chips_container">
    { loading
      ? [1, 2, 3].map(() => <ChipListLoading />)
      : children}
  </div>
);
