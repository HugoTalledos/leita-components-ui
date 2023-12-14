import React, { MouseEventHandler, HTMLProps } from "react";

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  key?: string,
  children?: React.ReactNode,
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined,
  icon?: string,
  trailingIcon?: string,
  className?: string,
  fullWidth?: boolean,
  loading?: boolean,
  disabled?: boolean,
  label?: string,
  type?: "primary" | "danger" | "primary-outline" | "dark-outline" | "dark" | "btn-link" | "btn-link-primary" | "btn-link-dark",
  style?: object,
}
