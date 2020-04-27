import React, { Component } from "react";
//browser router is the brain of the react router
import { BrowserRouter, Route } from "react-router-dom";
//connect helper
import { connect } from "react-redux";
//import actions
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";

const Dashborad = () => {
  return <h2>Dashborad</h2>;
};
const SurveyNew = () => {
  return <h2>SurveyNew</h2>;
};

class App extends Component {
  state = {};

  //to knwo it the user is signed in or not
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    //BrowserRouter can have only one child
    return (
      <div className="container">
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={Landing} />
          <Route path="/surveys" exact component={Dashborad} />
          <Route path="/surveys/new" component={SurveyNew} />
        </BrowserRouter>
      </div>
    );
  }
}

//1st arg is mapStateToProps,2nd is all the action Creators, once we pass in all the different actions then we can get them as props
export default connect(null, actions)(App);
