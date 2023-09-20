import { SAVE_USER_PASSWORD } from "./password-types";

export const saveUserPassword = (password) => {
  return {
    type: SAVE_USER_PASSWORD,
    payload: password,
  };
};