import { FETCH_PROJECTS } from "../actions/types";

export default (state = { projects: [] }, action) => {
  switch (action.type) {
    case FETCH_PROJECTS:
      return { ...state, projects: [...state.projects, action.payload] };
    default:
      return state;
  }
};