import React, { FC } from 'react';
import MDIcon from '../../MDIcon/MDIcon';
import { ListProps, ItemProps } from '../Lists.types';
import styles from './List.module.css';

const LoadingItem = () => (
  <div className={styles['container-item']}>
    <div className={`${styles['container_image']} ${styles.shimmer}`} />
    <div className={styles['item_description']}>
      <h5 className={`${styles['item-title']} ${styles.loading} ${styles.shimmer}`}> </h5>
      <p className={`${styles['item-price']} ${styles.loading} ${styles.shimmer}`} />
    </div>
    <span className={`${styles['trailingIcon_list']} ${styles.loading} ${styles.shimmer}`} />
  </div>
);

export const ListItem: FC<ItemProps> = ({
  label = '',
  value = '',
  className = '',
  onClick,
  picture,
  description = '',
  trailingIcon = '',
}) => (
  <div
    role="button"
    className={`${styles['container-item']} ${className}`}
    style={{ cursor: onClick ? 'pointer' : 'default' }}
    onClick={onClick || undefined}
    key={value}
  >
    { picture
      && (
        <div className={styles['container_image']}>
          <img src={picture} alt={`item_${value}`} />
        </div>)}
    <div className={styles['item_description']}>
      <h5 className={styles['item-title']}>{ label }</h5>
      <p className={styles['item-price']}>{ description }</p>
    </div>
    <MDIcon name={trailingIcon} className={styles['trailingIcon_list']} />
  </div>
);

export const List: FC<ListProps> = ({ children, loading }) => (
  <div className={styles['list-container']}>
    { loading
      ? [1, 2, 3].map(() => <LoadingItem />)
      : children}
  </div>);
