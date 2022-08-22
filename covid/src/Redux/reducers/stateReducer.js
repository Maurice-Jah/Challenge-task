import { ActionTypes } from "../constants/action-types";

const initialState = {
  states: [],
};

export const stateReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_STATES:
      return { ...state, states: payload };

    default:
      return state;
  }
};

export const selectedStateReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SELECTED_STATE:
      return { ...state, ...payload };

    default:
      return state;
  }
};
