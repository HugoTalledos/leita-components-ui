import React, { FC, useEffect, useRef } from 'react';
import styles from './Tooltip.module.css';
import { TooltipProps } from './Tooltip.types';
import { showTooltip } from '../../Utils/utils';

const Tooltip: FC<TooltipProps> = ({
  children,
  align = 'top',
  className = '',
  content = ''
}) => {
  const tooltipRef = useRef(null as HTMLDivElement | null);
  useEffect(() => showTooltip(tooltipRef, align), [tooltipRef]);

  return (
  <div className={`${className} ${styles.tooltip__container}`}
       onMouseEnter={() => showTooltip(tooltipRef, align)} ref={tooltipRef}
       onFocus={() => showTooltip(tooltipRef, align)}>
    <div className={`${styles.tooltip__content}`} >
      { content }
    </div>
    { children }
  </div>);
};

export default Tooltip;
