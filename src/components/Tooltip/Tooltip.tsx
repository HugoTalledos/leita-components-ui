import React, { FC, useCallback, useRef, useState, useEffect } from 'react';
import styles from './Tooltip.module.css';
import { TooltipProps } from './Tooltip.types';
import { showTooltip, hiddenTooltip, getAlignTooltip } from '../../Utils/utils';

const Tooltip: FC<TooltipProps> = ({
  children,
  align = 'top',
  className = '',
  content = ''
}) => {
  const [position, setPosition] = useState('');
  const tooltipRef = useRef(null as HTMLDivElement | null);

  const getPosition = useCallback(() => setPosition(getAlignTooltip(tooltipRef, align)), [tooltipRef, align]);
  
  useEffect(() => getPosition(), [getPosition]);

  return (
  <div className={`${className} ${styles.tooltip__container}`}>
    <div className={`${styles.tooltip__content} ${styles[position]}`} >
      { content }
    </div>
    <div ref={tooltipRef}
         onMouseEnter={() => showTooltip(tooltipRef, align)}
         onMouseLeave={() => hiddenTooltip(tooltipRef)}>
      { children }
    </div>
  </div>);
};

export default Tooltip;
