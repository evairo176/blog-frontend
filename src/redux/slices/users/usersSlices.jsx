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

// ================================================================
// register user action
// ================================================================

export const loginUserAction = createAsyncThunk(
  "users/login",
  async (value, { rejectWithValue, getState, dispatch }) => {
    try {
      // http call
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
    } catch (error) {}
  }
);

// ================================================================
// slices
// ================================================================

const userSlices = createSlice({
  name: "users",
  initialState: {
    userAuth: "login",
  },
  extraReducers: (builder) => {
    // register
    builder.addCase(registerUserAction.pending, (state, action) => {
      state.loading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(registerUserAction.fulfilled, (state, action) => {
      state.loading = false;
      state.registered = action.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(registerUserAction.rejected, (state, action) => {
      //   console.log(action.payload);
      state.loading = false;
      state.appErr = action.payload.message;
      state.serverErr = action.error.message;
    });
  },
});

export default userSlices.reducer;
