import axios from "axios";

const API_URL = "/api/users";

const LOGIN_URL = "/api/users/login";

//Register Users
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  console.log(response.data);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// Login Users
const login = async (userData) => {
  const response = await axios.post(LOGIN_URL, userData);
  // console.log(response.data);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// Logout User
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
