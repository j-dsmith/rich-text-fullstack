import React, { Component } from "react";
import { Link } from "react-router-dom";
import { StyledNav, IconContainer, NavLink } from "./SidebarNav.styles";
import * as BsIcons from "react-icons/bs";
import SidebarTray from "./SidebarTray";

class SidebarNav extends Component {
  state = {
    trayActive: false,
    deleteActive: false,
    projectsVisible: true,
    loggedOut: false,
  };

  //!refactor with switch statement and arguments to determine visibility state
  setTrayActive = (active) => {
    this.setState({
      trayActive: active,
    });
  };

  handleProjectsClick = () => {
    this.setState({
      trayActive: true,
      projectsVisible: true,
    });
  };

  handleHomeClick = () => {
    this.setState({
      trayActive: false,
      projectsVisible: true,
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
          <IconContainer onClick={this.handleProjectsClick}>
            <BsIcons.BsFolder />
          </IconContainer>
          {/* <i >
          <BsIcons.BsCardText />
        </i> */}
          <IconContainer>
            <NavLink to="/home" onClick={this.handleHomeClick}>
              <BsIcons.BsHouse />
            </NavLink>
          </IconContainer>
          {/* <i >
          <BsIcons.BsStar />
        </i> */}
          <IconContainer onClick={this.handleTrashClick}>
            <BsIcons.BsTrash />
          </IconContainer>
        </StyledNav>
        <SidebarTray
          trayActive={trayActive}
          setTrayActive={this.setTrayActive}
          deleteActive={deleteActive}
        />
      </>
    );
  }
}

export default SidebarNav;
