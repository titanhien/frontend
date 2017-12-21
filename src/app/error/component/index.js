import React from 'react';
import DefaultLayout from '../../../layout/default';
import AppRoute from '../../../common/appRoute';
import NotFound from './404';

let Data = {
    Component: {
        NotFound
    },
    Router: {
        NotFound: '*',
    }
}

let Index = [
    <AppRoute exact layout={DefaultLayout} path={Data.Router.NotFound} component={Data.Component.NotFound} />,
]

export default Index;