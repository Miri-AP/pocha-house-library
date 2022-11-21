import { LANGUAGES } from "./options"

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
        formSubmit: "Incribirse",
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
    },
    AddBook: {
        title: "Agrega un nuevo Libro",
        ISBNSearch: "Buscar libro por codigo",
        skip: "Llenar Manualmente",
        formSubmit: "Insertar Libro",
        form: {
            isbn: {
                label: "ISBN",
                placeholder: "Codigo de 10 o 13 digitos",
                errorMsg: {
                    patternMismatch: 'El codigo debe ser 10 o 13 digitos',
                    valueMissing: 'Te faltó poner el codigo ISBN del libro'
                }
            },
            title: {
                label: "Titulo del Libro",
                placeholder: "Titulo completo",
                required: true,
                errorMsg: {
                    valueMissing: 'Te faltó poner el titulo del libro'
                }
            },
            author: {
                label: "Autor",
                placeholder: "Nombre(s) Apellido(s)",
                errorMsg: {
                    typeMismatch: 'Por favor proporciona nombre y apellido del autor',
                    valueMissing: 'Te faltó poner el nombre completo del autor'
                },
                required: true
            },
            illustrator: {
                label: "Illustrador",
                placeholder: "Nombre del illustrador",
                errorMsg: {
                    typeMismatch: 'Por favor proporciona nombre y apellido del illustrador',
                    valueMissing: 'Te faltó poner el nombre completo del illustrador'
                },
            },
            language: {
                label: "Lenguaje",
                placeholder: "Lenguaje",
                options: LANGUAGES.spanish,
                errorMsg: {
                    typeMismatch: 'Por favor proporciona nombre y apellido del illustrador',
                    valueMissing: 'Te faltó poner el nombre completo del illustrador'
                },
                required: true
            },
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

// eslint-disable-next-line import/no-anonymous-default-export
export default { SPANISH, ENGLISH }