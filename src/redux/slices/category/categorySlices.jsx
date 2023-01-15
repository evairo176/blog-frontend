import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

// ================================================================
// create category action
// ================================================================

export const createCategoryAction = createAsyncThunk(
  "category/create",
  async (value, { rejectWithValue, getState, dispatch }) => {
    const user = getState()?.users;
    const { userAuth } = user;
    const token = userAuth?.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/category`,
        {
          title: value?.title,
        },
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
// slices
// ================================================================

const categorySlices = createSlice({
  name: "category",
  initialState: { category: "abc" },
  extraReducers: (builder) => {
    // create category
    builder.addCase(createCategoryAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createCategoryAction.fulfilled, (state, action) => {
      state.loading = false;
      state.category = action.payload;
      toast.success(action.payload.message);
      console.log(action.payload.message);
    });
    builder.addCase(createCategoryAction.rejected, (state, action) => {
      //   console.log(action.payload);
      state.loading = false;
      toast.error(`${action.error.message} ${action.payload.message}`);
    });
  },
});

export default categorySlices.reducer;
