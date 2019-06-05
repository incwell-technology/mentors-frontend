import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Verification from './components/authentications/Verification'
import Authentication from './components/authentications/Authentication';
import Test from './components/Test';
import homePage from './components/homepage';
import SelectUser from './components/authentications/selectuser/SelectUser';
import PopUp from './components/authentications/social/popup/popup';
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
                <Route path='/page' component={homePage} />
                <Route path='/role' component={SelectUser} />
                <Route path='/pop' component={PopUp} />
            </Router>
        </>
    );
}

export default App;