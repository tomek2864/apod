import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import apodReducer from "./apodReducer";

export default combineReducers({
  errors: errorReducer,
  apod: apodReducer
});
