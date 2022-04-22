import React from 'react';
import PropTypes from 'prop-types';
import MDIcon from '../MDIcon/MDIcon';
import './Notification.css';

const Notification = ({
  text = '',
  description = '',
  type = '',
  show = true,
  icon = '',
}) => (
  <div>
    <div className={`notification-container ${show ? '' : 'not-show'}`}>
      <div className="notification-content">
        <div className={`notification-container__icon ${type}`}>
          <MDIcon name={icon} />
        </div>
        <div className={`notification-container__text ${type}`}>
          <h5>{text}</h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  </div>);

Notification.protoType = {
  text: PropTypes.string,
  type: PropTypes.string,
  description: PropTypes.string,
  show: PropTypes.bool,
  icon: PropTypes.string,
};

export default Notification;
