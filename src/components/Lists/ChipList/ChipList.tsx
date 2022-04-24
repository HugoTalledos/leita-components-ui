import React, { FC } from 'react';
import { ListProps, ChipProps } from '../Lists.types';
import styles from './ChipList.module.css';

const ChipListLoading = () => (
  <button type="button" className={styles['chip-list-item']}>
    <div className={`${styles['chip-img-container']} ${styles.shimmer}`} />
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
    className={`${styles['chip-list-item']} ${className} ${active ? styles.active : ''}`}
    onClick={onClick || undefined}
  >
    { picture
      && (
        <div className={styles['chip-img-container']}>
          <img src={picture} alt={`item_${value}`} />
        </div>)}
    <p className={styles['chip-label']}>{label}</p>
  </button>);

export const ChipList: FC<ListProps> = ({ children, loading }) => (
  <div className={styles['chips_container']}>
    { loading
      ? [1, 2, 3].map(() => <ChipListLoading />)
      : children}
  </div>
);
