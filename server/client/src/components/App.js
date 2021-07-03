import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import SignupPage from "./SignupPage/SignupPage";
import LoadingPage from "./Loading/LoadingPage";
import AuthRoute from "../AuthRoute";

const Dashboard = () => <h1>Dash</h1>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const { authUser, isLoading } = this.props.auth;

    return (
      <Router>
        {isLoading && <LoadingPage />}
        <Switch>
          <AuthRoute
            authUser={authUser}
            isLoading={isLoading}
            path="/home"
            type="private"
            render={() => <Dashboard />}
          />
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
