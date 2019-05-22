import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import SignUp from './components/SignUp';
import Landing from './components/Landing';

function App() {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path='/' component={Landing} />
                <Route path='/signin' component={SignUp} />
            </Switch>
        </React.Fragment>
    );
}

export default App;
