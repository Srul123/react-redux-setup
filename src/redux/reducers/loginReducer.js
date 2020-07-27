import {
    IS_LOGIN
} from "../types";

const initialState = {
    login: false
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_LOGIN:
            return {
                ...state,
                login: true
            };
        default:
            return state;
    }
};

export default loginReducer;