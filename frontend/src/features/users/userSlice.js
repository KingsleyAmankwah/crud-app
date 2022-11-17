import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "./userService";

const initialState = {
  Name: "",
  Location: "",
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
      // navigate("/");
      return response.data;
    } catch (error) {
      // console.log(error);
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
      });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
