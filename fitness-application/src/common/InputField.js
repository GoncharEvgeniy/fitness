import React from "react";

const InputField = ({type, label, input, className, meta: {touched, error, warning}}) => {
    return (
        <div>
            <label htmlFor="Input">{label}</label>
            <input
                id="Input"
                {...input}
                placeholder={label}
                type={type}
                className={className}
            />
            {touched
                && (error && <span className="text text-danger">{label + " " + error}</span>)
                || (warning && <span className="text text-danger">{warning}</span>)
            }
        </div>
    );
}

export default InputField;