import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: { name: "Популярности", 
  sortProperty: "rating" },
};

const filterSlice = createSlice({
  name: 'filters',
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
export const {setCategoryId, setSortType } = filterSlice.actions
export default filterSlice.reducer;
