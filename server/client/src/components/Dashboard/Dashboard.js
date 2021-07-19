import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

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

const Dashboard = ({ user, fetchUser }) => {
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
      <LogoutBtn>
        <a href="/api/logout">Logout</a>
      </LogoutBtn>
    </DashboardContainer>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth,
});

export default withRouter(connect(mapStateToProps, actions)(Dashboard));
