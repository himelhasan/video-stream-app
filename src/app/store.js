import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "../redux/features/video/videoSlice";

export const store = configureStore({
  reducer: {
    video: videoReducer,
  },
});
