import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import Api from './app/api/component/';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Api />, document.getElementById('root'));
registerServiceWorker();
