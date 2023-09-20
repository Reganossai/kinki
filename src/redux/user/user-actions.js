import { SAVE_USER_DETAILS } from "./user-types";

export const saveUserDetails = (user) => {
  return {
    type: SAVE_USER_DETAILS,
    payload: user,
  };
};