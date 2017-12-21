import React from 'react';
import DefaultLayout from '../../../layout/default';
import AppRoute from '../../../common/appRoute'
import Aricle from './aricle';
import Book from './book';
import BookMp3 from './bookMp3';
import Dictionary from './dictionary';
import Music from './music';
import Pagoda from './pagoda';

let Data = {
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

let Index = [
    <AppRoute exact layout={DefaultLayout} path={Data.Router.Aricle} component={Data.Component.Aricle} />,
    <AppRoute exact layout={DefaultLayout} path={Data.Router.Book} component={Data.Component.Book} />,
    <AppRoute exact layout={DefaultLayout} path={Data.Router.BookMp3} component={Data.Component.BookMp3} />,
    <AppRoute exact layout={DefaultLayout} path={Data.Router.Dictionary} component={Data.Component.Dictionary} />,
    <AppRoute exact layout={DefaultLayout} path={Data.Router.Music} component={Data.Component.Music} />,
    <AppRoute exact layout={DefaultLayout} path={Data.Router.Pagoda} component={Data.Component.Pagoda} />
]

export default Index;