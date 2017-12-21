import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import Api from './app/api/component/';
import Home from './app/home/component';
import Article from './app/article/component';
import Book from './app/book/component';
import BookMp3 from './app/bookMp3/component';
import Dictionary from './app/dictionary/component';
import Music from './app/music/component';
import Pagoda from './app/pagoda/component';
import User from './app/user/component';
import Error from './app/error/component';

class App extends React.Component {
    render () {
        return (
            <Router>
                <Switch>
                    {Home.map((item) => {
                        return (
                            item
                        )
                    })}
                    {Api.map((item) => {
                        return (
                            item
                        )
                    })}
                    {Article.map((item) => {
                        return (
                            item
                        )
                    })}
                    {Book.map((item) => {
                        return (
                            item
                        )
                    })}
                    {BookMp3.map((item) => {
                        return (
                            item
                        )
                    })}
                    {Dictionary.map((item) => {
                        return (
                            item
                        )
                    })}
                    {Music.map((item) => {
                        return (
                            item
                        )
                    })}
                    {Pagoda.map((item) => {
                        return (
                            item
                        )
                    })}
                    {User.map((item) => {
                        return (
                            item
                        )
                    })}

                    {Error.map((item) => {
                        return (
                            item
                        )
                    })}
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
