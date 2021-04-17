import store from "../store/State";
import {setUser} from "../action/SecurityAction";

export const isAuth = () => {
    setUser();
    const state = store.getState();
    return state.security.currentUser.username !== undefined;
}