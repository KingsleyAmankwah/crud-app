import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API_URL = `${BACKEND_URL}/todo/`;

const addTodo = async (todoData) => {
  const response = await axios.post(API_URL + "add", todoData);

  return response.data;
};

const getAllTodo = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const deleteTodo = async (id) => {
  const response = await axios.delete(API_URL + id);

  return response.data.message;
};

const updateTodo = async (id) => {
  const response = await axios.put(API_URL + id);

  return response.data;
};

const todoService = {
  addTodo,
  getAllTodo,
  deleteTodo,
  updateTodo,
};

export default todoService;
