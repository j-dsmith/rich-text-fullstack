import React from "react";
import SidebarNav from "../SidebarNav/SidebarNav";
import Calendar from "./Calendar";
import { connect } from "react-redux";
import GoalsWidget from "./GoalsWidget";

const Dashboard = ({ dailyGoal, user }) => {
  console.log(dailyGoal, user);
  return (
    <>
      <Calendar />
      {/* <GoalsWidget /> */}
      {/* <SidebarNav /> */}
    </>
  );
};

const mapStateToProps = (state) => ({
  dailyGoal: state.dailyGoal,
  user: state.user,
});

export default connect(mapStateToProps)(Dashboard);
