import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

export const getTemplates = async () => {
  try {
    const response = await axios.get(`${URL}/template`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

export const getTemplate = async (id) => {
  try {
    const response = await axios.get(`${URL}/template/${id.id}`);;
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}