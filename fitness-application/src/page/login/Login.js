import React from "react";
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../../action/SecurityAction";
import PropsTypes from "prop-types";

const Login = (props) => {

    async function handleLogin(value) {
        props.login(value);
    }

    return(
        <div>
            <h2>
                Login
            </h2>
            <div>
                <LoginForm onSubmit = {handleLogin} errors={props.errors}/>
            </div>
        </div>
    );
}

Login.propsTypes = {
    login: PropsTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        errors: state.security.errors
    };
};

export default connect(mapStateToProps, {login})(Login);