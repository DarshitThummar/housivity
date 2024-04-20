import { createSlice } from "@reduxjs/toolkit";
import { addLikeAction, getAllCategoriesAction } from ".";

const initialState = {
  getAllCategories: null,
  addLikedItems: null,
  error: null,
};

const categories = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategoriesAction.pending, (state) => {})
      .addCase(getAllCategoriesAction.fulfilled, (state, action) => {
        state.getAllCategories = action.payload;
      })
      .addCase(getAllCategoriesAction.rejected, (state, action) => {
        state.error = action.payload; // Make sure to handle the rejection correctly
      })

      // liked items
      .addCase(addLikeAction.pending, (state) => {})
      .addCase(addLikeAction.fulfilled, (state, action) => {
        state.addLikedItems = action.payload;
      })
      .addCase(addLikeAction.rejected, (state, action) => {
        state.error = action.payload; // Make sure to handle the rejection correctly
      });
  },
});

export default categories.reducer;
