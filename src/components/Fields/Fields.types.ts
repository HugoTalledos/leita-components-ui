import { ChangeEventHandler } from "react";

interface FormFieldsProps {
  label?: string,
  value?: string,
  icon?: string,
  disabled?: boolean,
  id?: string,
}

export interface TextFieldProps extends FormFieldsProps {
  type?: string
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined
}

export interface TextAreaProps extends FormFieldsProps {
  onChange?: ChangeEventHandler<HTMLTextAreaElement> | undefined
}

export interface SelectProps extends FormFieldsProps {
  options?: [{ label?: string, value?: string }]
  onChange?: ChangeEventHandler<HTMLSelectElement> | undefined
}