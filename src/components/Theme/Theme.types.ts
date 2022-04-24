export interface ThemeProps {
  children: React.ReactNode;
  backgroundColor?: string;
  primary ?: string;
  darkPrimary ?: string;
  accent ?: string;
  success ?: string;
  warning ?: string;
  danger ?: string;
  white ?: string;
  black ?: string;
  shadow ?: string;
  fontFamily ?: Array<string>;
}