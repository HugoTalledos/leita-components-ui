import React, { FC } from 'react';
import { ButtonProps } from '../../components/Buttons/Button/Button.types';
import { Button, Theme } from "../../components";

const ButtonTemplate: FC<ButtonProps> = ({
    disabled = false,
    fullWidth = false,
    loading = false,
    type = "primary",
    ...props
  }) => (
  <Theme
    primary="#2274A5"
    backgroundColor="#fbfbfb"
    darkPrimary="#011627"
    accent="#eeeeee"
    black="#171D1C"
    white="#FFFBFC"
    shadow="#9b9b9b96"
    success="#4CAF50"
    warning="#FFC107"
    danger="#F44336">
      <Button 
        disabled={disabled}
        fullWidth={fullWidth}
        loading={loading}
        type={type}
        {...props} />
  </Theme>
);

export default ButtonTemplate;
