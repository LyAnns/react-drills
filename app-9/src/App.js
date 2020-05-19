import React from 'react';

import './App.css';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";


function Home() {
    return (
        <div>
            <h1>This is the Home page.</h1>
        </div>
    )
}

function Signup() {
    return (
        <div>
            <h1>This is the Signup page.</h1>
        </div>
    )
}

function Details() {
    return (
        <div>
            <h1>This is the Details page.</h1>
        </div>
    )
}

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <ul className="List">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/signup">Signup</Link>
                    </li>
                    <li>
                        <Link to="/details">Details</Link>
                    </li>
                </ul>


                <Switch>
                    <Route path="/details">
                        <Details/>
                    </Route>
                    <Route path="/signup">
                        <Signup/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
