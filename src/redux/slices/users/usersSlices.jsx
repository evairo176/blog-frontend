import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// ================================================================
// register user action
// ================================================================

export const registerUserAction = createAsyncThunk(
  "users/register",
  async (user, { rejectWithValue, getState, dispatch }) => {
    try {
      // http call
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axios.request;
    } catch (error) {}
  }
);
