export interface LateralScreenProps {
  children?: React.ReactNode,
  id: string,
  className?: string
  show?: boolean
  cover?: number
  direction?:  "left" | "right" | "up" | "bottom",
  onClose?: (args: any) => void,
}
