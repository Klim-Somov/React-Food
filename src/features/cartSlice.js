import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      const findItem = state.items.find((obj) => obj.id === payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...payload, count: 1 });
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },

    removeItem: (state, { payload }) => {
      const itemToRemove = state.items.find((obj) => obj.id === payload);
      state.totalPrice -= itemToRemove.count * itemToRemove.price;
      const items = state.items.filter((obj) => obj.id !== payload);
      state.items = items;
    },
    clearItems: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
    minusItem: (state, { payload }) => {
      const item = state.items.find((obj) => obj.id === payload);
      item.count--;
      state.totalPrice -= item.price;
    },
  },
});

export const cartSelector = (state) => state.cart;

export const { addItem, clearItems, removeItem, minusItem } = cartSlice.actions;

export default cartSlice.reducer;

