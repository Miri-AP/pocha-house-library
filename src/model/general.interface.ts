import { InputHTMLAttributes } from 'react';

export interface DefaultProps {
    display: string
    id: string
    type: string
    name: string
    pattern: string
}

export interface FieldProps extends DefaultProps {
    label: string
    placeholder: string
    required: boolean
}

export type GeneralObject = {
  [key: string]: string;
};

type excludedProps = 'className' | 'onBlur' | 'onFocus' | 'onInput'
export interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, excludedProps> {
  initialValue?: string
  label: string
  props: FieldProps
  additionalFields?: string[]
  errorMsg?: {
    typeMismatch: string
    valueMissing: string
  }
}

export interface Options {
    english: string[]
    spanish: string[]
}

export interface SignUpPayload {
    name: string
    email: string
    phone: string
}