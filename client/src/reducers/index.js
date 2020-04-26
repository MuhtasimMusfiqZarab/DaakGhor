// we are exporting the reducers from here
import { combineReducers } from "redux";
import authReducer from "./authReducer";

//the object we are passing in the combine reducer- whatever key we are passing to the object are going to represent the kes in the state of the redux
export default combineReducers({
  // exp: auth piece of state is produced by authReducer
  auth: authReducer,
});
