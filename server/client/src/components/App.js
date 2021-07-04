import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import SignupPage from "./LandingPages/SignupPage";
import LoadingPage from "./Loading/LoadingPage";
import ProtectedRoute from "../ProtectedRoute";
import Dashboard from "../Dashboard/Dashboard";
import LoginPage from "./LandingPages/LoginPage";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const { auth } = this.props;
    console.log(auth._id);

    // ! FIX AUTH ROUTE LOGIC
    return (
      <Router>
        {auth.isLoading && <LoadingPage />}
        <Switch>
          <Route exact path="/" component={() => <SignupPage />} type="guest" />
          <Route exact path="/signup" component={SignupPage}/>
          <Route exact path="/login"  component={LoginPage}/>
          <ProtectedRoute exact path="/home" component={Dashboard} />
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
