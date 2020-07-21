import {
    ADD_ONE,
    SUBTRACT_ONE
} from "../types";

const initialState = {
    counter: 0
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ONE:
            return {
                ...state,
                counter: state.counter + 1
            };
        case SUBTRACT_ONE:
            return {
                ...state,
                counter: state.counter - 1
            };
        default:
            return state;
    }
};

export default counterReducer;