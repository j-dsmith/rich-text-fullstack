import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import logger from "redux-logger";

import App from "./components/App";
import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(ReduxThunk, logger))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);

// import React from "react";
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import { createStore, applyMiddleware, compose } from "redux";
// import ReduxThunk from "redux-thunk";
// import logger from "redux-logger";
// import { LOGOUT } from "./actions/types";

// import App from "./components/App";
// import reducers from "./reducers";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const rootReducer = (state, action) => {
//   if (action.type === LOGOUT) {
//     state = undefined;
//   }

//   return reducers;
// };

// const store = createStore(
//   rootReducer,
//   {},
//   composeEnhancers(applyMiddleware(ReduxThunk, logger))
// );

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,

//   document.getElementById("root")
// );
