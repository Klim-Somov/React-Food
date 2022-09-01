import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk(
  "pizzas/fetchPizzas",
  async ({ serarchBycategory, search, sort }) => {
    const { data } = await axios.get(
      `https://62d15c8ddccad0cf1765fbd3.mockapi.io/items?${serarchBycategory}&sortBy=${sort.sortProperty}&order=desc${search}`
    );
    return data;
  }
);

const initialState = {
  items: [],
  status: "loading",
};

const pizzaSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    setItems: (state, { payload }) => {
      state.items = payload;
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = "loading";
      state.items = [];
      console.log("Идет отправка запроса");
    },
    [fetchPizzas.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.items = payload;
      console.log("Все ок");
    },
    [fetchPizzas.rejected]: (state) => {
      state.status = "error";
      state.items = [];
      alert("ошибка в получении пицц");
    },
  },
});

export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
