import { FETCH_PROJECT, FETCH_PROJECTS, NOTE_SELECTED } from "../actions/types";

const projectReducer = (state = { projects: [], selectedNote: {} }, action) => {
  switch (action.type) {
    case FETCH_PROJECTS:
      return { ...state, projects: action.payload };

    case FETCH_PROJECT:
      return { ...state, projects: state.projects.concat(action.payload) };
    default:
      return state;
    case NOTE_SELECTED:
      return { ...state, selectedNote: action.payload };
  }
};

export default projectReducer;
