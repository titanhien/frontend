import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import registerServiceWorker from '../../registerServiceWorker';
import Api from './component/'

class App extends React.Component {
    render () {
        return (
            <Router>
                <Switch>
                    <Route path={Api.Router.Aricle} component={Api.Component.Aricle} />
                    <Route path={Api.Router.Book} component={Api.Component.Book} />
                    <Route path={Api.Router.BookMp3} component={Api.Component.BookMp3} />
                    <Route path={Api.Router.Dictionary} component={Api.Component.Dictionary} />
                    <Route path={Api.Router.Music} component={Api.Component.Music} />
                    <Route path={Api.Router.Pagoda} component={Api.Component.Pagoda} />
                </Switch>
            </Router>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();