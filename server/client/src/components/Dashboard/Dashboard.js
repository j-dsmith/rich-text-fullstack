import React from "react";
import SidebarNav from "../SidebarNav/SidebarNav";
import Calendar from "./Calendar";
import { connect } from "react-redux";
import GoalsWidget from "./GoalsWidget";
import Goals from "./Goals";

const Dashboard = ({ dailyGoal, user }) => {
  console.log(dailyGoal, user);
  return (
    <>
      <Calendar />
      <Goals />
      {/* <SidebarNav /> */}
    </>
  );
};

const mapStateToProps = (state) => ({
  dailyGoal: state.dailyGoal,
  user: state.user,
});

export default connect(mapStateToProps)(Dashboard);
