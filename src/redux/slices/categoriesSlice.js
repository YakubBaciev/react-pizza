import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeIndex: 0,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setActiveIndex(state, active) {
      state.activeIndex = active.payload;
    },
  },
});

export const { setActiveIndex } = categoriesSlice.actions;

export default categoriesSlice.reducer;
