import { Account } from "../../types/Account";
import { LOGIN } from "../types";

export const setLoginAction = (payload) => ({
    type: LOGIN,
    payload
})

export const login = ({username, password}: Account) => {
    return dispatch => {
        setTimeout(() => { dispatch(setLoginAction({token: "1234", user: {username}}))})
    }
}