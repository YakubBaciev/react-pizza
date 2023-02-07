import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeSort: {
    name: "популярности",
    sortProperty: "rating",
  },
};

export const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setActiveSort(state, active) {
      state.activeSort = active.payload;
    },
  },
});

export const { setActiveSort } = sortSlice.actions;
export default sortSlice.reducer;
