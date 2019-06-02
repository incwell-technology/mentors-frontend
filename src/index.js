import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import history from './history';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Router history={history}>
        <App />
    </Router>
    , document.getElementById('root'));

serviceWorker.unregister();
