import React, { Component } from "react";

import { StyledNav, IconContainer } from "./SidebarNav.styles";
import * as BsIcons from "react-icons/bs";
import SidebarTray from "./SidebarTray";

class SidebarNav extends Component {
  state = {
    trayActive: false,
    deleteActive: false,
    projectsVisible: true,
    notesVisible: false,
    loggedOut: false,
  };

  setTrayVisibility = () => {
    const { trayActive, projectsVisible, notesVisible } = this.state;
    if (!trayActive) {
      //if tray is not active, activate it with projects showing
      this.setState({
        trayActive: true,
        projectsVisible: true,
        notesVisible: false,
      });
    }
    if (trayActive && projectsVisible) {
      //if tray is active with projects showing, close the tray
      this.setState({
        trayActive: false,
        projectsVisible: true,
        notesVisible: false,
      });
    }
    if (trayActive && notesVisible) {
      //if tray is active with notes showing, switch back to projects tray
      this.setState({
        trayActive: true,
        projectsVisible: true,
        notesVisible: false,
      });
    }
  };

  handleHomeClick = () => {
    this.setState({
      trayActive: false,
      projectsVisible: true,
      notesVisible: false,
    });
  };

  handleTrashClick = () => {
    this.setState({
      trayActive: true,
      deleteActive: !this.state.deleteActive,
    });
  };

  render() {
    const { trayActive, deleteActive } = this.state;

    return (
      <>
        <StyledNav>
          <IconContainer onClick={() => this.setTrayVisibility()}>
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
          <IconContainer onClick={() => this.handleTrashClick()}>
            <BsIcons.BsTrash />
          </IconContainer>
        </StyledNav>
        <SidebarTray
          trayActive={trayActive}
          setTrayVisibility={this.setTrayVisibility}
          deleteActive={deleteActive}
        />
      </>
    );
  }
}

export default SidebarNav;
