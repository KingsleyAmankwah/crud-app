import axios from "axios";

const API_URL = "/api/users/";

const createUser = async (userData) => {
  const headers = {
    "Content-Type": "application/json",
    // Authorization: "JWT fefege...",
  };
  const response = await axios.post(API_URL, userData, headers);

  return response.data;
};

const userService = {
  createUser,
};

export default userService;
