import {REGISTRATION} from "../action/ActionType";

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
            }
        default:
            return state;
    }
}

export default SecurityReducer;