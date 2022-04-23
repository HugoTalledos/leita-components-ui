import React from 'react';
import PropTypes from 'prop-types';
import './ChipList.css';

const ChipListLoading = () => (
  <button type="button" className="chip-list-item">
    <div className="chip-img-container shimmer" />
  </button>);

export const ChipListItem = ({
  label = '',
  value = '',
  className = '',
  onClick,
  active = false,
  picture,
}) => (
  <button
    key={value}
    type="button"
    className={`chip-list-item ${className} ${active ? 'active' : ''}`}
    onClick={(e) => (onClick ? onClick({ ...e, value }) : null)}
  >
    { picture
      && (
        <div className="chip-img-container">
          <img src={picture} alt={`item_${value}`} />
        </div>)}
    <p className="chip-label">{label}</p>
  </button>);

export const ChipList = ({ children, loading }) => (
  <div className="chips_container">
    { loading
      ? [1, 2, 3].map(() => <ChipListLoading />)
      : children}
  </div>
);

ChipList.protoType = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.element)]),
  loading: PropTypes.Boolean,
};

ChipListItem.protoType = {
  label: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  active: PropTypes.bool,
  picture: PropTypes.string,
};
