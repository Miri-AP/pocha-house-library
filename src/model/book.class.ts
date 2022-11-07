import { format } from "path";
import GoodReads from "./book/goodreads.interface";
import OpenLibrary from "./book/openlibrary.interface";
import PochaLibrary, { BookDetails } from "./book/pochalibrary.interface";

class Book {
    readonly isbn13 :string
    readonly isbn10 :string
    readonly pochaID :string
    // readonly details :BookDetails 

    constructor(private readonly data: PochaLibrary | GoodReads | OpenLibrary, isbn :string, structureType :string = 'manual') {
        this.isbn10 = isbn.length === 10 ? isbn : ""
        this.isbn13 = isbn.length === 13 ? isbn : ""
        this.pochaID = ''
        // this.details = this.cleanDetails(data, structureType)

    }

    // get author() {
    //     switch (structureType) {
    //         case 'goodreads':
    //             return this.data?.author.name                     
    //         default:
    //             this.data.name
    //     }
    //     this.data
    // }

    /* cleanDetails (data: GoodReads | PochaLibrary | OpenLibrary, structureType :string) {
        switch (structureType) {
            case 'goodreads':
                return this.CleanGoodData(data)
            default:
                return data
        }
    } */

    // Clean
    CleanGoodData (data: GoodReads) :BookDetails {
        return {
            imageUrl: data.imageUrl,
            language: '',
            copies: 1,
            pages: data.numPages,
            format: 'Paperback',
            condition: {
                note: '',
                classification: 'New'
            },
            genres: [],
            description: data.description.html,
            publishing: {
                house: '',
                year: 0
            }
        }
    }
    
    BookCodeGenerator(isbn :string, title :string, author :string) {
        const max = new Date().getFullYear() + Math.ceil(Math.random() * 100 + 1);
        const digits = `12348567${max}89034562`
        const titleTrim = title.replace(/ /g,'')
        const authorTrim = author.replace(/ /g,'')
        const ID =  `PH${this.Randomize(2, isbn)}_${this.Randomize(6, `${titleTrim}${authorTrim}`, true)}_OD${this.Randomize(1,digits)}A`
                
        // Recursive - when BookID is repeated
        // if(IsRepeated("BookIDs", ID)) {
        //     return BookCodeGenerator()
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

export default Book;