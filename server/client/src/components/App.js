import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import SignupPage from "./SignupPage/SignupPage";
import LoadingPage from "./Loading/LoadingPage";

const Dashboard = () => <h1>Dash</h1>;

const App = ({ fetchUser, auth }) => {
  useEffect(() => {
    fetchUser();
  }, []);

  const { isLoading, authUser } = auth;
  console.log(auth);

  return (
    <Router>
      {isLoading && <LoadingPage />}
      <Switch>
        {!isLoading && authUser.name ? (
          <Route to="/" exact component={Dashboard} />
        ) : (
          <Route to="/api/signup" exact component={SignupPage} />
        )}
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, actions)(App);
