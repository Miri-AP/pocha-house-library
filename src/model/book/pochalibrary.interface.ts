export interface PochaLibrary {
    pochaID: string
    isbn10: string
    isbn13: string
    title: string
    author: Authors
    copies: string
    details: BookDetails
}

export interface Condition { // https://www.abebooks.com/books/rarebooks/collecting-guide/understanding-rare-books/guide-book-conditions.shtml
    note?: string
    classification: 'New' | 'As New' | 'Fine' |'Very Good' | 'Good' | 'Fair' | 'Poor' | 'Binding Copy' | 'Reading Copy' 
}

export interface Series {
    name: string
    number: string
    description?: string
}

export interface PublisherInfo {
    house: string
    year: string
}

export interface Authors {
    author: string
    illustrator?: string[]
    coAuthor?: string[],
    contributor?: string[]
    introduction?: string[],
    editor?: string[],
    foreword?: string[]
}

export interface BookDetails {
    imageUrl?: string
    language: string
    pages: string
    format: 'Hardcover' | 'Paperback' | 'Photocopy' | 'Digital' | 'fanzine' | 'Magazine'
    condition: Condition
    genres: string[]
    series?: Series
    description?: string
    publishing: PublisherInfo
}

export default PochaLibrary