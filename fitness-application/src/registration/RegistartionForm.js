import React from "react";
import {Field, reduxForm} from "redux-form";
import InputField from "../common/InputField";

function RegistrationForm() {
    return (
        <div>
            <form className="container col-sm-3">
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
                    <button className="btn btn-success"> Registration </button>
                </div>
            </form>
        </div>
    );
}

export default reduxForm({form: 'loginForm'})(RegistrationForm);