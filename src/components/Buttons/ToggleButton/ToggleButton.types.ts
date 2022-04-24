import React, { MouseEventHandler } from "react";

export interface ToggleButtonProps {
  children?: React.ReactNode,
  disabled?: boolean,
  active?:boolean,
  icon?: string,
  label?: string,
  value?: string,
  onClick: MouseEventHandler<HTMLButtonElement>,
}
