import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";

const AuthRoute = (props) => {
  const { isAuthUser, type } = props;

  if (type === "guest" && isAuthUser) return <Redirect to="/home" />;
  else if (type === "private" && !isAuthUser) return <Redirect to="/signup" />;

  return <Route {...props} />;
};

const mapStateToProps = (state) => ({
  isAuthUser: state.user.isAuthUser,
});

export default connect(mapStateToProps)(AuthRoute);
