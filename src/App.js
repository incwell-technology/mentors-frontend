import React from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom'
import './App.css'

import Authentication from './components/Authentications/Authentication';
import Home from './components/Home'


function App() {
    return (
        <>
            <Router>
                <Route exact path='/' component={Authentication} />
                <Route path='/home' component={Home} />
            </Router>
        </>
    );
}

export default App;
