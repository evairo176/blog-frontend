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
      const formData = new FormData();
      formData.append("title", value?.title);
      formData.append("description", value?.description);
      formData.append("category", value?.category);
      formData.append("image", value?.image);
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/posts`,
        formData,
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
// fetch all post action
// ================================================================

export const fetchAllPostAction = createAsyncThunk(
  "posts/fetch",
  async (value, { rejectWithValue, getState, dispatch }) => {
    // console.log(value);
    const url = `${process.env.REACT_APP_API_URL}/posts?page=${
      value.page
    }&sort=${value.sort.sort},${
      value.sort.order
    }&category=${value.filterCategory.toString()}&search=${value.search}`;
    try {
      const { data } = await axios.get(url);
      // console.log(data);
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
// add likes post action
// ================================================================

export const addLikePostAction = createAsyncThunk(
  "posts/likes",
  async (values, { rejectWithValue, getState, dispatch }) => {
    const user = getState()?.users;
    const { userAuth } = user;
    const token = userAuth?.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_API_URL}/posts/likes`,
        {
          postId: values,
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
// add dislike post action
// ================================================================

export const addDisLikePostAction = createAsyncThunk(
  "posts/dislikes",
  async (values, { rejectWithValue, getState, dispatch }) => {
    const user = getState()?.users;
    const { userAuth } = user;
    const token = userAuth?.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_API_URL}/posts/dislikes`,
        {
          postId: values,
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
// add dislike post action
// ================================================================

export const fetchPostById = createAsyncThunk(
  "posts/detail-by-id",
  async (values, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/posts/${values}`,
        {
          postId: values,
        }
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
// fetch Post By Id Update
// ================================================================

export const fetchPostByIdUpdate = createAsyncThunk(
  "posts/post-update-by-id",
  async (values, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/posts/user/${values}`,
        {
          postId: values,
        }
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

    // fetch all post
    builder.addCase(fetchAllPostAction.pending, (state, action) => {
      if (state.loadingLikes || state.loadingDisLikes) {
        state.loading = false;
        state.loadingLikes = false;
        state.loadingDisLikes = false;
      } else {
        state.loading = true;
      }
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchAllPostAction.fulfilled, (state, action) => {
      // console.log(action.payload.post);
      state.loading = false;
      state.postList = action.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
      // console.log(action.payload.message);
    });
    builder.addCase(fetchAllPostAction.rejected, (state, action) => {
      //   console.log(action.payload);
      state.loading = false;
      state.appErr = action.payload.message;
      state.serverErr = action.error.message;
    });

    // add likes action
    builder.addCase(addLikePostAction.pending, (state, action) => {
      state.loadingLikes = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(addLikePostAction.fulfilled, (state, action) => {
      // console.log(action.payload.post);
      state.likes = action.payload.post;
      state.appErr = undefined;
      state.serverErr = undefined;
      toast.success(`${action.payload.message}`);
      // console.log(action.payload.message);
    });
    builder.addCase(addLikePostAction.rejected, (state, action) => {
      //   console.log(action.payload);
      state.appErr = action.payload.message;
      state.serverErr = action.error.message;
    });

    // add dislikes action
    builder.addCase(addDisLikePostAction.pending, (state, action) => {
      state.loadingDisLikes = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(addDisLikePostAction.fulfilled, (state, action) => {
      // console.log(action.payload.post);
      state.dislikes = action.payload.post;
      state.appErr = undefined;
      state.serverErr = undefined;
      toast.success(`${action.payload.message}`);
      // console.log(action.payload.message);
    });
    builder.addCase(addDisLikePostAction.rejected, (state, action) => {
      //   console.log(action.payload);
      state.appErr = action.payload.message;
      state.serverErr = action.error.message;
    });

    // fetch post by id
    builder.addCase(fetchPostById.pending, (state, action) => {
      state.loading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchPostById.fulfilled, (state, action) => {
      state.loading = false;
      state.postDetail = action.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
      // toast.success(`${action.payload.message}`);
      // console.log(action.payload.message);
    });
    builder.addCase(fetchPostById.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action.payload.message;
      state.serverErr = action.error.message;
    });

    // fetch Post By Id Update
    builder.addCase(fetchPostByIdUpdate.pending, (state, action) => {
      state.loading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchPostByIdUpdate.fulfilled, (state, action) => {
      state.loading = false;
      state.postDetailUpdate = action.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
      // toast.success(`${action.payload.message}`);
      // console.log(action.payload.message);
    });
    builder.addCase(fetchPostByIdUpdate.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action.payload.message;
      state.serverErr = action.error.message;
    });
  },
});

export default postSlices.reducer;
