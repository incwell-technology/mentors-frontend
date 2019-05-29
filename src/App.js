import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Authentication from './components/authentications/Authentication';
import Test from './components/Test';
import SelectUser from './components/authentications/selectuser/SelectUser';



function App() {
    return (
        <>
            <Router>
                <Route exact path='/' component={Authentication} />
                <Route path='/home' component={Test} />
                <Route path='/role' component={SelectUser}/>
            </Router>
        </>
    );
}

export default App;
