import React from 'react';
import EmptyLayout from '../../../layout/empty';
import AppRoute from '../../../common/appRoute';
import  Login from './login';
import  Register from './register';
import  Lock from './lock';

let Data = {
    Component: {
        Login,
        Register,
        Lock
    },
    Router: {
        Login: '/login',
        Register: '/register',
        Lock: '/lock'
    }
}

let Index = [
    <AppRoute exact layout={EmptyLayout} path={Data.Router.Login} component={Data.Component.Login} />,
    <AppRoute exact layout={EmptyLayout} path={Data.Router.Register} component={Data.Component.Register} />,
    <AppRoute exact layout={EmptyLayout} path={Data.Router.Lock} component={Data.Component.Lock} />
]

export default Index;