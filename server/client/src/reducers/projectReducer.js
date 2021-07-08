import { FETCH_PROJECT, FETCH_PROJECTS } from "../actions/types";

const projectReducer = (state = { projects: [] }, action) => {
  switch (action.type) {
    case FETCH_PROJECTS:
      return { ...state, projects: action.payload };

    case FETCH_PROJECT:
      return { ...state, projects: state.projects.concat(action.payload) };
    default:
      return state;
  }
};

export default projectReducer;
