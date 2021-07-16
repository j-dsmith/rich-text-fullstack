import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { CardItem, NavLink, ItemTile } from "./SidebarNav.styles";
import * as actions from "../../actions";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";

const NotesList = ({
  projects,
  selectedProject,
  deleteActive,
  setSelectedNote,
  deleteNote,
}) => {
  const handleNoteDelete = async (projectId, noteId) => {
    deleteNote(projectId, noteId);

    await axios.delete(`/api/projects/${projectId}/notes/${noteId}`);
  };

  const handleNoteClick = (note) => {
    console.log(note);
    setSelectedNote(note);
  };

  return projects.projects
    .find((project) => project._id === selectedProject._id)
    .notes.map((note) => {
      return (
        <CardItem
          key={note._id}
          deleteActive={deleteActive}
          onClick={(e) =>
            deleteActive
              ? handleNoteDelete(selectedProject._id, note._id)
              : handleNoteClick(note)
          }
        >
          <NavLink to={`/projects/${selectedProject._id}/notes/${note._id}`}>
            <ItemTile>
              {deleteActive ? (
                <div className="minus tile-icon">
                  <BsIcons.BsFileMinus />
                </div>
              ) : (
                <div className="note tile-icon">
                  <BsIcons.BsFileText />
                </div>
              )}

              <h4>{note.title}</h4>

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
            {/* {toNoteEditor && (
          <Redirect
            to={`/projects/${selectedProject._id}/${selectedNote._id}`}
          />
        )} */}
          </NavLink>
        </CardItem>
      );
    });
};

const mapStateToProps = (state) => ({
  projects: state.projects,
});

export default connect(mapStateToProps, actions)(NotesList);
