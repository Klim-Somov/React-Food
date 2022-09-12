import { configureStore } from "@reduxjs/toolkit";
import filter from "../features/filterSlice";
import cart from "../features/cartSlice";
import pizzas from "../features/pizzaSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    filter,
    cart,
    pizzas,
  },
});

export type Rootstate = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
