import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import RegistrationForm from "./RegistrationForm";
import {registration} from "../action/SecurityAction";

const Registration = (props) => {

    async function handleRegistration(values) {
        props.registration(values);
    }

    return(
        <div>
            <h2>
                Registration
            </h2>
            <div>
                <RegistrationForm handleRegistration={handleRegistration} />
            </div>
        </div>
    );
}

Registration.propTypes = {
    registration: PropTypes.func.isRequired
};

export default connect(undefined, {registration})(Registration);
