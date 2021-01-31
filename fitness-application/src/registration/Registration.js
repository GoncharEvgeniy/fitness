import React from "react";
import {connect} from "react-redux";
import RegistartionForm from "./RegistartionForm";

function Registration() {
    return(
        <div>
            <h2>
                Login
            </h2>
            <div>
                <RegistartionForm />
            </div>
        </div>
    );
}

export default connect()(Registration);