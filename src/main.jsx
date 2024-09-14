// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createStore } from "redux";
import noteReducer from "./reducers/noteReducer";
import { Provider } from "react-redux";

const store = createStore(noteReducer);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
