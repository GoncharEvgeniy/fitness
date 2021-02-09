import React from 'react';
import {Field, reduxForm} from "redux-form";
import InputField from "../common/InputField";

const RegistrationForm = (props) => {
    const {handleSubmit, errors } = props;
    console.log(errors);
    let error;
    if (errors && "" !== errors) {
        error = <h4><span className="text text-danger">{errors}</span></h4>;
    }
    return (
        <div>
            {error}
            <form className="container col-sm-3" onSubmit={handleSubmit} >
                <div className="form-group">
                    <Field
                        name="username"
                        component={InputField}
                        type="text"
                        label="Username"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <Field
                        name="password"
                        component={InputField}
                        type="password"
                        label="Password"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <Field
                        name="passwordConfirmation"
                        component={InputField}
                        type="password"
                        label="Confirm password"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <Field
                        name="email"
                        component={InputField}
                        type="email"
                        label="Email"
                        className="form-control"
                    />
                </div>
                <div>
                    <button className="btn btn-success"
                            type="submit" > Registration </button>
                </div>
            </form>
        </div>
    );
};

export default reduxForm({form: 'registrationForm'})(RegistrationForm);