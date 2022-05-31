import { combineReducers } from "redux";
import { flightReducer } from "./flight";


const rootReducer = combineReducers({
  flight: flightReducer,
});

export default rootReducer;
