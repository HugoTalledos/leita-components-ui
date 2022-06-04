import { MouseEventHandler } from 'react';

export interface TooltipProps {
  children: React.ReactNode;
  align?: 'top' | 'bottom' | 'left' | 'right' | 'auto';
  className?: string;
  content: string;
};