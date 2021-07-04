import { FETCH_USER } from "../actions/types";

export default (state = { isLoading: true }, action) => {
  console.log(action);
  switch (action.type) {
    case FETCH_USER:
      return { ...state, ...action.payload, isLoading: false } || false;
    default:
      return state;
  }
};
