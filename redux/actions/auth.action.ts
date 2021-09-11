import { Account } from "../../types/Account";
import { LOGIN } from "../types";

const setLoginAction = (payload) => ({
    type: LOGIN,
    payload
})

export const login = ({username, password}: Account) => {
    return dispatch => {
        setTimeout(() => { 
            dispatch(setLoginAction({token: "123456789", user: {username}}))
        }, 3000);
    }
}