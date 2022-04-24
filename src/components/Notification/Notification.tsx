import React, { FC } from 'react';
import { NotificationProps } from './Notification.types';
import MDIcon from '../MDIcon/MDIcon';
import styles from './Notification.module.css';

const Notification: FC<NotificationProps> = ({
  text = '',
  description = '',
  type = '',
  show = false,
  icon = '',
}) => (
  <div>
    <div className={`${styles['notification-container']} ${show ? '' : styles['not-show']}`}>
      <div className={styles['notification-content']}>
        <div className={`${styles['notification-container__icon']} ${styles[type]}`}>
          <MDIcon name={icon} />
        </div>
        <div className={`${styles['notification-container__text']} ${styles[type]}`}>
          <h5>{text}</h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  </div>);

export default Notification;
