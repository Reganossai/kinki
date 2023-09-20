import { SAVE_USER_ADDRESS } from "./address-types";

const INITIAL_STATE = {
  address: "",
};

export const addressReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_USER_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    default:
      return state;
  }
};
