import { MouseEventHandler } from "react";

export interface TabsProps {
  children: React.ReactNode;
}

export interface TabItemProps {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  active?: boolean;
  picture?: string;
}