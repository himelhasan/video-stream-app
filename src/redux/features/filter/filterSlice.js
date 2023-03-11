const { createSlice } = require("@reduxjs/toolkit");

// initial state
const initialState = {
  tags: [],
  search: "",
};

//  video slice
const filterSlice = createSlice({
  name: "filter",
  initialState,

  reducers: {
    tagSelected: (state, action) => {
      state.tags.push(action.payload);
    },
    tagRemoved: (state, action) => {
      const indexToRemove = state.tags.indexOf(action.payload);
      if (indexToRemove !== -1) {
        state.tags.splice(indexToRemove, 1);
      }
    },

    searchAction: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { tagRemoved, tagSelected, searchAction } = filterSlice.actions;
