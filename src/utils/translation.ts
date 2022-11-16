export const SPANISH :any = {
    Header: {
        pages: {
            borrow: "Prestar",
            return: "Regresar",
            donate: "Donar"
        }
    },
    Search: {
        placeholder: "Buscar..."
    },
    SignUp: {
        title: "Consigue tu tarjeta de la biblioteca",
        description: "Obten tu tajeta y saca libros de nuestra biblioteca comunitaria.",
        form: {
            name: {
                label: "Nombre Completo",
                placeholder: "Nombre(s) Apellido(s)",
                required: true,
                errorMsg: {
                    patternMismatch: 'Por favor proporciona nombre y apellido',
                    valueMissing: 'Te faltó poner tu nombre completo'
                }
            },
            email: {
                label: "Correo Electrónico",
                placeholder: "nombre@correo.com",
                required: true,
                 errorMsg: {
                    typeMismatch: 'Usa el formato de email correcto ejemplo@hola.com',
                    patternMismatch: 'Usa el formato de email correcto ejemplo@hola.com',
                    valueMissing: 'Te faltó poner tu email'
                }
            },
             phone: {
                label: "Teléfono",
                placeholder: "1234567890",
                required: true,
                errorMsg: {
                    typeMismatch: 'El teléfono no es válido',
                    patternMismatch: 'El teléfono no es válido',
                    valueMissing: 'Te faltó poner tu número teléfono'
                }
            }
        }
    }
}

export const ENGLISH :any = {
    Header: {
        pages: {
            borrow: "Borrow",
            return: "Return",
            donate: "Donate"
        }
    },
    Search: {
        placeholder: "Search..."
    },
    SignUp: {
        title: "Get your Library Card!",
        description: "Obten tu tajeta y saca libros de nuestra biblioteca comunitaria.",
        form: {
            name: {
                label: "Name",
                placeholder: "Full name",
                errorMsg: {
                    typeMismatch: 'Por favor proporciona nombre y apellido',
                    valueMissing: 'Te faltó poner tu nombre completo'
                },
                required: true
            },
            email: {
                label: "Email",
                placeholder: "name@mail.com",
                 errorMsg: {
                    typeMismatch: 'Usa el formato de email correcto ejemplo@hola.com',
                    valueMissing: 'Te faltó poner tu email'
                },
                required: true
            },
             phone: {
                label: "Phone Number",
                placeholder: "1234567890",
                errorMsg: {
                    typeMismatch: 'El teléfono no es válido',
                    valueMissing: 'Te faltó poner tu número teléfono'
                },
                required: true
            }
        }
    }
}

export default { SPANISH, ENGLISH }