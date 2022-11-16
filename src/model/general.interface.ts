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

export interface SignUpPayload {
    name: string
    email: string
    phone: string
}