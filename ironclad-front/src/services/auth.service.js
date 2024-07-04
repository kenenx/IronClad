import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${URL}/auth/login`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
  export const register = async (username, password) => {
    try {
      const response = await axios.post(`${URL}/auth/register`, {
        username,
        password,
      });
      return response;
    } catch (error) {
      throw new Error(error);
    }
}
  
export const updateUser = async (data) => {
  try {
    const response = await axios.put(`${URL}/auth/`, data);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

