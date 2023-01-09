import { OpenLibraryBookDetails, KeyName } from "./book/openlibrary.interface";
import { GeneralObject } from "./general.interface";

export class PrefilledBookInfo {
    pochaID: string = ""
    copies: string = '1'
    isbn10: string;
    isbn13: string;
    title: string = '';
    author: string = '';
    publishingYear: string;
    publishingHouse: string;
    language: string;
    genres: string[];
    description: string;
    pages: string;

    constructor(
        private data: OpenLibraryBookDetails,
        isbn :string
    ) {
        this.isbn10 = isbn.length === 10 ? isbn : this.getISBN(data.isbn_10, 10)
        this.isbn13 = isbn.length === 13 ? isbn : this.getISBN(data.isbn_13, 13)
        this.getBasicInfo(data)
        this.publishingYear = data?.publish_date || ""
        this.publishingHouse = data.publishers ? data.publishers[0] : ""
        this.language = this.GetLang(data.languages || [])
        this.genres = this.getGenres(data.subjects || [])
        this.description = data.description || ''
        this.pages = data.pagination?.replace(' p. ;', '') || ''
    }

    getBasicInfo(data: OpenLibraryBookDetails,
        callback: (isbn: string) => void = () => {}) {
        if (!(data.hasOwnProperty('title') || data.hasOwnProperty('by_statement'))) {
            callback(this.isbn10 || this.isbn13)
            console.warn(`BOOK NOT FOUND: ${this.isbn13}`)
        }
        this.title = data?.title
        this.author = data?.by_statement || ''
        this.pochaID = this.BookCodeGenerator(this.isbn13 || this.isbn10,
            this.title, this.author)
    }

    getISBN(isbn :string[] = [], len :number) {
        if (len === 13) {
            return isbn[0]
        }

        return isbn[0]
    }

    GetLang(langs :KeyName[]) :string {
        const translate :GeneralObject = {
            '/languages/eng' : "English",
            '/languages/es' : "Spanish"
        }
        const lan :string = langs[0].key
        return translate[lan]
    }

    getGenres (subjects :string[]) :string[] {
        const genres = subjects
        const remove = subjects.indexOf('Homosexuality')
        if (remove >= 0) {
            genres.splice(remove, 1, 'LGBTQIA+', 'Gay')
        }
        return genres
    }

    BookCodeGenerator(isbn :string, title :string, author :string, randomize :boolean = false) {
        const max = new Date().getFullYear() + Math.ceil(Math.random() * 100 + 1);
        const digits = `12348567${max}89034562`
        const titleTrim = title.toUpperCase().replace(/ /g,'')
        const authorTrim = author.toUpperCase().replace(/ /g,'')
        const ID =  `PH${this.Randomize(2, isbn)}_${this.Randomize(6, `${titleTrim}${authorTrim}${titleTrim}`, randomize)}_OD${this.Randomize(1,digits)}A`
                
        // Recursive - when BookID is repeated
        // if(IsRepeated("BookIDs", ID)) {
        //     return BookCodeGenerator(isbn, titleTrim, authorTrim, randomize)
        // }
        
        // Adds Book to PH Library
        return ID
    }
    
    Randomize(length :number = 3, chars :string, mergeChar :boolean = false) :string {
        let result = '';
        const characters = mergeChar ? `ABCDEFGHIJKLM${chars}NOPQRSTUVWXYZ1234567890` : chars;
        const charactersLength = characters.length;
        
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        
        return result;
    }
}

export default PrefilledBookInfo;