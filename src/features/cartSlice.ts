import { createSlice } from "@reduxjs/toolkit";
import { Rootstate } from "../app/store";

type CartItem = {
  id: string;
  name: string;
  price: number;
  count: number;
  imageUrl: string;
  type: string;
  size: number;
};

interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}

const initialState: CartSliceState = {
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
      if (itemToRemove)
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
      if (item) item.count--;
      if (item) state.totalPrice -= item.price;
    },
  },
});

export const cartSelector = (state: Rootstate) => state.cart;
export const cartItemsSelector = (state: Rootstate) => state.cart.items;

export const { addItem, clearItems, removeItem, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
