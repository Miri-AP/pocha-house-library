export interface PochaLibrary {
    pochaID: string
    isbn10: string
    isbn13: string
    title: string
    author: string
    details: BookDetails
}

export interface Condition { // https://www.abebooks.com/books/rarebooks/collecting-guide/understanding-rare-books/guide-book-conditions.shtml
    note?: string
    classification: 'New' | 'As New' | 'Fine' |'Very Good' | 'Good' | 'Fair' | 'Poor' | 'Binding Copy' | 'Reading Copy' 
}

export interface Series {
    name: string
    number: number
    description: string
}

export interface PublisherInfo {
    house: string
    year: number
}

export interface Authors {
    illustrator: string
    author: number
    coAuthor: string[]
}

export interface BookDetails {
    imageUrl: string
    authors?: string
    language: string
    copies: number
    pages: number
    format: 'Hardcover' | 'Paperback' | 'Photocopy' | 'Digital' | 'fanzine' | 'Magazine'
    condition: Condition
    genres: string[]
    series?: Series
    description: String
    publishing: PublisherInfo
}

export default PochaLibrary