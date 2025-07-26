import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1/users';

export const getUsers = async (token: string) => {
  const response = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};

export const createUser = async (userData: any, token: string) => {
  const response = await axios.post(API_URL, userData, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};