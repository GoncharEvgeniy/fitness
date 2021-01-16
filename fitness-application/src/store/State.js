import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { reducer as reduxFormReducer } from 'redux-form';
import thunk from "redux-thunk";

const middleware = [thunk];

let reducers = combineReducers({
    form: reduxFormReducer,
});

let store = createStore(reducers, compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default store;