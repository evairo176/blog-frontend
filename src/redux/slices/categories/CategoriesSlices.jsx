import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createCategoryAction = createAsyncThunk(
  "category/create",
  async (value, { rejectWithValue, getState, dispatch }) => {}
);
