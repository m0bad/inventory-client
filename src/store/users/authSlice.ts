import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthState, LoginPayload, RegisterPayload } from '../../types/user';
import { AuthAPi } from '../../api/users/auth';

const client = new AuthAPi();

const initialState: AuthState = {
  loggedIn: false,
  loading: false,
  error: false,
};

export const registerUser = createAsyncThunk('auth/register', async (payload: RegisterPayload) => {
  try {
    await client.registerUser(payload);
    const result = await client.loginUser({ email: payload.email, password: payload.password });
    client.setToken(result.token);
  } catch (err) {
    throw new Error(`ERROR IN registerUser: ${err}`);
  }
});

export const loginUser = createAsyncThunk('auth/login', async (payload: LoginPayload) => {
  try {
    const response = await client.loginUser(payload);
    client.setToken(response.token);
    return response.token;
  } catch (err) {
    throw new Error(`ERROR IN loginUser: ${err}`);
  }
});

export const logoutUser = createAsyncThunk('auth/logout', async () => {
  client.setToken('');
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [loginUser.pending.type]: state => {
      return { ...state, loading: true, error: false };
    },
    [loginUser.fulfilled.type]: state => {
      return { ...state, loading: false, loggedIn: true };
    },
    [loginUser.rejected.type]: state => {
      return { ...state, loading: false, error: false };
    },
    [logoutUser.pending.type]: state => {
      return { ...state, loading: true, error: false };
    },
    [logoutUser.fulfilled.type]: state => {
      return { ...state, loading: false, error: false, loggedIn: false };
    },
    [logoutUser.rejected.type]: state => {
      return { ...state, loading: false, error: true };
    },
  },
});

export default authSlice.reducer;
