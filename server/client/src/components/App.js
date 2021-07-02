import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import SignupPage from "./SignupPage/SignupPage";

const App = ({ fetchUser }) => {
  useEffect(() => {
    fetchUser();
  }, []);

  return <SignupPage />;
};

export default connect(null, actions)(App);
