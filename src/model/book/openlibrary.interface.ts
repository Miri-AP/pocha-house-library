export interface OpenLibrary {
    bib_key: string
    info_url: string
    preview: string
    preview_url: string
    thumbnail_url: string
    details: BookDetails
}

export interface BookDetails {
    publishers: string[]
    number_of_pages: number
    title: string
    physical_format: string
    identifiers: Identifiers
    covers: number[]
    isbn_10: number[]
    isbn_13: number[]
    publish_date: string
    key: string
    authors: KeyName[]
    works: KeyName[]
    type: KeyName[]
    subjects: string[]
    first_sentence: TyepValue
    latest_revision: number
    revision: number
    created: TyepValue
    last_modified: TyepValue
}

export interface Identifiers {
  goodreads: string[]
  librarything: string[]
}

export interface KeyName {
    key: string
    name?: string
}

export interface TyepValue {
    type: string
    value: string
}

export default OpenLibrary;
