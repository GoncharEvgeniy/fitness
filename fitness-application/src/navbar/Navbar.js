import React from "react";
import {NavLink} from "react-router-dom";

function NavBar() {
    return (
        <div className="App">
            <h1>
                <nav>
                    <NavLink extract to="/"> Main </NavLink>
                    <NavLink extract to="/login"> Login </NavLink>
                    <NavLink extract to="/registration"> Registration </NavLink>
                </nav>
            </h1>
        </div>
    );
}

export default NavBar;