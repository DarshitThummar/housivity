import { configureStore } from "@reduxjs/toolkit";
import categories from "./categories/categories";

const store = configureStore({
  reducer: {
    categories: categories,
  },
});

export default store;
