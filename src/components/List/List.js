import React from 'react';
import PropTypes from 'prop-types';
import './List.css';

const LoadingItem = () => (
  <div className='container-item'>
    <div className='container_image shimmer' />
    <div className='item_description'>
      <h5 className='item-title loading shimmer'> </h5>
      <p className='item-price loading shimmer' />
    </div>
    <span className='trailingIcon_list loading shimmer' />
  </div>
);

export const ListItem = ({
  label = '',
  value = '',
  description = '',
  trailingIcon = '',
  onClick,
  className = '',
  picture
}) => (
  <div
    className={`container-item ${className}`}
    style={{ cursor: onClick ? 'pointer' : 'default' }}
    onClick={(e) => onClick ? onClick({...e, value}) : e.preventDefault() }
    key={value}
  >
    { picture && <div className='container_image'>
        <img src={picture} alt={`item_${value}`} />
      </div> 
    }
    <div className='item_description'>
      <h5 className='item-title'>{ label }</h5>
      <p className='item-price'>{ description }</p>
    </div>
    <span className={`mdi mdi-24px mdi-${trailingIcon} trailingIcon_list`} />
  </div>
);

export const List = ({ children, loading }) => (
  <div className='list-container'>
    { loading
      ? [1, 2, 3].map(() =>
        <LoadingItem loading />
      )
      : children
    }
  </div>);


List.protoType = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.element)]),
  loading: PropTypes.Boolean,
};

ListItem.protoType = {
  label: PropTypes.string,
  value: PropTypes.string,
  description: PropTypes.string,
  trailingIcon: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  picture: PropTypes.string,
}

export default List;
