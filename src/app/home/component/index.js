import React from 'react';
import DefaultLayout from '../../../layout/default';
import AppRoute from '../../../common/appRoute'
import home from './home';

let Data = {
    Component: {
        home
    },
    Router: {
        home: '/',
    }
}

let Index = [
    <AppRoute exact layout={DefaultLayout} path={Data.Router.home} component={Data.Component.home} />,
]

export default Index;