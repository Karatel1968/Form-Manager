import axios from 'axios';
import { User, UpdateUserDto, CreateUserDto } from '../model/userInterfaces';

const API_URL = 'http://localhost:3001/api/v1/users';

export const getUsers = async (token: string | null): Promise<User[]> => {
  try {
    const response = await axios.get(API_URL, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Failed to fetch users');
    }
    throw new Error('Unknown error occurred');
  }
};

export const createUser = async (userData: CreateUserDto, token: string | null): Promise<User> => {
  try {
    const response = await axios.post(API_URL, userData, {
      headers: { 
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Failed to create user');
    }
    throw new Error('Unknown error occurred');
  }
};


export const updateUser = async (
  id: string,
  userData: UpdateUserDto,
  token: string | null
): Promise<User> => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, userData, {
      headers: { 
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Failed to update user');
    }
    throw new Error('Unknown error occurred');
  }
};


export const deleteUser = async (id: string, token: string | null): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Failed to delete user');
    }
    throw new Error('Unknown error occurred');
  }
};


export const getUserById = async (id: string, token: string | null): Promise<User> => {
  try {
    const response = await axios.get(`${API_URL}/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'User not found');
    }
    throw new Error('Unknown error occurred');
  }
};