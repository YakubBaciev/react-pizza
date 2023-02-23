import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./slices/categoriesSlice";
import sortSlice from "./slices/sortSlice";
import searchSlice from "./slices/searchSlice";
import cart from "./slices/cartSlice";
import pizza from "./slices/pizzaSlice";

export const store = configureStore({
  reducer: { categoriesSlice, sortSlice, searchSlice, cart, pizza },
});
