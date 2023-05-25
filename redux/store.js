import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./slices.js/AuthSlice";
import { messageSlice } from "./slices.js/MessageSlice";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    message: messageSlice.reducer
  },
  middleware: [thunk, logger]
})

export default store