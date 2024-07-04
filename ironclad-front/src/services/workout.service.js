import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

export const createWorkout = async (data) => { 
  try {
    console.log(data, "service");
    const response = await axios.post(`${URL}/workout`, data);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

export const getUserWorkouts = async (userId) => {
  try {
    const response = await axios.get(`${URL}/workout/user/${userId.userId}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

export const getWorkout = async (workoutId) => {
  try {
    const response = await axios.get(`${URL}/workout/${workoutId.id}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}