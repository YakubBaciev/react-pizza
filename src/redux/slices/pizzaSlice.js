import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzasStatus",
  async (params) => {
    const { activeIndex, activeSort, searchValue } = params;
    const res = await axios.get(
      `https://639c95a242e3ad6927364e55.mockapi.io/items?${
        activeIndex > 0 ? `category=${activeIndex}` : ""
      }&sortBy=${activeSort.sortProperty}&order=desc${
        searchValue ? `&search=${searchValue}` : ""
      }`
    );
    return res.data;
  }
);

const initialState = {
  items: [],
  status: "loading", // loading | success | error
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [fetchPizzas.rejected]: (state, action) => {
      state.status = "error";
      state.items = [];
    },
  },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
