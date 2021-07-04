import React, { useEffect } from "react";
import * as actions from "../actions";
import { connect } from "react-redux";

const Dashboard = ({ fetchProjects, fetchUser, auth, projects }) => {
  useEffect(() => {
    fetchUser();
  }, []);

  const handleClick = () => {
    console.log(auth);

    if (auth.authUser.name) {
      fetchProjects();
    }

    console.log(projects);
  };

  return (
    <>
      <h1>Dash</h1>
      <button onClick={handleClick}>fetch projects</button>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  projects: state.projects,
});

export default connect(mapStateToProps, actions)(Dashboard);
