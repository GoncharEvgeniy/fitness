import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {logout, clearUsersFromDatabase} from "../action/SecurityAction";
import {isAuth} from "../guard/Guard";

const NavBar = (props) => {

    async function handleLogout() {
        props.logout();
        props.clearUsersFromDatabase();
    }

    return (
        <div className="App">
            <h1>
                <nav>
                    {!isAuth() &&
                        <NavLink exact to="/login"> Login </NavLink>}
                    {!isAuth() &&
                        <NavLink exact to="/registration"> Registration </NavLink>}
                    {isAuth() &&
                        <NavLink exact to="/home"> Home </NavLink>}
                    {isAuth() &&
                        <NavLink exact to="/" onClick={() => handleLogout()} > Logout </NavLink>}
                </nav>
            </h1>
        </div>
    );
}

NavBar.propTypes = {
    logout: PropTypes.func.isRequired,
    clearUsersFromDatabase: PropTypes.func.isRequired
}

export default connect(undefined, {logout, clearUsersFromDatabase})(NavBar);