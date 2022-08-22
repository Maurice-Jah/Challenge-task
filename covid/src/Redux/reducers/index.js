import { combineReducers } from "redux";
import { stateReducer, selectedStateReducer } from "./stateReducer";

const reducers = combineReducers({
  allStates: stateReducer,
  state: selectedStateReducer,
});

export default reducers;
