import * as axios from "axios";
import {REGISTRATION} from "./ActionType";
import Config from "../Config";

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
            dispatch({
                type: REGISTRATION,
                error: error.response.data
            });
        }
    );

}