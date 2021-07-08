import React from "react";
import SidebarNav from "../SidebarNav/SidebarNav";
import { DashboardHeader } from "./Dashboard.styles";
import Calendar from "./Calendar";
import { connect } from "react-redux";
import Goals from "./Goals";

const Dashboard = ({ user }) => {
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

  console.log(user);
  return (
    <>
      <DashboardHeader>
        <h2>Good {getTimeOfDay()},</h2>
        <h1> {user.name}.</h1>
      </DashboardHeader>
      <Calendar />
      <Goals />
      <SidebarNav />
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth,
});

export default connect(mapStateToProps)(Dashboard);
