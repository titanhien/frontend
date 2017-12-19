import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import Aricle from './aricle';
import Book from './book';
import BookMp3 from './bookMp3';
import Dictionary from './dictionary';
import Music from './music';
import Pagoda from './pagoda';

class index extends React.Component {
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

export default index;