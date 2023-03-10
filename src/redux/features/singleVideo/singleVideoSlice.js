import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSingleVideo } from "./singleVideoApi";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  video: {},
};
// async thunk functions

export const fetchSingleVideo = createAsyncThunk(
  "singleVideo/fetchSingleVideo",
  async (id) => {
    const singleVideo = await getSingleVideo(id);
    return singleVideo;
  }
);

//  create a new slice for tags
const singleVideoSlice = createSlice({
  name: "singleVideo",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleVideo.pending, (state, action) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchSingleVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.video = action.payload;
      })
      .addCase(fetchSingleVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default singleVideoSlice.reducer;
