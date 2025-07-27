import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface AuthState {
  token: string | null;
  email: string | null;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: AuthState = {
  token: null,
  email: null,
  status: 'idle',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ token: string; email: string }>) => {
      state.token = action.payload.token;
      state.email = action.payload.email;
    },
    logout: (state) => {
      state.token = null;
      state.email = null;
    },
    setStatus: (state, action: PayloadAction<AuthState['status']>) => {
      state.status = action.payload;
    },
  },
});

export const { setCredentials, logout, setStatus } = authSlice.actions;

export const selectToken = (state: RootState) => state.auth.token;
export const selectAuthStatus = (state: RootState) => state.auth.status;

export default authSlice.reducer;