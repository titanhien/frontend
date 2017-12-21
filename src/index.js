import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import Api from './app/api/component/';
import Home from './app/home/component';
import Error from './app/error/component';
import registerServiceWorker from './registerServiceWorker';

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
