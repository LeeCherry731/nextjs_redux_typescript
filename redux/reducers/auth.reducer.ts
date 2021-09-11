import * as types from "../types"


const initialState = {
    token: null,
    user: null,
}

export interface stateTypes {
    token: string | null,
    user: string | null;
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case types.LOGIN:
        return { ...state, token: payload.token, user: payload.user.username };

    default:
        return state
    }
}
