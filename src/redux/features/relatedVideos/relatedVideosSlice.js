import { getRelatedVideos } from "./relatedVideosApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

// initial state
const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  relatedVideos: [],
};

// thunk functions that fetch related videos from fetch api
export const fetchRelatedVideo = createAsyncThunk(
  "relatedVideo/fetchRelatedVideo",
  async ({ tags, currentVideoId }) => {
    const relatedVideos = await getRelatedVideos({ tags, currentVideoId });
    return relatedVideos;
  }
);

// related video slice
const relatedVideoSlice = createSlice({
  name: "relatedVideo",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideo.pending, (state, action) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchRelatedVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedVideos = action.payload;
      })
      .addCase(fetchRelatedVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default relatedVideoSlice.reducer;
