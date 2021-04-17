import React from "react";
import {isAuth} from "../../guard/Guard";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {setUser} from "../../action/SecurityAction";
import NavBar from "../../navbar/Navbar";

const Home = (props) => {

    if (isAuth()) {
        return (
            <div>
                <NavBar/>
                <h2>
                    Home page
                </h2>
            </div>
        );
    } else {
        props.history.push('/');
        return (
            <div></div>
        );
    }
}

Home.propTypes = {
    setUser: PropTypes.func.isRequired
}

export default connect(undefined, {setUser})(Home);