import {
    ADD_ONE,
    SUBTRACT_ONE
} from "../types";

// Add one to counter ==> counter = counter + 1
export const addOne = () => {
    return {
        type: ADD_ONE
    };
};

// Subtract one from counter ==> counter = counter - 1
export const subtractOne = () => {
    return {
        type: SUBTRACT_ONE
    };
};
