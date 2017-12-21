import React from 'react';
import DefaultLayout from '../../../layout/default';
import AppRoute from '../../../common/appRoute';
import Home from './home';

let Data = {
    Component: {
        Home
    },
    Router: {
        Home: '/'
    }
}

let Index = [
    <AppRoute exact layout={DefaultLayout} path={Data.Router.Home} component={Data.Component.Home} />
]

export default Index;