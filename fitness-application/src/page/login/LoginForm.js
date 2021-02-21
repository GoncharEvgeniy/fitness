import React from "react";
import {Field, reduxForm} from "redux-form";
import InputField from "../../common/InputField";
import {maxLength16, minLength4, minLength6, required} from "../../common/FieldValidation";

const LoginForm = (props) => {
    const {handleSubmit, errors} = props;
    let error;
    if (errors && "" !== errors) {
        error = <h4><span className="text text-danger">{errors}</span></h4>;
    }
    return (
        <div>
            {error}
            <form className="container col-sm-3" onSubmit={handleSubmit}>
                <div className="form-group">
                    <Field
                        name="username"
                        component={InputField}
                        type="text"
                        label="Username"
                        className="form-control"
                        validate={[required, maxLength16, minLength4]}
                    />
                </div>
                <div className="form-group">
                    <Field
                        name="password"
                        component={InputField}
                        type="password"
                        label="Password"
                        className="form-control"
                        validate={[required, maxLength16, minLength6]}
                    />
                </div>
                <div>
                    <button className="btn btn-success"
                            type="submit"> Login </button>
                </div>
            </form>
        </div>
    );
}

export default reduxForm({form: 'loginForm'})(LoginForm);