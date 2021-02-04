import React from "react";
import {connect} from "react-redux";
import RegistrationForm from "./RegistrationForm";

const Registration = () => {

    const handleRegistration = (values) => {
        console.log(values);
    }

    return(
        <div>
            <h2>
                Registration
            </h2>
            <div>
                <RegistrationForm handleSubmit={handleRegistration} />
            </div>
        </div>
    );
}

export default connect()(Registration);