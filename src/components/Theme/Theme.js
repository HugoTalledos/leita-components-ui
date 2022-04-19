import React from 'react';
import '@mdi/font/css/materialdesignicons.min.css';
import PropTypes from 'prop-types';

export const Theme = ({
  children,
  backgroundColor,
  primary,
  darkPrimary,
  accent,
  success,
  warning,
  danger,
  white,
  black,
  shadow,
  fontFamily,
}) => {
  return (<div>
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
    `}</style>
  </div>)
}

Theme.protoType = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.element)]),
  backgroundColor: PropTypes.string,
  primary: PropTypes.string,
  darkPrimary: PropTypes.string,
  accent: PropTypes.string,
  success: PropTypes.string,
  warning: PropTypes.string,
  danger: PropTypes.string,
  white: PropTypes.string,
  black: PropTypes.string,
  shadow: PropTypes.string,
  fontFamily: PropTypes.arrayOf(PropTypes.string),
};
