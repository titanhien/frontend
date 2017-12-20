import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Api from './app/api/component/';
import Home from './app/home/component';
import DefaultLayout from './layout/default';
import NotFound from './layout/notFound';
import registerServiceWorker from './registerServiceWorker';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />
)

class App extends React.Component {
    render () {
        return (
            <Router>
                <Switch>
                  <AppRoute exact layout={DefaultLayout} path="/" component={Home} />

                  <AppRoute exact layout={DefaultLayout} path={Api.Router.Aricle} component={Api.Component.Aricle} />
                  <AppRoute exact layout={DefaultLayout} path={Api.Router.Book} component={Api.Component.Book} />
                  <AppRoute exact layout={DefaultLayout} path={Api.Router.BookMp3} component={Api.Component.BookMp3} />
                  <AppRoute exact layout={DefaultLayout} path={Api.Router.Dictionary} component={Api.Component.Dictionary} />
                  <AppRoute exact layout={DefaultLayout} path={Api.Router.Music} component={Api.Component.Music} />
                  <AppRoute exact layout={DefaultLayout} path={Api.Router.Pagoda} component={Api.Component.Pagoda} />

                  <AppRoute exact layout={NotFound} path="*" component={Api.Component.Pagoda} />
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
