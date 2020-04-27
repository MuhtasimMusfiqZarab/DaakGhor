import axios from "axios";

//import types
import { FETCH_USER } from "./types";

//whenever redux thunk sees that a fucntin is returned from the action creator(not an action object) then it will automatically call the functin and pass in the dispatch funcitn as an argument

//whenever this will be called , it will instantly return the function insidee
export const fetchUser = () =>
  //route to the api to see if the usedr is logged in or not (route handler is defined in the express server(authRoute.js))
  //we are using proxy for developemnet to send the request to the sever

  // we will be using redux thunk for async request and manually dispatching an action (redux thunk gives us access to manulayy dispatch an aciton)
  // looks weird, we are returning a function and when the funciton is executed, it would make the  acctual request
  // we normally return an action, but for redux thunk we are returning a funciton
  async (dispatch) => {
    //at any given pint in time, we can call dispatch (agter the network request successfully fetches the data)
    const res = await axios.get("/api/current_user");
    dispatch({ type: FETCH_USER, payload: res.data });
  };
