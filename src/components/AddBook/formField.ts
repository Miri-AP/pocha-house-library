         
export const Form = {
    title: {
        label: "Book Title",
        placeholder: "Ej. Lxs Otrxs Dreamers",
        name: "title",
        required: true,
        errorMsg: {
            valueMissing: 'Please insert the book title'
        }
    },
    author: {
        label: "Author",
        placeholder: "Authors full name",
        name: "author",
        errorMsg: {
            valueMissing: 'Please insert the authors name'
        },
        required: true,
        additionalFields: [
            "illustrador/a", "co-author/a", "contribuidor/a", "introduccion", "editor/a", "foreword"
        ]
    },
}