// import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./reducers/noteReducer";
import filterReducer from "./reducers/filterReducer.js";
import { Provider } from "react-redux";

// const reducer = combineReducers({
//   notes: noteReducer,
//   filter: filterReducer,
// });

// const store = createStore(reducer);
const store = configureStore({
  reducer: {
    notes: noteReducer,
    filter: filterReducer,
  },
});

console.log(store.getState());

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
