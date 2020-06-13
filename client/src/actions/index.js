import axios from 'axios';

//import types
import { FETCH_USER } from './types';

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
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data });
  };

//Action creator to send the stripe token to the backend server(backend server will charge the payment using this token )---------------

//1st arrow returns and async function which will be called with dispatch

export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post('/api/stripe', token);
  console.log(res);
  //same Type because we will fetch the exact user model which was fetched earlier (but it contains the credits inside of it, where previously it was not)
  dispatch({ type: FETCH_USER, payload: res });
};
