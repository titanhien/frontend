import Aricle from './aricle';
import Book from './book';
import BookMp3 from './bookMp3';
import Dictionary from './dictionary';
import Music from './music';
import Pagoda from './pagoda';

let index = {
    Component: {
        Aricle,
        Book,
        BookMp3,
        Dictionary,
        Music,
        Pagoda
    },
    Router: {
        Aricle: '/api/News/document',
        Book: '/api/Book/document',
        BookMp3: '/api/BookMp3/document',
        Dictionary: '/api/Dictionary/document',
        Music: '/api/Music/document',
        Pagoda: '/api/Chua-viet/document'
    }
}


export default index;