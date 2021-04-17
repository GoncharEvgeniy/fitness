import {CLEAR_USERS_FROM_DATABASE, LOGIN, LOGOUT, REGISTRATION, SET_USER} from "../action/ActionType";

const initState = {
    currentUser: {},
    errors: []
};

const SecurityReducer = (state = initState, action) => {
    switch (action.type) {
        case REGISTRATION:
            return {
                ...state,
                errors: action.error
            };
        case LOGIN:
            return {
                ...state,
                currentUser: action.payload,
                errors: action.error
            };
        case LOGOUT:
            return {
                ...state,
            };
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case CLEAR_USERS_FROM_DATABASE:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default SecurityReducer;