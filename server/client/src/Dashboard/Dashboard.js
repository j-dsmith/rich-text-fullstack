import React, { useEffect } from "react";
import * as actions from "../actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import LoadingComponent from "../components/Loading/LoadingPage";

const Dashboard = ({ fetchProjects, fetchUser, auth, projects }) => {
  if (!auth._id && auth.isLoading) {
    return <LoadingComponent />;
  } else if (!auth._id) {
    return <Redirect to="/signup" />;
  } else {
    return (
      <>
        <h1>Dash</h1>
        <button>fetch projects</button>
      </>
    );
  }
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  projects: state.projects,
});

export default connect(mapStateToProps, actions)(Dashboard);
