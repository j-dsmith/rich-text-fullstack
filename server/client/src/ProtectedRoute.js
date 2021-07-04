import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ auth, component: Component, ...rest }) => {
  console.log(auth.isAuthUser);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth.isAuthUser) {
          console.log(auth.isAuthUser);
          return <Component />;
        } else {
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />;
        }
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(ProtectedRoute);
