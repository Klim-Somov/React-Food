import { createSlice } from "@reduxjs/toolkit";
import { Rootstate } from "../app/store";

const initialState = {
  categoryId: 0,
  sort: { name: "Популярности", sortProperty: "rating" },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSortType: (state, { payload }) => {
      state.sort = payload;
    },
    setCategoryId: (state, { payload }) => {
      state.categoryId = payload;
    },
  },
});

export const filterCategoryIdSelector = (state: Rootstate) =>
  state.filter.categoryId;
export const filterSortSelector = (state: Rootstate) => state.filter.sort;
export const filterSelector = (state: Rootstate) => state.filter;
export const { setCategoryId, setSortType } = filterSlice.actions;
export default filterSlice.reducer;
