import { combineReducers } from "redux";
import auth from "./userReducer";
import countries from "./countryReducer";

export default combineReducers({
  auth,
  countries,
});
