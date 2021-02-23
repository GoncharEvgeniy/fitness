import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {logout} from "../action/SecurityAction";

const NavBar = (props) => {

    async function handleLogout() {
        props.logout();
    }

    return (
        <div className="App">
            <h1>
                <nav>
                    <NavLink exact to="/"> Main </NavLink>
                    <NavLink exact to="/login"> Login </NavLink>
                    <NavLink exact to="/registration"> Registration </NavLink>
                    <NavLink exact to="/" onClick={() => handleLogout()} > Logout </NavLink>
                </nav>
            </h1>
        </div>
    );
}

NavBar.propTypes = {
    logout: PropTypes.func.isRequired
}

export default connect(undefined, {logout})(NavBar);