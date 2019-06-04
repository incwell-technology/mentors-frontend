import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Authentication from './components/Authentications/Authentication';
import Verification from './components/Authentications/Verification'
import Test from './components/Test';

require('dotenv').config({
    path: '../.env'
})

function App() {
    return (
        <>
            <Router basename='/'>
                <Route exact path='/' component={Authentication} />
                <Route path='/home' component={Test} />
                <Route path='/verification' component={Verification} />
            </Router>
        </>
    );
}

export default App;
