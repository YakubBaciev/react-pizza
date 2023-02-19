import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    itemPlus(state, action) {
      const itemFind = state.items.find((obj) => obj.id === action.payload);
      if (itemFind) {
        itemFind.count++;
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
      state.totalCount = state.items.reduce((sum, obj) => {
        return obj.count + sum;
      }, 0);
    },
    itemMinus(state, action) {
      const itemFind = state.items.find((obj) => obj.id === action.payload);
      if (itemFind) {
        itemFind.count--;
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
      state.totalCount = state.items.reduce((sum, obj) => {
        return obj.count + sum;
      }, 0);
    },
    addItem(state, action) {
      const itemFind = state.items.find((obj) => obj.id === action.payload.id);

      if (itemFind) {
        itemFind.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
      state.totalCount = state.items.reduce((sum, obj) => {
        return obj.count + sum;
      }, 0);
    },
    itemRemove(state, active) {
      state.items = state.items.filter((obj) => obj.id !== active.payload);
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
      state.totalCount = state.items.reduce((sum, obj) => {
        return obj.count + sum;
      }, 0);
    },
    itemClear(state, active) {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addItem, itemRemove, itemClear, itemPlus, itemMinus } =
  cartSlice.actions;

export default cartSlice.reducer;
