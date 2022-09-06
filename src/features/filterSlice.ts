import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: { name: "Популярности", 
  sortProperty: "rating" },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    
    setSortType: (state, { payload }) => {
      state.sort = payload;
    },
    setCategoryId: (state, { payload }) => {
        state.categoryId = payload;
    }
  },
});

export const filterCategoryIdSelector = (state) => state.filter.categoryId
export const filterSortSelector = (state) => state.filter.sort
export const filterSelector = (state) => state.filter
export const {setCategoryId, setSortType } = filterSlice.actions
export default filterSlice.reducer;
