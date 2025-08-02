import { configureStore } from "@reduxjs/toolkit";
import firstReducer from "./slice";

const Store = configureStore({
  reducer: {
    first: firstReducer,
  },
});

export default Store;
