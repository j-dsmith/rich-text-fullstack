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
import MyEditor from "./Quill/MyEditor";
import SidebarNav from "./SidebarNav/SidebarNav";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  componentDidUpdate() {
    if (this.props.auth._id) this.props.fetchProjects();
  }

  render() {
    const { auth } = this.props;
    console.log(auth);
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
          {auth._id && <SidebarNav />}
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
