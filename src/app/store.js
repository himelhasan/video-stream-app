import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../redux/features/filter/filterSlice";
import relatedVideosReducer from "../redux/features/relatedVideos/relatedVideosSlice";
import singleVideoReducer from "../redux/features/singleVideo/singleVideoSlice";
import tagsReducer from "../redux/features/tags/tagsSlice";
import videoReducer from "../redux/features/video/videoSlice";

export const store = configureStore({
  reducer: {
    video: videoReducer,
    tags: tagsReducer,
    singleVideo: singleVideoReducer,
    relatedVideo: relatedVideosReducer,
    filter: filterReducer,
  },
});
