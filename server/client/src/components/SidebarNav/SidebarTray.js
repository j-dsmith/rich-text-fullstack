import React, { useState } from "react";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
import {
  StyledTray,
  SidebarCard,
  CardItem,
  ProjectTile,
} from "./SidebarNav.styles";

const SidebarTray = ({ trayActive }) => {
  return (
    <StyledTray className={trayActive && "tray-active"}>
      <h2>Projects</h2>
      <SidebarCard>
        <ul>
          <CardItem>
            <ProjectTile>
              <div className="folder tile-icon">
                <BsIcons.BsFolder />
              </div>
              <h4>Project Title</h4>
              <div className="arrow-right tile-icon">
                <BiIcons.BiRightArrowAlt />
              </div>
            </ProjectTile>
          </CardItem>
        </ul>
      </SidebarCard>
    </StyledTray>
  );
};

export default SidebarTray;
