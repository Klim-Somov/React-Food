import { configureStore } from "@reduxjs/toolkit";
import filter from "../features/filterSlice";
import cart from "../features/cartSlice";
import pizzas from "../features/pizzaSlice";

export const store = configureStore({
  reducer: {
    filter,
    cart,
    pizzas,
  },
});

 ;
type Rootstate = ReturnType<typeof store.getState>;
