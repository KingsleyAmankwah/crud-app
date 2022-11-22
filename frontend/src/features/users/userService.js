import axios from "axios";

const SERVER_URL = "http://localhost:8000";
const API_URL = `${SERVER_URL}/api/users/`;

//Create User
const createUser = async (userData) => {
  const response = await axios.post(API_URL, userData);

  return response.data;
};

const getUsers = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

//Get Single user
const getUser = async (id) => {
  // console.log(API_URL + id);
  const response = await axios.get(API_URL + id);
  return response.data;
};

//Update user
const updateUser = async (updatedData, userId) => {
  const response = await axios.patch(`${API_URL}${userId}`, updatedData);

  return response.data;
};

//Delete User
const deleteUser = async (id) => {
  const response = await axios.delete(API_URL + id);
  return response.data;
};

const userService = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};

export default userService;
