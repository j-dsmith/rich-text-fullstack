import axios from "axios";
import {
  FETCH_USER,
  FETCH_PROJECTS,
  NOTE_SELECTED,
  DELETE_NOTE,
  LOGOUT,
} from "./types";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchProjects = () => async (dispatch) => {
  const res = await axios.get("/api/projects");
  dispatch({ type: FETCH_PROJECTS, payload: res.data });
};

// export const fetchProject = (id) => async (dispatch) => {
//   const res = await axios.get(`/api/projects/${id}`);
//   dispatch({ type: FETCH_PROJECTS, payload: res.data });
// };

export const setSelectedNote = (note) => ({
  type: NOTE_SELECTED,
  payload: note,
});

export const deleteNote = (projectId, noteId) => ({
  type: DELETE_NOTE,
  payload: { projectId, noteId },
});

export const logout = () => ({
  type: LOGOUT,
});
