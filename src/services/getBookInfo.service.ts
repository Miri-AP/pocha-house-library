import Axios from 'axios'

import { OpenLibrary, OpenLibraryBookDetails } from '../model/book/openlibrary.interface'
import { OpenLibraryExplicitMock, OpenLibraryMock } from '../mocks/OpenLibrary.mock'

const axios = Axios.create({
  timeout: 30000
})

export const GetBookInfo = async (isbnCode :string ) :Promise<OpenLibrary> => {
  const { data } = { data:  { [`ISBN:${isbnCode}`]: OpenLibraryExplicitMock } }
  console.log()
  return data[`ISBN:${isbnCode}`]
  // await axios.get(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbnCode}&jscmd=details&format=json`)
};

export const GetMoreOpenLibraryInfo = async (isbnCode :string ) :Promise<OpenLibraryBookDetails> => {
  return OpenLibraryMock

  // await axios.get(`https://openlibrary.org/isbn/${isbnCode}.json`)
};

export const GetBookInfoFromGoodReads = (isbnCode :string) => axios.get(
    `https://www.goodreads.com/book/auto_complete?format=json&q=${isbnCode}`
);