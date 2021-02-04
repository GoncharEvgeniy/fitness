import React from "react";

const InputField = ({type, label, input, className}) => {
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
        </div>
    );
}

export default InputField;