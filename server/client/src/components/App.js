import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import SignupPage from "./SignupPage/SignupPage";
import LoadingPage from "./Loading/LoadingPage";
import ProtectedRoute from "../ProtectedRoute";
import Dashboard from "../Dashboard/Dashboard";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const { auth } = this.props;
    console.log(auth);

    // ! FIX AUTH ROUTE LOGIC
    return (
      <Router>
        {auth.isLoading && <LoadingPage />}
        <Switch>
          <ProtectedRoute exact path="/home" component={Dashboard} />
          <Route exact path="/" component={SignupPage} type="guest" />
          <Route exact path="/signup" component={SignupPage} type="guest" />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, actions)(App);

// {!isLoading && authUser.name ? (
//   <Route to="/" exact component={Dashboard} />
// ) : (
//   <Route to="/api/signup" exact component={SignupPage} />
