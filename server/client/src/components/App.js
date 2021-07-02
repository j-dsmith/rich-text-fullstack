import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

const App = ({ fetchUser }) => {
  useEffect(() => {
    fetchUser();
  }, []);

  return <div>hi</div>;
};

export default connect(null, actions)(App);
