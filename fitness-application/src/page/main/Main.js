import React from "react";
import {connect} from "react-redux";
import NavBar from "../../navbar/Navbar";

const Main = (props) => {
    return (
        <div>
            <NavBar/>
        </div>
    );
}

export default connect()(Main);