import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

// ================================================================
// create acton crud
// ================================================================
const resetCreateAction = createAction("post/reset-create");

// ================================================================
// create post action
// ================================================================

export const createPostAction = createAsyncThunk(
  "post/create",
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
        `${process.env.REACT_APP_API_URL}/posts`,
        {
          title: value?.title,
          description: value?.description,
          category: value?.category,
        },
        config
      );
      dispatch(resetCreateAction());
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

const postSlices = createSlice({
  name: "posts",
  initialState: {},
  extraReducers: (builder) => {
    //create post
    builder.addCase(resetCreateAction, (state, action) => {
      state.isCreated = true;
    });
    builder.addCase(createPostAction.pending, (state, action) => {
      state.loading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(createPostAction.fulfilled, (state, action) => {
      state.postCreated = action?.payload?.post;
      state.isCreated = false;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
      toast.success(action?.payload?.message);
    });
    builder.addCase(createPostAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action.payload.message;
      state.serverErr = action.error.message;
      toast.error(`${action.error.message} ${action.payload.message}`);
    });
  },
});

export default postSlices.reducer;
