export const required = value =>
    value
        ? undefined
        : "required";

const maxLength = max => value =>
    value && (value.length > max)
        ? `must have ${max} characters or less`
        : undefined;

const minLength = min => value =>
    value && (value.length < min)
        ? `must have ${min} characters or more`
        : undefined;

export const maxLength16 = maxLength(16);

export const minLength4 = minLength(4);

export const minLength6 = minLength(6);
