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
            }
        default:
            return state;
    }
}

export default SecurityReducer;