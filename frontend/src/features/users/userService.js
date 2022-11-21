import axios from "axios";

const SERVER_URL = process.env.BACKEND_URL;
const API_URL = `${SERVER_URL}/api/users`;

const createUser = async (userData) => {
  const response = await axios.post(API_URL, userData);

  return response.data;
};

const getUsers = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

//Get Single user
const getUser = async (userId) => {
  const response = await axios.get(API_URL + userId);

  return response.data;
};

const updateUser = async (updatedData, userId) => {
  const response = await axios.patch(`${API_URL}${userId}`, updatedData);

  return response.data;
};

const deleteUser = async (userId) => {
  const response = await API_URL.delete(`/api/users/${userId}`);
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
