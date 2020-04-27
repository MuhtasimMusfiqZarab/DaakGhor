import { FETCH_USER } from "../actions/types";

//create the reducer and export it
// null means that we dont know yet the value as the request is processing
export default function (state = null, action) {
  console.log(action);
  switch (action.type) {
    //fetch user returns null, false or the user model
    case FETCH_USER:
      console.log("This ran");
      //change the auth in the state
      // here false means that we are not signed in which is ''(is "" then we will return false)
      return action.payload || false;
    default:
      // no need to change anything
      return state;
  }
}
