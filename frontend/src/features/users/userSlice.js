import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "./userService";

const initialState = {
  Name: "",
  Location: "",
};

export const createUser = createAsyncThunk(
  "users/create",
  async (userData, thunkAPI) => {
    try {
      return await userService.createUser(userData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
    // console.log(error);
    // }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
