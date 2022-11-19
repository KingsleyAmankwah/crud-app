import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "./userService";

const initialState = {
  user: [],
  message: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
};

export const createUser = createAsyncThunk(
  "users/create",
  async ({ userData, toast }, { rejectWithValue }) => {
    try {
      const response = await userService.createUser(userData);
      toast.success("User Added Successfully");
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const getUsers = createAsyncThunk(
  "users/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await userService.getUsers();
      console.log(response);
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const getUser = createAsyncThunk(
  "users/getSingleUser",
  async ({ userId }, { rejectWithValue }) => {
    try {
      const response = await userService.getUser(userId);
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "users/delete",
  async ({ userId, toast }, { rejectWithValue }) => {
    try {
      const response = await userService.deleteUser(userId);
      toast.success("User deleted Successfully");
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
