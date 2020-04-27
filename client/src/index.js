//data layer controol (Redux)
import React from "react";
import ReactDOM from "react-dom";
//import the minified css file to be loaded by the app (used by the application) which is istalled as a npm module
import "materialize-css/dist/css/materialize.min.css";

//Provider is a react componenet which reads changes from the redux store and update all the child component of the app with new state
import { Provider } from "react-redux";
//helpers
import { createStore, applyMiddleware } from "redux";
//import redux thunk for asynchronous action creator
import reduxThunk from "redux-thunk";

import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

//import all the different reducers to put on the createStore
import reducers from "./reducers";

//create an instance of the redux store using createStore helper - 1st arg of this is all the reducers, 2nd arg- starting or initial state of the application(most relevant when used for server side rendering), 3rd arg is the applyMiddleware for using middlewares like redux-thunk
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
