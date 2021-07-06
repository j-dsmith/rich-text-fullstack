import React, { useState } from "react";
import { connect } from "react-redux";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
import {
  StyledTray,
  SidebarCard,
  CardItem,
  ProjectTile,
} from "./SidebarNav.styles";

const SidebarTray = ({ trayActive, projectsVisible, projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (id) => {
    setSelectedProject(id);
  };

  const renderTrayItems = () => {
    if (selectedProject) {
      console.log(selectedProject);
      return selectedProject.notes.map((note) => {
        return (
          <CardItem key={note._id}>
            <ProjectTile>
              <div className="folder tile-icon">
                <BsIcons.BsFolder />
              </div>
              <h4>{note.title}</h4>
              <div className="arrow-right tile-icon">
                <BiIcons.BiRightArrowAlt />
              </div>
            </ProjectTile>
          </CardItem>
        );
      });
    }

    return projects.projects.map((project) => {
      return (
        <CardItem key={project._id} onClick={() => handleProjectClick(project)}>
          <ProjectTile>
            <div className="folder tile-icon">
              <BsIcons.BsFolder />
            </div>

            <h4>{project.title}</h4>
            <div className="arrow-right tile-icon">
              <BiIcons.BiRightArrowAlt />
            </div>
          </ProjectTile>
        </CardItem>
      );
    });
  };

  return (
    <StyledTray className={trayActive && "tray-active"}>
      {selectedProject && (
        <div className="projects-link" onClick={() => setSelectedProject(null)}>
          <h5>Projects</h5>
        </div>
      )}
      <h2>{selectedProject ? "Notes" : "Projects"}</h2>
      <SidebarCard>
        <ul>{renderTrayItems()}</ul>
      </SidebarCard>
    </StyledTray>
  );
};

const mapStateToProps = (state) => ({
  projects: state.projects,
});

export default connect(mapStateToProps)(SidebarTray);
