import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";
import { LoadingPage } from "./components/Loading/Loading.styles";

const AuthRoute = (props) => {
  const { authUser, type } = props;

  if (authUser === null) return <LoadingPage />;
  if (type === "guest" && authUser.name) return <Redirect to="/home" />;
  else if (type === "private" && !authUser) return <Redirect to="/signup" />;

  return <Route {...props} />;
};

const mapStateToProps = (state) => ({
  auth: state.auth.authUser,
});

export default connect(mapStateToProps)(AuthRoute);
