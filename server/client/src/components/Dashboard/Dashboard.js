import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router";
import axios from "axios";
import * as actions from "../../actions";
import {
  DashboardContainer,
  DashboardHeader,
  LogoutBtn,
} from "./Dashboard.styles";
import Calendar from "./Calendar";
import SidebarNav from "../SidebarNav/SidebarNav";
import Goals from "./Goals";
import Info from "./Info";

const Dashboard = ({ user, logout }) => {
  const [logoutRedirect, setLogoutStatus] = useState(false);
  const getTimeOfDay = () => {
    let timeOfDay = "";
    const time = new Date().getHours();

    if (time > 0 && time < 12) {
      timeOfDay = "Morning";
    } else if (time >= 12 && time <= 18) {
      timeOfDay = "Afternoon";
    } else {
      timeOfDay = "Evening";
    }
    return timeOfDay;
  };

  const handleLogout = () => {
    axios.get("/api/logout");
    setLogoutStatus(true);
  };

  return (
    <DashboardContainer>
      <DashboardHeader>
        <h2>Good {getTimeOfDay()},</h2>
        <h1> {user.name}.</h1>
      </DashboardHeader>
      <Calendar />
      <Goals />
      <Info />
      <SidebarNav />
      <LogoutBtn onClick={handleLogout}>Logout</LogoutBtn>
      {logoutRedirect && <Redirect to="/login" />}
    </DashboardContainer>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth,
});

export default withRouter(connect(mapStateToProps, actions)(Dashboard));
