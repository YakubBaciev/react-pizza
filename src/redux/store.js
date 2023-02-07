import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./slices/categoriesSlice";
import sortSlice from "./slices/sortSlice";
import searchSlice from "./slices/searchSlice";

export const store = configureStore({
  reducer: { categoriesSlice, sortSlice, searchSlice },
});
