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
// fetch all category action
// ================================================================

export const fetchAllCategoryAction = createAsyncThunk(
  "category/fetch",
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
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/category`,
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
// update category action
// ================================================================

export const updateCategoryAction = createAsyncThunk(
  "category/update",
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
      const { data } = await axios.put(
        `${process.env.REACT_APP_API_URL}/category/${value.id}`,
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
// delete category action
// ================================================================

export const deleteCategoryAction = createAsyncThunk(
  "category/delete",
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
      const { data } = await axios.delete(
        `${process.env.REACT_APP_API_URL}/category/${value.id}`,
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
      // console.log(action.payload.message);
    });
    builder.addCase(createCategoryAction.rejected, (state, action) => {
      //   console.log(action.payload);
      state.loading = false;
      toast.error(`${action.error.message} ${action.payload.message}`);
    });

    // fetch all category
    builder.addCase(fetchAllCategoryAction.pending, (state, action) => {
      state.loading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchAllCategoryAction.fulfilled, (state, action) => {
      state.loading = false;
      state.categoryList = action.payload.categories;
      state.appErr = undefined;
      state.serverErr = undefined;
      toast.success(action.payload.message);
      // console.log(action.payload.message);
    });
    builder.addCase(fetchAllCategoryAction.rejected, (state, action) => {
      //   console.log(action.payload);
      state.loading = false;
      state.appErr = action.payload.message;
      state.serverErr = action.error.message;
      toast.error(`${action.error.message} ${action.payload.message}`);
    });

    // update category
    builder.addCase(updateCategoryAction.pending, (state, action) => {
      state.loading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(updateCategoryAction.fulfilled, (state, action) => {
      state.loading = false;
      state.updateCategory = action.payload.updateCategory;
      state.appErr = undefined;
      state.serverErr = undefined;
      toast.success(action.payload.message);
      // console.log(action.payload.message);
    });
    builder.addCase(updateCategoryAction.rejected, (state, action) => {
      //   console.log(action.payload);
      state.loading = false;
      state.appErr = action.payload.message;
      state.serverErr = action.error.message;
      toast.error(`${action.error.message} ${action.payload.message}`);
    });

    // delete category
    builder.addCase(deleteCategoryAction.pending, (state, action) => {
      state.loading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(deleteCategoryAction.fulfilled, (state, action) => {
      state.loading = false;
      state.deleteCategory = action.payload.deleteCategory;
      state.appErr = undefined;
      state.serverErr = undefined;
      toast.success(action.payload.message);
      // console.log(action.payload.message);
    });
    builder.addCase(deleteCategoryAction.rejected, (state, action) => {
      //   console.log(action.payload);
      state.loading = false;
      state.appErr = action.payload.message;
      state.serverErr = action.error.message;
      toast.error(`${action.error.message} ${action.payload.message}`);
    });
  },
});

export default categorySlices.reducer;
