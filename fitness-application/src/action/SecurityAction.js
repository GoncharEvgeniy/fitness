import * as axios from "axios";
import {CLEAR_USERS_FROM_DATABASE, LOGIN, LOGOUT, REGISTRATION, SET_USER} from "./ActionType";
import Config from "../Config";
import jwt from "jsonwebtoken";

export const login = (userCred, history) => async dispatch => {
    axios.post(Config.server + Config.loginUrl, userCred).then(
        response => {
            let token = response.headers.authorization.substring(7);
            localStorage.setItem('LoginToken', token);
            const user = jwt.decode(token);
            dispatch({
                type: LOGIN,
                payload: user
            });
            history.push('/home');
        },
        error => {
            if (error) {
                dispatch({
                    type: LOGIN,
                    error: "Bad login or password"
                });
            }
        }
    );
}

export const registration = (newUser, history) => async dispatch => {
    axios.post(Config.server + Config.registrationUrl, newUser).then(
        response => {
            dispatch({
                type: REGISTRATION
            });
            history.push('/login');
        },
        error => {
            if (error.response.status === 403) {
                dispatch({
                    type: REGISTRATION,
                    error: error.response.data
                });
            } else {
                dispatch({
                    type: REGISTRATION,
                    error: error.response.data.error
                });
            }
        }
    );
}

export const logout = () => async dispatch => {
    localStorage.removeItem('LoginToken');
    dispatch({
        type: LOGOUT,
        payload: {}
    });
}

export const setUser = () => async dispatch => {
    let token = localStorage.getItem('LoginToken');
    if(token) {
        let user = jwt.decode(token);
        dispatch({
            type: SET_USER,
            payload: user
        })
    }
}

export const clearUsersFromDatabase = () => async dispatch => {
    dispatch({
        type: CLEAR_USERS_FROM_DATABASE,
        payload: []
    });
}