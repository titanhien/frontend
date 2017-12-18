import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import Aricle from './component/aricle';
import Book from './component/book';
import BookMp3 from './component/bookMp3';
import Dictionary from './component/dictionary';
import Music from './component/music';
import Pagoda from './component/pagoda';
import registerServiceWorker from '../../registerServiceWorker';

class App extends React.Component {
    render () {
        return (
            <Router>
                <Switch>
                    <Route path='/api/News/document' component={Aricle} />
                    <Route path='/api/Book/document' component={Book} />
                    <Route path='/api/BookMp3/document' component={BookMp3} />
                    <Route path='/api/Dictionary/document' component={Dictionary} />
                    <Route path='/api/Music/document' component={Music} />
                    <Route path='/api/Chua-viet/document' component={Pagoda} />
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();