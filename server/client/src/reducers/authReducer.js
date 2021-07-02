import { FETCH_USER } from "../actions/types";

export default (state = { isLoading: true, authUser: null }, action) => {
  console.log(action);
  switch (action.type) {
    case FETCH_USER:
      return { authUser: { ...action.payload }, isLoading: false } || false;
    default:
      return state;
  }
};
