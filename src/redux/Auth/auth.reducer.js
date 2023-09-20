import { SAVE_USER_TOKEN, SET_USER_ROLE  } from "./auth-types";

const INITIAL_STATE = {
  token: "",
  role:null,
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_USER_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
      case SET_USER_ROLE:
        return {
          ...state,
          role: action.payload,
        };
    default:
      return state;
  }
};
