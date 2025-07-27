import {User} from '../../model/userInterfaces'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getUsers, createUser, deleteUser } from '../../api/users';
import { RootState } from './store';
import { UserFormData } from '../../model/userInterfaces';

interface UsersState {
  list: User[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: UsersState = {
  list: [],
  status: 'idle',
  error: null,
};


export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, { getState }) => {
    const state = getState() as RootState;
    const token = state.auth.token;
    return await getUsers(token!);
  }
);

export const addUser = createAsyncThunk(
  'users/create',
  async (userData: UserFormData, { getState }) => {
    const token = (getState() as RootState).auth.token;
    return await createUser(userData, token!);
  }
);

export const removeUser = createAsyncThunk(
  'users/delete',
  async (id: string, { getState }) => {
    const token = (getState() as RootState).auth.token;
    await deleteUser(id, token!);
    return id;
  }
);

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch users';
      })
      .addCase(addUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.list.push(action.payload);
      })
      .addCase(removeUser.fulfilled, (state, action: PayloadAction<string>) => {
        state.list = state.list.filter(user => user.id !== action.payload);
      });
  },
});


export const selectAllUsers = (state: RootState) => state.users.list;
export const selectUsersStatus = (state: RootState) => state.users.status;

export default usersSlice.reducer;