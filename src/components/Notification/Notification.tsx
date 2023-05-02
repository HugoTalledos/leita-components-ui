import React, { FC, useState } from 'react';
import { NotificationProps } from './Notification.types';
import MDIcon from '../MDIcon/MDIcon';
import styles from './Notification.module.css';

const Notification: FC<NotificationProps> = ({
  text = '',
  description = '',
  type = '',
  show = false,
  icon = '',
  onClose = undefined,
  maxLengthDescription
}) => {
  const [view, setView] = useState(false);
  return (<div>
    <div className={`${styles['notification-container']} ${show ? '' : styles['not-show']}`}>
      <div className={styles['notification-content']}>
        <div className={`${styles['notification-container__icon']} ${styles[type]}`}>
          <MDIcon name={icon} />
        </div>
        <div className={`${styles['notification-container__text']} ${styles[`view-${view}`]} ${styles[type]}`}>
          <h5>{text}</h5>
          <p>{description}</p>
        </div>
        <div className={`${styles['notification-container__icons']} ${styles[type]}`}>
          <MDIcon name='close' onClick={onClose} style={{ cursor: 'pointer' }}/>
          {
            maxLengthDescription && description.length >= maxLengthDescription
            && (<MDIcon name={!view ? 'chevron-down' : 'chevron-up'}
              style={{ cursor: 'pointer' }}
              onClick={() => setView(!view)}
              onKeyDown={() => setView(!view)}/>)
          }
        </div>
      </div>
    </div>
  </div>)
  };

export default Notification;
