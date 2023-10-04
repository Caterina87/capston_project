import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { persistor, profileResult } from "./redux/state";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={profileResult}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
