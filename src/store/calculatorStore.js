import { combineReducers } from "redux";

// import { createStore, compose, applyMiddleware } from "redux";
// import rootReducer from "./actions";
// import thunk from "redux-thunk";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {reducers} from "./reducers";

// const initialState = {};
// const enchancers = [];
// const middleware = [...getDefaultMiddleware()];

// if (process.env.NODE_ENV === "development") {
//   const devToolsExtension = ;

//   if (typeof devToolsExtension === "function") {
//     enchancers.push(devToolsExtension());
//   }
// }

// const composedEnchancers = compose(
//   applyMiddleware(...middleware),
//   ...enchancers
// );


const store = configureStore({
  reducer: combineReducers({...reducers}),
  preloadedState: {
    curExpression: "0",
    history: {
      showHistory: false,
      historyArray: []
    }
  },
  middleware: getDefaultMiddleware(),
  devTools: true
});
// const store = createStore(rootReducer, initialState, composedEnchancers);

export default store;
