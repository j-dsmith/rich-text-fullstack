import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { CardItem, ItemTile } from "./SidebarNav.styles";
import * as actions from "../../actions";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";

const ProjectsList = ({
  fetchProjects,
  projects,
  deleteActive,
  setSelectedProject,
}) => {
  const [fadeOutId, setFadeOutId] = useState(null);
  const [fadeOut, startFadeOut] = useState(false);

  const handleProjectClick = (project, projectId) => {
    if (deleteActive) {
      setFadeOutId(projectId);
      startFadeOut(true);
      // handleProjectDelete(projectId);
    } else {
      setSelectedProject(project);
    }
  };

  const handleProjectDelete = async (projectId) => {
    await axios.delete(`/api/projects/${projectId}`);
    fetchProjects();
  };

  const handleAnimationEnd = (projectId) => {
    if (fadeOut) {
      handleProjectDelete(projectId);
      startFadeOut(false);
    }
  };

  return projects.projects.map((project) => {
    return (
      <CardItem
        key={project._id}
        className={project._id === fadeOutId ? "fade-out" : "fade-in"}
        onClick={() => handleProjectClick(project, project._id)}
        onAnimationEnd={() => handleAnimationEnd(project._id)}
        deleteActive={deleteActive}
      >
        <ItemTile>
          {deleteActive ? (
            <div className="minus tile-icon">
              <BsIcons.BsFolderMinus />
            </div>
          ) : (
            <div className="folder tile-icon">
              <BsIcons.BsFolder />
            </div>
          )}

          <h4>{project.title}</h4>
          {deleteActive ? (
            <div className="minus tile-icon">
              <BsIcons.BsX />
            </div>
          ) : (
            <div className="arrow-right tile-icon">
              <BiIcons.BiRightArrowAlt />
            </div>
          )}
        </ItemTile>
      </CardItem>
    );
  });
};

const mapStateToProps = (state) => ({
  projects: state.projects,
});

export default connect(mapStateToProps, actions)(ProjectsList);
