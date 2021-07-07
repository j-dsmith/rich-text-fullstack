import { FETCH_PROJECT, FETCH_PROJECTS } from "../actions/types";

export default (state = { projects: [] }, action) => {
  switch (action.type) {
    case FETCH_PROJECTS:
      return { ...state, projects: action.payload };

    case FETCH_PROJECT:
      return { ...state, projects: state.projects.concat(action.payload) };
    default:
      return state;
  }
};
