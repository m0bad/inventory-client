import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthState, LoginPayload, RegisterPayload } from '../../types/user';
import { AuthAPi } from '../../api/users/auth';
import { UserAPi } from '../../api/users/user';

const authClient = new AuthAPi();

const initialState: AuthState = {
  loggedIn: false,
  loading: false,
  error: false,
  currentUser: null,
};

const setCurrentUser = async (loggedOut = false) => {
  const userClient = new UserAPi();
  if (loggedOut) {
    userClient.setUser(null);
  } else {
    const currentUser = await userClient.getCurrentUser();
    userClient.setUser(currentUser);
  }
};

export const registerUser = createAsyncThunk('auth/register', async (payload: RegisterPayload) => {
  try {
    await authClient.registerUser(payload);
    const result = await authClient.loginUser({ email: payload.email, password: payload.password });
    authClient.setToken(result.token);
    await setCurrentUser();
  } catch (err) {
    throw new Error(`ERROR IN registerUser: ${err}`);
  }
});

export const loginUser = createAsyncThunk('auth/login', async (payload: LoginPayload) => {
  try {
    const response = await authClient.loginUser(payload);
    await authClient.setToken(response.token);
    await setCurrentUser();
    return response.token;
  } catch (err) {
    throw new Error(`ERROR IN loginUser: ${err}`);
  }
});

export const logoutUser = createAsyncThunk('auth/logout', async () => {
  authClient.setToken('');
  await setCurrentUser(true);
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  // @ts-ignore
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
