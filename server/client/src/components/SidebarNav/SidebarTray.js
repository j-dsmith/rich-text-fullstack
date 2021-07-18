import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import * as BsIcons from "react-icons/bs";
import Scrollbars from "react-custom-scrollbars";
import { StyledTray, SidebarCard } from "./SidebarNav.styles";
import { StyledInput } from "../Dashboard/Goals.styles";
import axios from "axios";
import NotesList from "./NotesList";
import ProjectsList from "./ProjectsList";
import { renderScrollThumb } from "../../globalStyles";

const SidebarTray = ({
  trayActive,
  deleteActive,
  fetchProjects,
  setTrayActive,
}) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [newProjectTitle, setNewProjectTitle] = useState("");
  const [newNoteTitle, setNewNoteTitle] = useState("");

  const handleProjectSubmit = async (projectTitle) => {
    await axios.post("/api/projects", {
      title: projectTitle,
      notes: [],
    });
    setNewProjectTitle("");
    fetchProjects();
  };

  const handleNoteSubmit = async (noteTitle) => {
    await axios.post(`/api/projects/${selectedProject._id}/notes`, {
      title: noteTitle,
    });
    setNewNoteTitle("");
    fetchProjects();
  };

  const handleTitleChange = (e) => {
    if (selectedProject) {
      setNewNoteTitle(e.target.value);
    } else {
      setNewProjectTitle(e.target.value);
    }
  };

  const renderTrayItems = () => {
    if (selectedProject) {
      return (
        <NotesList
          selectedProject={selectedProject}
          deleteActive={deleteActive}
          setTrayActive={setTrayActive}
        />
      );
    }

    return (
      <ProjectsList
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
        deleteActive={deleteActive}
      />
    );
  };

  return (
    <StyledTray className={trayActive && "tray-active"}>
      {/* Projects link to return to projects list if notes tray is active */}
      {selectedProject && (
        <div className="projects-link" onClick={() => setSelectedProject(null)}>
          <h5>Projects</h5>
        </div>
      )}

      {/* Tray header, either "Projects" or the selected project title */}
      <h2>{selectedProject ? selectedProject.title : "Projects"}</h2>

      <StyledInput>
        <input
          type="text"
          className={`project-input ${deleteActive && "delete-active"}`}
          disabled={deleteActive}
          placeholder={selectedProject ? "Add a new note" : "Add a new project"}
          value={selectedProject ? newNoteTitle : newProjectTitle}
          onChange={(e) => handleTitleChange(e)}
        />
        <button
          className="project-input"
          onClick={() => {
            selectedProject
              ? handleNoteSubmit(newNoteTitle)
              : handleProjectSubmit(newProjectTitle);
          }}
          disabled={newNoteTitle || newProjectTitle ? false : true}
        >
          <BsIcons.BsX
            className={`${deleteActive ? "delete-btn" : "add-btn"}`}
          />
        </button>
      </StyledInput>

      <SidebarCard autohide>
        <ul>
          <Scrollbars
            style={{
              height: "100%",
              borderRadius: "1.5rem",
              padding: "1rem",
              boxSizing: "border-box",
            }}
            renderThumbVertical={renderScrollThumb}
            autoHide
          >
            {renderTrayItems()}
          </Scrollbars>
        </ul>
      </SidebarCard>
    </StyledTray>
  );
};

const mapStateToProps = (state) => ({
  projects: state.projects,
});

export default connect(mapStateToProps, actions)(SidebarTray);
