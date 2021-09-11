import { LOGIN } from "../types"
import {Account} from "../../types/Account"


const initialState = {
    token: null,
    user: null,
}


export default (state = initialState, { type, payload }) => {
    switch (type) {

    case LOGIN:
        return { ...state, token: payload.token, user: payload.user.username };

    default:
        return state
    }
}
