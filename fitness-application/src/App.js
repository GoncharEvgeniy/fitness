import React from "react";
import './App.css';
import {createBrowserHistory} from "history";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from "./navbar/Navbar";
import Login from "./login/Login";
import Registration from "./registration/Registration";
import {connect} from "react-redux";

const history = createBrowserHistory();

const App = (props) => {
    return (
        <BrowserRouter history={history} basename={'/fitness'}>
            <div className="App">
                <h1>Fitness</h1>
                <NavBar/>
                <Switch>
{/*
                    <Route exact path={'/login'} component={Login}/>
*/}
                    <Route exact path={'/registration'} component={Registration}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default connect()(App);
