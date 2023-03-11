import { getVideos } from "./videosApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

// initial state
const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  videos: [],
};

// thunk functions that fetch videos from fetch api
export const fetchVideos = createAsyncThunk(
  "video/fetchVideo",
  async ({ tags, search }) => {
    const videos = await getVideos(tags, search);
    return videos;
  }
);

//  video slice
const videoSlice = createSlice({
  name: "video",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state, action) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default videoSlice.reducer;
