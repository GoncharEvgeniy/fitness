import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

const NavBar = () => {
    return (
        <div className="App">
            <h1>
                <nav>
                    <NavLink exact to="/"> Main </NavLink>
                    <NavLink exact to="/login"> Login </NavLink>
                    <NavLink exact to="/registration"> Registration </NavLink>
                </nav>
            </h1>
        </div>
    );
}

export default connect()(NavBar);