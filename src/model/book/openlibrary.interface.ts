export interface OpenLibrary {
    bib_key: string
    info_url: string
    preview: string
    preview_url: string
    thumbnail_url: string
    details: OpenLibraryBookDetails
}

export interface OpenLibraryBookDetails {
    publishers: string[]   
    title: string
    local_id?: string[]
    description?: string
    classifications?: Identifiers
    source_records?: string[]
    number_of_pages?: number
    physical_format?: string
    identifiers?: Identifiers
    covers?: number[]
    isbn_10?: string[]
    isbn_13?: string[]
    lccn?: string[]
    ocaid?: string
    languages?: KeyName[]
    pagination?: string
    publish_date?: string
    key?: string
    authors?: KeyName[]
    publish_places?: string[]
    works?: KeyName[]
    type?: KeyName
    subjects?: string[]
    first_sentence?: TyepValue
    latest_revision?: number
    revision?: number
    created?: TyepValue
    last_modified?: TyepValue
    notes?: string
    edition_name?: string
    publish_country?: string
    by_statement?: string
    dewey_decimal_class?: string[]
    lc_classifications?: string[]
}

export interface Identifiers {
  goodreads?: string[]
  librarything?: string[]
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
