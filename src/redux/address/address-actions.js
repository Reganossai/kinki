import { SAVE_USER_ADDRESS } from "./address-types";

export const saveUserAddress = (address) => {
  return {
    type: SAVE_USER_ADDRESS,
    payload: address,
  };
};