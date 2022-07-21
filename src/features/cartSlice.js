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
      state.items.push(payload) ;
      state.totalPrice+=payload.price
    },
    removeItem: (state, { payload }) => {
      state.items = state.items.filter(obj => obj.id !== payload);
    },
    clearItems: (state) => {
      state.items =[];
    },

  },
});
export const { setCategoryId, setSortType, addItem, cartCount, clearItems, removeItem } =
  cartSlice.actions;
export default cartSlice.reducer;
