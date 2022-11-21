import Axios from 'axios'

const axios = Axios.create({
  timeout: 30000
})

export const GetBookInfo = (isbnCode :string ) :Promise<void> => axios.get(
    `https://openlibrary.org/api/books?bibkeys=ISBN:${isbnCode}&jscmd=details&format=json`
);

export const GetMoreOpenLibraryInfo = (isbnCode :string) => axios.get(
  `https://openlibrary.org/isbn/${isbnCode}.json`  
);

export const GetBookInfoFromGoodReads = (isbnCode :string) => axios.get(
    `https://www.goodreads.com/book/auto_complete?format=json&q=${isbnCode}`
);