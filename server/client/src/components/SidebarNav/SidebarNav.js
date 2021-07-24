import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { StyledNav, IconContainer, NavLink } from "./SidebarNav.styles";
import * as BsIcons from "react-icons/bs";
import SidebarTray from "./SidebarTray";

class SidebarNav extends Component {
  state = {
    trayActive: false,
    deleteActive: false,
    loggedOut: false,
  };

  //!refactor with switch statement and arguments to determine visibility state
  setTrayActive = (active) => {
    this.setState({
      trayActive: active,
    });
  };

  handleProjectsClick = () => {
    if (!this.state.trayActive && this.state.deleteActive) {
      this.setState({
        trayActive: true,
        deleteActive: false,
      });
    } else {
      this.setState({
        trayActive: !this.state.trayActive,
      });
    }
  };

  handleHomeClick = () => {
    this.setState({
      trayActive: false,
    });
  };

  handleTrashClick = () => {
    if (this.state.trayActive && this.state.deleteActive) {
      this.setState({
        trayActive: true,
        deleteActive: false,
      });
    } else {
      this.setState({
        trayActive: true,
        deleteActive: true,
      });
    }
  };

  render() {
    const { trayActive, deleteActive } = this.state;
    console.log(this.props);

    return (
      <>
        <StyledNav>
          <IconContainer
            className="projects"
            onClick={this.handleProjectsClick}
          >
            <div className="nav-tile">
              <BsIcons.BsFolder className="nav-icon" />
              <span>Projects</span>
            </div>
          </IconContainer>

          <NavLink to="/home">
            <IconContainer className="home" onClick={this.handleHomeClick}>
              <div className="nav-tile">
                <BsIcons.BsHouse className="nav-icon" />
                <span>Home</span>
              </div>
            </IconContainer>
          </NavLink>

          <IconContainer className="trash" onClick={this.handleTrashClick}>
            <div className="nav-tile">
              <BsIcons.BsTrash className="nav-icon" />
              <span>Delete</span>
            </div>
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

export default withRouter(SidebarNav);
