import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

export default configureStore({
  reducer: {
    counter: counterSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});
