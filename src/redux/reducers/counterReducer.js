import { ADD_ONE, SUBTRACT_ONE } from "../types";

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ONE:
      return {
        ...state,
        count: state.count + 1,
      };
    case SUBTRACT_ONE:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
