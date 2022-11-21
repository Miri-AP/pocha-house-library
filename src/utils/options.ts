import { Options } from "../model/general.interface"

export const conditions :Options = {
    english: [
        'New' , 'As New', 'Fine', 'Very Good', 'Good', 'Fair', 'Poor', 'Binding Copy', 'Reading Copy'
    ],
    spanish: [
        'Nuevo', 'Como nuevo', 'Buenas Condiciones', 'Muy bueno', 'Bueno/Justo', 'Aceptable', 'Malas Condiciones', 'Copia de Encuadernación', 'Copia de lectura'
    ]
}

export const bookFormat :Options = {
    english: ['Hardcover', 'Paperback', 'Photocopy', 'Digital', 'fanzine', 'Magazine'],
    spanish: ['Pasta Dura', 'Pasta Blanda', 'Fotocopia', 'Digital', 'fanzine', 'Revista']
}

export const genres :Options = {
    english: [
        'Fiction',
        'Fantasy',
        'Migration',
        'Politics',
        'Young Adult',
        'New Adult',
        'Adventure',
        'Romance',
        'Contemporary',
        'Dystopian',
        'Mystery',
        'Horror',
        'Thriller',
        'Historical fiction',
        'Science Fiction',
        'Children',
        'Memoir',
        'Cookbook',
        'Art',
        'Self-help/Motivational',
        'Poetry',
        'Health',
        'History',
        'Travel',
        'Guide/How-to',
        'Families & Relationships',
        'Humor',
        'Identity',
        'Asian/Pacific Islander',
        'LGBTQIA+',
        'Graphic Novel',
        'Comic Book',
        'People of Color',
        'Illustrated',
        'Indigenous',
        'Bilingual'
    ],
    spanish: [
        'Ficción',
        'Fantasía',
        'Migración',
        'Política',
        'Adulto joven',
        'Nuevo adulto',
        'Aventura',
        'Romance',
        'Contemporáneo',
        'Distopía',
        'Misterio',
        'Horror',
        'Suspenso',
        'Ficción histórica',
        'Ciencia ficción',
        'Niños',
        'Memoria',
        'Libro de cocina',
        'Arte',
        'Autoayuda/Motivacional',
        'Poesía',
        'Salud',
        'Historia',
        'Viaje',
        'Guía/Cómo hacer',
        'Familias y Relaciones',
        'Humor',
        'Identidad',
        'Familias y Relaciones',
        'Humor',
        'Identidad',
        'Asiático/Isleño del Pacífico',
        'LGBTQIA+',
        'Novela gráfica',
        'Libro cómico',
        'Gente de color',
        'Ilustrado',
        'Indígena',
        'Bilingüe'
    ]  
}

export const LANGUAGES :Options = {
    english: [
        'Spanish',
        'English',
        'Spanglish',
        'French'
    ],
    spanish: [
        'Español',
        'Inglés',
        'Espanglish',
        'Francés'
    ]
}