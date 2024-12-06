import axios from 'axios';

const BASE_URL = window.appSettings?.apiUrl ?? 'http://localhost:3000'

export const getRequest = async (url, params = {}) => {
  try {
    const response = await axios.get(`${BASE_URL}/${url}`, { params });
    return response.data;
  } catch (error) {
    console.error("Error in GET request:", error);
    throw error;
  }
};

export const postRequest = async (url, data = {}) => {
  try {
    const response = await axios.post(`${BASE_URL}/${url}`, data);
    return response.data;
  } catch (error) {
    console.error("Error in POST request:", error);
    throw error;
  }
};
