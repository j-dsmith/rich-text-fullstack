import React, { Component } from "react";
import { StyledNav, IconContainer } from "./SidebarNav.styles";
import { SidebarData } from "./SidebarData";
import * as BsIcons from "react-icons/bs";

class SidebarNav extends Component {
  renderSidebar = () => {
    SidebarData.map(({ title, path, icon }) => {
      if (title === "PROJECTS") {
        return <div>{icon}</div>;
      }
    });
  };

  render() {
    return (
      <StyledNav>
        <IconContainer>
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
    );
  }
}

export default SidebarNav;
