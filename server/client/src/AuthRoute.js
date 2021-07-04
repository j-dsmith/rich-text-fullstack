import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";
import { LoadingPage } from "./components/Loading/Loading.styles";

// ! FIX AUTH ROUTE LOGIC

const AuthRoute = (props) => {
  const { auth, type } = props;
  console.log(props);

  if (auth === null) return <LoadingPage />;
  if (type === "guest" && auth._id) return <Redirect to="/home" />;
  else if (type === "private" && !auth._id) return <Redirect to="/signup" />;

  return <Route {...props} />;
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(AuthRoute);
