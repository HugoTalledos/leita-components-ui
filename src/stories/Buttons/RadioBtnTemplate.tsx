import React, { FC, HTMLProps } from 'react';
import { RadioButton, Theme } from "../../components";

const RadioBtnTemplate: FC<HTMLProps<HTMLInputElement>> = ({
    checked = false,
    disabled = false,
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
      <RadioButton 
        label='Radio 1'
        checked={checked}
        disabled={disabled}
        {...props} />
      <RadioButton 
        label='Radio 2'
        checked={checked}
        disabled={disabled}
        {...props} />
      <RadioButton 
        label='Radio 3'
        checked={checked}
        disabled={disabled}
        {...props} />
  </Theme>
);

export default RadioBtnTemplate;
