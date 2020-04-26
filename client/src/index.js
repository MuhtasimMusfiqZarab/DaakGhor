//data layer controol (Redux)
import React from "react";
import ReactDOM from "react-dom";
//Provider is a react componenet which reads changes from the redux store and update all the child component of the app with new state
import { Provider } from "react-redux";
//helpers
import { createStore, applyMiddleware } from "redux";

import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

//create an instance of the redux store using createStore helper - 1st arg of this is all the reducers, 2nd arg- starting or initial state of the application(most relevant when used for server side rendering), 3rd arg is the applyMiddleware for using middlewares like redux-thunk
const store = createStore(() => [], {}, applyMiddleware());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
