import { SAVE_USER_TOKEN } from "./auth-types";
import { SET_USER_ROLE } from "./auth-types";

export const saveAuthToken = (token) => {
  return {
    type: SAVE_USER_TOKEN,
    payload: token,
  };
};

export const setUserRole = (role) => ({
  type: SET_USER_ROLE,
  payload: role,
});