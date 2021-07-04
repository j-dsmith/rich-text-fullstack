import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import LoadingComponent from "./components/Loading/LoadingPage";

const ProtectedRoute = ({ redirectPath, auth, component: Component, ...rest }) => {
  const {_id, isLoading} = auth
  
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!_id && isLoading) {
          return <LoadingComponent/>
        } else if(_id){
          return (
            <Component />
          );
        } else {
          return <Redirect to="/login"/>
        }
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(ProtectedRoute);
