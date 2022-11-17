import axios from "axios";

const API_URL = axios.create({ baseURL: "http://localhost:8000" });

// export const createUser = (userData) => API_URL.post("/api/users/", userData);

const createUser = async (userData) => {
  const response = await API_URL.post("/api/users/", userData);

  return response.data;
};

const userService = {
  createUser,
};

export default userService;
