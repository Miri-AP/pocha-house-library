import Axios from 'axios'

import { OpenLibrary } from '../model/book/openlibrary.interface'
import { OpenLibraryExplicitMock, OpenLibraryMock } from '../mocks/OpenLibrary.mock'
import PrefilledBookInfo from '../model/PrefilledBookInfo.class'

const axios = Axios.create({
  timeout: 30000
})

export const GetBookInfo = async (isbnCode :string ) :Promise<OpenLibrary> => {
  const { data } = { data:  { [`ISBN:${isbnCode}`]: OpenLibraryExplicitMock } }
  return data[`ISBN:${isbnCode}`]
  // await axios.get(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbnCode}&jscmd=details&format=json`)
};

export const GetMoreOpenLibraryInfo = async (isbnCode :string ) :Promise<PrefilledBookInfo> => {
  return new PrefilledBookInfo(OpenLibraryMock, isbnCode)

  // await axios.get(`https://openlibrary.org/isbn/${isbnCode}.json`)
};

export const GetBookInfoFromGoodReads = (isbnCode :string) => axios.get(
    `https://www.goodreads.com/book/auto_complete?format=json&q=${isbnCode}`
);