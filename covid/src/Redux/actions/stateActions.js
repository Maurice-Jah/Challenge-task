import { ActionTypes } from "../constants/action-types";

export const setStates = (states) => {
  return {
    type: ActionTypes.SET_STATES,
    payload: states,
  };
};

export const selectedState = (state) => {
  return {
    type: ActionTypes.SELECTED_STATE,
    payload: state,
  };
};
