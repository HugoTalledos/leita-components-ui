import React, { MouseEventHandler } from 'react';

interface ListItemProps {
  label?: string,
  value?: string,
  className?: string,
  picture?: string,
}

export interface ListProps {
  children?: React.ReactNode,
  loading?: boolean,
}

export interface ChipProps extends ListItemProps {
  onClick?: MouseEventHandler<HTMLButtonElement>,
  active?: boolean,
}

export interface ItemProps extends ListItemProps {
  description?: string,
  trailingIcon?: string,
  onClick?: MouseEventHandler<HTMLDivElement>,
}