import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Authentication from './components/Authentications/Authentication';
import Test from './components/Test';


function App() {
    return (
        <>
            <Router>
                <Route exact path='/' component={Authentication} />
                <Route to path='/Test' component={Test} />
            </Router>
        </>
    );
}

export default App;