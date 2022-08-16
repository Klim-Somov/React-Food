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
            state.totalPrice += payload.price;
    },
    // addItem: (state, { payload }) => {
    //   state.items.push(payload);
    //   state.totalPrice += payload.price;
    // },
    removeItem: (state, { payload }) => {
      state.items = state.items.filter((obj) => obj.id !== payload);
    },
    clearItems: (state) => {
      state.items = [];
    },
  },
});
export const { addItem, clearItems, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
