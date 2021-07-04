import { FETCH_USER } from "../actions/types";

export default (state = { isLoading: true, isAuthUser: false }, action) => {
  console.log(action);
  switch (action.type) {
    case FETCH_USER:
      if (action.payload._id) {
        return {
          ...state,
          ...action.payload,
          isLoading: false,
          isAuthUser: true,
        };
      }
      return { ...state, ...action.payload, isLoading: false } || false;
    default:
      return state;
  }
};
