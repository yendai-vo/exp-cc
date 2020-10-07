import * as React from "react";
import { initialState, appSlice } from "./reducer";
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware
} from "@reduxjs/toolkit";

const defaultMiddleware = getDefaultMiddleware({ thunk: true });

export const reducer = combineReducers({
  app: appSlice.reducer
});

export const createStore = () => {
  const store = configureStore({
    reducer,
    middleware: defaultMiddleware,
    preloadedState: {
      app: initialState
    }
  });

  return store;
};
