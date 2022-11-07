export interface GoodReads {
  imageUrl: string
  bookId: string
  workId: string
  bookUrl: string
  from_search: boolean
  from_srp: boolean
  qid: string
  rank: number
  title: string
  bookTitleBare: string
  numPages: number
  avgRating: string
  ratingsCount: number
  author: Author
  kcrPreviewUrl: string | null
  description: Description
}

export interface Author {
    id: number
    name: string
    isGoodreadsAuthor: boolean
    profileUrl: string
    worksListUrl: string

}

export interface Description {
    html: string
    truncated: boolean,
    fullContentUrl: string
}

export default GoodReads;