import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import registerServiceWorker from '../../registerServiceWorker';
import API from './component/'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();