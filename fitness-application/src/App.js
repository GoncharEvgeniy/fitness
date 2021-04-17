import React from "react";
import './App.css';
import createHistory from "history/createBrowserHistory";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from "./page/login/Login";
import Registration from "./page/registration/Registration";
import {connect} from "react-redux";
import Home from "./page/home/Home";
import {setUser} from "./action/SecurityAction";
import PropTypes from "prop-types";
import Main from "./page/main/Main";

const history = createHistory();

const App = (props) => {

    return (
        <BrowserRouter history={history} basename={'/fitness'}>
            <div className="App">
                <h1>Fitness</h1>
                <Switch>
                    <Route exact path={'/'} component={Main} />
                    <Route exact path={'/login'} component={Login}/>
                    <Route exact path={'/registration'} component={Registration}/>
                    <Route exact path={'/home'} component={Home}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

App.propTypes = {
    setUser: PropTypes.func.isRequired
};

export default connect(undefined, {setUser})(App);
