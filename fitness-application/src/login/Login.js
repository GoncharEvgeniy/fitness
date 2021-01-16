import React from "react";
import LoginForm from "./LoginForm";
import {connect} from "react-redux";

function Login() {
    return(
        <div>
            <h2>
                Login
            </h2>
            <div>
                <LoginForm />
            </div>
        </div>
    );
}

export default connect()(Login);