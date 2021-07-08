import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import GlobalStyle from "../globalStyles";
import SignupPage from "./LandingPages/SignupPage";
import LoadingPage from "./Loading/LoadingPage";
import ProtectedRoute from "../ProtectedRoute";
import Dashboard from "./Dashboard/Dashboard";
import LoginPage from "./LandingPages/LoginPage";
import MyEditor from "./Editor/Editor";

class App extends Component {
  async componentDidMount() {
    await this.props.fetchUser();
    this.props.fetchProjects();
  }

  render() {
    const { auth } = this.props;

    // ! FIX AUTH ROUTE LOGIC
    return (
      <>
        <GlobalStyle />
        <Router>
          {auth.isLoading && <LoadingPage />}
          <Switch>
            <Route
              exact
              path="/"
              component={() => <SignupPage />}
              type="guest"
            />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/login" component={LoginPage} />
            <ProtectedRoute exact path="/home" component={Dashboard} />
            <ProtectedRoute
              exact
              path="/projects/:projectId/notes/:noteId"
              component={MyEditor}
            />
          </Switch>
        </Router>
      </>
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
