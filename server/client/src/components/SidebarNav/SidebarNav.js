import React, { Component } from "react";
import { StyledNav, IconContainer } from "./SidebarNav.styles";
import { SidebarData } from "./SidebarData";
import * as BsIcons from "react-icons/bs";
import SidebarTray from "./SidebarTray";

class SidebarNav extends Component {
  state = {
    trayActive: false,
    projectsActive: true,
    notesActive: false,
    loggedOut: false,
  };

  handleProjectsClick = () => {
    const { trayActive, projectsActive, notesActive } = this.state;
    if (!trayActive) {
      //if tray is not active, activate it with projects showing
      this.setState({
        trayActive: true,
        projectsActive: true,
        notesActive: false,
      });
    }
    if (trayActive && projectsActive) {
      //if tray is active with projects showing, close the tray
      this.setState({
        trayActive: false,
        projectsActive: true,
        notesActive: false,
      });
    }
    if (trayActive && notesActive) {
      //if tray is active with notes showing, switch back to projects tray
      this.setState({
        trayActive: true,
        projectsActive: true,
        notesActive: false,
      });
    }
  };

  handleTrashClick = () => {
    const { trayActive } = this.state;
    const { deleted, toggleDelete } = this.props;
    if (deleted.deleteActive) {
      toggleDelete();
    }
    if (trayActive) {
      this.setState({ trayActive: false });
    }
  };

  handleHomeClick = () => {
    this.setState({
      trayActive: false,
      projectsActive: true,
      notesActive: false,
    });
  };

  renderSidebar = () => {
    SidebarData.map(({ title, path, icon }) => {
      if (title === "PROJECTS") {
        return <div>{icon}</div>;
      }
    });
  };

  render() {
    const { trayActive, projectsActive, notesActive } = this.state;

    return (
      <>
        <StyledNav>
          <IconContainer onClick={() => this.handleProjectsClick()}>
            <BsIcons.BsFolder />
          </IconContainer>
          {/* <i >
          <BsIcons.BsCardText />
        </i> */}
          <IconContainer>
            <BsIcons.BsHouse />
          </IconContainer>
          {/* <i >
          <BsIcons.BsStar />
        </i> */}
          <IconContainer>
            <BsIcons.BsTrash />
          </IconContainer>
        </StyledNav>
        <SidebarTray trayActive={trayActive} />
      </>
    );
  }
}

export default SidebarNav;
