import { SAVE_USER_DETAILS } from "./user-types";

const INITIAL_STATE = {
  user: "",
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_USER_DETAILS:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
