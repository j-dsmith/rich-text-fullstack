import {
  DELETE_NOTE,
  FETCH_PROJECT,
  FETCH_PROJECTS,
  NOTE_SELECTED,
} from "../actions/types";

const projectReducer = (state = { projects: [], selectedNote: {} }, action) => {
  switch (action.type) {
    case FETCH_PROJECTS:
      return { ...state, projects: action.payload };

    case FETCH_PROJECT:
      return { ...state, projects: state.projects.concat(action.payload) };

    case NOTE_SELECTED:
      return { ...state, selectedNote: action.payload };
    case DELETE_NOTE:
      const newDeletedState = state.projects.map((project) => {
        if (project._id === action.payload.projectId) {
          //if match is found, filter notes array of selected project to include all but note matching
          //action.payload.noteId, effectively deleting note
          return {
            ...project,
            notes: project.notes.filter(
              (note) => note._id !== action.payload.noteId
            ),
          };
        }
        return project;
      });
      console.log(newDeletedState);
      return { ...state, projects: newDeletedState };
    default:
      return state;
  }
};

export default projectReducer;
