import { MouseEventHandler } from "react";
export interface NotificationProps {
  text: string;
  description?: string;
  type?: 'success' | 'warning' | 'danger';
  icon?: string;
  show?: boolean;
  onClose: MouseEventHandler<HTMLButtonElement>
  maxLengthDescription: number,
}