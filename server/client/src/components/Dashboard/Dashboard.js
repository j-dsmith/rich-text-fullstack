import React from "react";
import SidebarNav from "../SidebarNav/SidebarNav";
import { DashboardHeader } from "./Dashboard.styles";
import Calendar from "./Calendar";
import { connect } from "react-redux";
import Goals from "./Goals";

const Dashboard = ({ user }) => {
  console.log(user);
  return (
    <>
      <DashboardHeader></DashboardHeader>
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
