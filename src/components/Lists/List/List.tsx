import React, { FC, KeyboardEventHandler } from 'react';
import MDIcon from '../../MDIcon/MDIcon';
import { ListProps, ItemProps } from '../Lists.types';
import './List.css';

const LoadingItem = () => (
  <div className="container-item">
    <div className="container_image shimmer" />
    <div className="item_description">
      <h5 className="item-title loading shimmer"> </h5>
      <p className="item-price loading shimmer" />
    </div>
    <span className="trailingIcon_list loading shimmer" />
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
    className={`container-item ${className}`}
    style={{ cursor: onClick ? 'pointer' : 'default' }}
    onClick={onClick || undefined}
    key={value}
  >
    { picture
      && (
        <div className="container_image">
          <img src={picture} alt={`item_${value}`} />
        </div>)}
    <div className="item_description">
      <h5 className="item-title">{ label }</h5>
      <p className="item-price">{ description }</p>
    </div>
    <MDIcon name={trailingIcon} className="trailingIcon_list" />
  </div>
);

export const List: FC<ListProps> = ({ children, loading }) => (
  <div className="list-container">
    { loading
      ? [1, 2, 3].map(() => <LoadingItem />)
      : children}
  </div>);
