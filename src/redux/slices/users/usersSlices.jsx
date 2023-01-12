import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// ================================================================
// register user action
// ================================================================

export const registerUserAction = createAsyncThunk(
  "users/register",
  async (value, { rejectWithValue, getState, dispatch }) => {
    try {
      // http call
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/users/register`,
        value,
        config
      );
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);
