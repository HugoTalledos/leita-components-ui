import React, { FC } from 'react';
import { LateralScreenProps  } from './LateralScreen.types';
import styles from './LateralScreen.module.css';

const LateralScreen: FC<LateralScreenProps> =({
  children,
  className = '',
  id,
  direction = 'right',
  cover = 70,
  show = false,
  onClose = undefined,
}) => (
  <div
    key={id}
    style={['down', 'up'].includes(direction) ? { height: `${cover}%`} : { width: `${cover}%`}}
    className={`${styles['lateral_container']} ${styles[direction]} ${!show ? styles[`hidden-lateral-${direction}`] : ''}`}>
    <div className={`${styles['lateral_container--content']} ${className}`}>
      <button type="button" onClick={onClose} className={styles['close']}>
        <span id="left" className={`mdi mdi-24px mdi-arrow-${direction}-drop-circle`} />
      </button>
      { children }
    </div>
  </div>
);

export default LateralScreen;
