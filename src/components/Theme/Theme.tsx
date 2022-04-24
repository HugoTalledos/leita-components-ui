import React, { FC } from 'react';
import { ThemeProps } from './Theme.types';

const Theme: FC<ThemeProps> = ({
  children,
  primary = "#2274A5",
  backgroundColor = "#2274A5",
  darkPrimary = "#011627",
  accent = "#eeeeee",
  black = "#171D1C",
  white = "#FFFBFC",
  shadow = "#9b9b9b96",
  success = "#4CAF50",
  warning = "#FFC107",
  danger = "#F44336",
  fontFamily = ['Raleway', 'Segoe UI', 'Helvetica Neue'],
}) => (
  <>
    {children}
    <style>{`
      :root {
        --primary-color: ${primary};
        --primary-dark: ${darkPrimary};
        --light: ${white};
        --dark: ${black};
        --shadow:${shadow};
        --accent: ${accent};
        --success: ${success};
        --warning: ${warning};
        --danger: ${danger};
        --glass-color: rgba( 255, 255, 255, 0.15 );
        --glass-default-notify: #FFFBFCA1;
      }
      * {
        font-family: ${fontFamily.join(', ')}, sans-serif;
      }
      body {
        background-color: ${backgroundColor};
      }
    `}
    </style>
  </>);

export default Theme;
