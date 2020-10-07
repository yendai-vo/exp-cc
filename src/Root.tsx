import * as React from "react";
import { Provider } from "react-redux";
import { createStore } from "./store";

import { App } from "./components/App";

import "./styles.css";

export function Root() {
  return (
    <Provider store={createStore()}>
      <App />
    </Provider>
  );
}
