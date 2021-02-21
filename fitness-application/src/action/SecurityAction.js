import * as axios from "axios";
import {LOGIN, REGISTRATION} from "./ActionType";
import Config from "../Config";

export const login = (userCred) => async dispatch => {
    console.log(userCred);
    axios.post(Config.server + Config.loginUrl, userCred).then(
        response => {
            console.log(response);
            let token = response.headers.authorization.substring(7);
            localStorage.setItem('LoginToken', token);
            dispatch({
                type: LOGIN
            });
        },
        error => {
            console.log(error);
            if (error) {
                dispatch({
                    type: LOGIN,
                    error: "Bad login or password"
                });
            }
        }
    );
}

export const registration = (newUser) => async dispatch => {
    axios.post(Config.server + Config.registrationUrl, newUser).then(
        response => {
            console.log(response);
            dispatch({
                type: REGISTRATION
            });
        },
        error => {
            console.log(error.response);
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