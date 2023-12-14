import React, { MouseEventHandler } from "react";

export interface ToggleButtonProps {
  key?: string,
  children?: React.ReactNode,
  disabled?: boolean,
  active?:boolean,
  icon?: string,
  label?: string,
  value?: string,
  onClick: MouseEventHandler<HTMLButtonElement>,
}
