import todoService from "./todoService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { extractErrorMessage } from "../../utils/index";

const initialState = {
  todo: null,
  todos: [],
  isLoading: false,
  message: "",
};

export const addTodo = createAsyncThunk(
  "todo/addTodo",
  async (userData, thunkAPI) => {
    try {
      return await todoService.addTodo(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

export const getAllTodo = createAsyncThunk(
  "todo/getAllTodo",
  async (_, thunkAPI) => {
    try {
      return await todoService.getAllTodo();
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

export const updateTodo = createAsyncThunk(
  "todo/updateTodo",
  async (id, thunkAPI) => {
    try {
      return await todoService.updateTodo(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todo/deleteTodo",
  async (id, thunkAPI) => {
    try {
      return await todoService.deleteTodo(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllTodo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllTodo.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(getAllTodo.rejected, (state, action) => {
        state.message = action.payload;
      })
      .addCase(addTodo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todo = action.payload;
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.message = action.payload;
      })
      .addCase(updateTodo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.todo = action.payload;
      })
      .addCase(updateTodo.rejected, (state, action) => {
        state.message = action.payload;
      })
      .addCase(deleteTodo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todo = action.payload;
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.message = action.payload;
      });
  },
});

export default todoSlice.reducer;
