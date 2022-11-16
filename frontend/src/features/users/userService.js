import axios from "axios";

const API_URL = "/api/users/";

const createUser = async (userData) => {
  const response = await axios.post(API_URL, userData);

  return response.data;
};

const userService = {
  createUser,
};

export default userService;
