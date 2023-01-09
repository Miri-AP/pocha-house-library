import { DefaultProps } from "../model/general.interface"

export const EMAIL :DefaultProps = {
    display: "Text",
    type: "email",
    name: "email",
    pattern: "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$",
}

// Author/Full name etc...
export const NAME :DefaultProps = {
    display: "Text",
    type: "text",
    name: "name",
    pattern: "^(\\w+\\s\\w+)+$"
}

export const PHONE :DefaultProps = {
    display: "Text",
    type: "tel",
    name: "phone",
    pattern: '[0-9]{10,14}'
}

export const ISBN :DefaultProps = {
    display: "Text",
    type: "text",
    name: "ISBN",
    pattern: '[0-9]{10,13}'
}