import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

// ================================================================
// action to redirect
// ================================================================
const resetEditAction = createAction("category/reset");
const resetDeleteAction = createAction("category/delete-reset");
const resetCreateAction = createAction("category/create-reset");

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
        {
          title: value.title,
        },
        config
      );
      dispatch(resetEditAction());
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
      dispatch(resetDeleteAction());
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
// detail category by id action
// ================================================================

export const detailCategoryByIdAction = createAsyncThunk(
  "category/detail",
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
        `${process.env.REACT_APP_API_URL}/category/${value}`,
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
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(resetCreateAction, (state, action) => {
      state.isCreated = true;
    });

    builder.addCase(createCategoryAction.fulfilled, (state, action) => {
      state.loading = false;
      state.category = action.payload;
      state.isCreated = false;
      toast.success(action.payload.message);
      state.appErr = undefined;
      state.serverErr = undefined;
      // console.log(action.payload.message);
    });
    builder.addCase(createCategoryAction.rejected, (state, action) => {
      //   console.log(action.payload);
      state.loading = false;
      toast.error(`${action.error.message} ${action.payload.message}`);
      state.appErr = action.payload.message;
      state.serverErr = action.error.message;
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
      // console.log(action.payload.message);
    });
    builder.addCase(fetchAllCategoryAction.rejected, (state, action) => {
      //   console.log(action.payload);
      state.loading = false;
      state.appErr = action.payload.message;
      state.serverErr = action.error.message;
    });

    // update category
    builder.addCase(updateCategoryAction.pending, (state, action) => {
      state.loading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });

    builder.addCase(resetEditAction, (state, action) => {
      state.isEdited = true;
    });
    builder.addCase(updateCategoryAction.fulfilled, (state, action) => {
      state.loading = false;
      state.updateCategory = action.payload.updateCategory;
      state.isEdited = false;
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
    builder.addCase(resetDeleteAction, (state, action) => {
      state.isDeleted = true;
    });
    builder.addCase(deleteCategoryAction.pending, (state, action) => {
      state.loading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(deleteCategoryAction.fulfilled, (state, action) => {
      state.loading = false;
      state.deleteCategory = action.payload.deleteCategory;
      state.isDeleted = false;
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

    // detail category by id show
    builder.addCase(detailCategoryByIdAction.pending, (state, action) => {
      state.loading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(detailCategoryByIdAction.fulfilled, (state, action) => {
      state.loading = false;
      state.detailCategory = action.payload.detailCategory;
      state.appErr = undefined;
      state.serverErr = undefined;
      // console.log(action.payload.message);
    });
    builder.addCase(detailCategoryByIdAction.rejected, (state, action) => {
      //   console.log(action.payload);
      state.loading = false;
      state.appErr = action.payload.message;
      state.serverErr = action.error.message;
    });
  },
});

export default categorySlices.reducer;
