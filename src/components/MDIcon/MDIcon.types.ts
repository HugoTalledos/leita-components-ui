export interface MDIconProps {
  name: string,
  size?: number,
  className?: string,
  onClick?: React.MouseEventHandler<HTMLElement>,
  onKeyDown?: React.KeyboardEventHandler<HTMLElement>,
  style?: object,
}