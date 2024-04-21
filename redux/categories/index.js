import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllCategoriesAction = createAsyncThunk(
  "categories/getAllCategories",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/property`
      );
      // You may want to return some data here if needed
      return response.data;
    } catch (error) {
      console.error("Error creating user:", error);
      // You can handle the error here or throw it again if needed
      return rejectWithValue(error);
    }
  }
);

export const addLikeAction = createAsyncThunk(
  "categories/addLike",
  async (id, { rejectWithValue, dispatch }) => {
    let items = JSON.parse(localStorage.getItem("likeeItems")) || [];
    if (!items.includes(id)) {
      items.push(id);
      localStorage.setItem("likeeItems", JSON.stringify(items));
    } else {
      console.log("ID already exists in the array.");
    }
  }
);

export const disLikeAction = createAsyncThunk(
  "categories/addLike",
  async (id, { rejectWithValue, dispatch }) => {
    let items = JSON.parse(localStorage.getItem("likeeItems")) || [];
    items = items.filter((itemId) => itemId !== id);
    console.log("ID already exists in the array. Removing it.");
    localStorage.setItem("likeeItems", JSON.stringify(items));
  }
);
