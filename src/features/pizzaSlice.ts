import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Rootstate } from "../app/store";

type fetchPizzasProps = {
  serarchBycategory: string;
  search: string;
  sort: any;
  currentPage: number;
};
export const fetchPizzas = createAsyncThunk(
  "pizzas/fetchPizzas",
  async (params: fetchPizzasProps) => {
    const { serarchBycategory, search, sort, currentPage } = params;
    const { data } = await axios.get(
      `https://62d15c8ddccad0cf1765fbd3.mockapi.io/items?page=${currentPage}&limit=4&${serarchBycategory}&sortBy=${sort.sortProperty}&order=desc${search}`
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
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = "loading";
      state.items = [];
      console.log("Идет отправка запроса");
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = "error";
      state.items = [];
      console.log("ошибка в получении пицц");
    });
    builder.addCase(fetchPizzas.fulfilled, (state, { payload}) => {
      state.status = "success";
      state.items = payload;
      console.log("Пиццы загружены");
    });
  },
});

export const pizzasSelector = (state: Rootstate) => state.pizzas;
export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
