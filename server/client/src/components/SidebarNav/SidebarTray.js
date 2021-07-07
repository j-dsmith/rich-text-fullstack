import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
import {
  StyledTray,
  SidebarCard,
  CardItem,
  ItemTile,
  Slide,
} from "./SidebarNav.styles";
import { StyledInput } from "../Dashboard/Goals.styles";
import axios from "axios";

const SidebarTray = ({ trayActive, projects, fetchProjects }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [newProjectTitle, setNewProjectTitle] = useState("");

  const handleProjectClick = (id) => {
    setSelectedProject(id);
  };

  const handleSubmit = async (projectTitle) => {
    await axios.post("/api/projects", {
      title: projectTitle,
    });
    setNewProjectTitle("");
    fetchProjects();
  };

  const renderTrayItems = () => {
    if (selectedProject) {
      return selectedProject.notes.map((note) => {
        return (
          <CardItem key={note._id}>
            <ItemTile>
              <div className="note tile-icon">
                <BsIcons.BsFileText />
              </div>
              <h4>{note.title}</h4>
              <div className="arrow-right tile-icon">
                <BiIcons.BiRightArrowAlt />
              </div>
            </ItemTile>
          </CardItem>
        );
      });
    }

    return projects.projects.map((project) => {
      return (
        <CardItem key={project._id} onClick={() => handleProjectClick(project)}>
          <ItemTile>
            <div className="folder tile-icon">
              <BsIcons.BsFolder />
            </div>

            <h4>{project.title}</h4>
            <div className="arrow-right tile-icon">
              <BiIcons.BiRightArrowAlt />
            </div>
          </ItemTile>
        </CardItem>
      );
    });
  };

  return (
    <StyledTray className={trayActive && "tray-active"}>
      <Slide className={selectedProject && "right"}>
        {/* Projects link to return to projects list if notes tray is active */}
        {selectedProject && (
          <div
            className="projects-link"
            onClick={() => setSelectedProject(null)}
          >
            <h5>Projects</h5>
          </div>
        )}

        {/* Tray header, either "Projects" or the selected project title */}
        <h2>{selectedProject ? selectedProject.title : "Projects"}</h2>

        <StyledInput>
          <input
            type="text"
            className="project-input"
            placeholder={
              selectedProject ? "Add a new note" : "Add a new project"
            }
            value={newProjectTitle}
            onChange={(e) => setNewProjectTitle(e.target.value)}
          />
          <button
            className="project-input"
            onClick={() => handleSubmit(newProjectTitle)}
          />
        </StyledInput>

        <SidebarCard>
          <ul>{renderTrayItems()}</ul>
        </SidebarCard>
      </Slide>
    </StyledTray>
  );
};

const mapStateToProps = (state) => ({
  projects: state.projects,
});

export default connect(mapStateToProps, actions)(SidebarTray);
