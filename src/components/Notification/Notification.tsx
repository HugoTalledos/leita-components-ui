import React, { FC } from 'react';
import { NotificationProps } from './Notification.types';
import MDIcon from '../MDIcon/MDIcon';
import './Notification.css';

const Notification: FC<NotificationProps> = ({
  text = '',
  description = '',
  type = '',
  show = false,
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

export default Notification;
