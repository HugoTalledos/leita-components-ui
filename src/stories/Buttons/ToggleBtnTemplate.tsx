import React, { FC } from 'react';
import { ToggleButton, Theme, ToggleButtonItem } from "../../components";
import { ToggleButtonProps } from '../../components/Buttons/ToggleButton/ToggleButton.types';

const ToggleBtnTemplate: FC<ToggleButtonProps> = ({
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
      <ToggleButton {...props}>
        <ToggleButtonItem
          label='Btn 1'
          disabled={false}
          onClick={() => console.log('prueba')}
          isOpen={() => true} />
        <ToggleButtonItem
          label='Btn 1'
          disabled={false}
          onClick={() => console.log('prueba')}
          isOpen={() => true} />
        <ToggleButtonItem
          label='Btn 1'
          disabled={false}
          onClick={() => console.log('prueba')}
          isOpen={() => true} />
      </ToggleButton>
  </Theme>
);

export default ToggleBtnTemplate;
