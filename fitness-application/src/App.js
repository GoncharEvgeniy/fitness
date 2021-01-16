import './App.css';
import React from "react";
import NavBar from "./navbar/Navbar";
import {createBrowserHistory} from "history";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from "./login/Login";

const history = createBrowserHistory();

function App() {
    return (
        <BrowserRouter history={history} basename={'/fitness'}>
            <div className="App">
                <h1>Fitness</h1>
                <NavBar/>
                <Switch>
                    <Route exact path={'/login'} component={Login}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
