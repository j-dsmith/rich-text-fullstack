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
          <IconContainer onClick={this.handleProjectsClick}>
            <BsIcons.BsFolder />
          </IconContainer>
          {/* <i >
          <BsIcons.BsCardText />
        </i> */}

          <NavLink to="/home">
            <IconContainer onClick={this.handleHomeClick}>
              <BsIcons.BsHouse />
            </IconContainer>
          </NavLink>
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

export default withRouter(SidebarNav);
