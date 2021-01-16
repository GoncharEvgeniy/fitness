import React from "react";
import {NavLink} from "react-router-dom";

function NavBar() {
    return (
        <div className="App">
            <h2>
                <nav>
                    <NavLink extract to={"/"}>Main</NavLink>
                    <NavLink extract to={"/login"}>Login</NavLink>
                </nav>
            </h2>
        </div>
    );
}

export default NavBar;