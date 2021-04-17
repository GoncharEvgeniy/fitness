import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import RegistrationForm from "./RegistrationForm";
import {registration} from "../../action/SecurityAction";
import NavBar from "../../navbar/Navbar";

const Registration = (props) => {

    async function handleRegistration(values) {
        props.registration(values, props.history);
    }

    return(
        <div>
            <NavBar/>
            <h2>
                Registration
            </h2>
            <div>
                <RegistrationForm onSubmit={handleRegistration} errors={props.errors} />
            </div>
        </div>
    );
};

Registration.propTypes = {
    registration: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        errors: state.security.errors
    };
};

export default connect(mapStateToProps, {registration})(Registration);
