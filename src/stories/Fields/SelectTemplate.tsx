import React, { FC } from 'react';

import { Select, Theme } from "../../components";
import { SelectProps } from '../../components/Fields/Fields.types';

const SelectTemplate: FC<SelectProps> = ({
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
      <Select 
        disabled={disabled}
        options={[{ label: 'opcion 1', value: '1'} ]}
        {...props} />
  </Theme>
);

export default SelectTemplate;
