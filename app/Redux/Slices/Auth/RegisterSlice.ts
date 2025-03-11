import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AuthService from 'server/auth/AuthService';

interface AuthState {
  user: any | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

export const registerUserThunk = createAsyncThunk(
  'auth/loginUser',
  async ({
    email,
    password,
    first_name,
    last_name,
  }: {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
  }) => {
    try {
      const payload = {
        email,
        password,
        first_name,
        last_name,
      };
      const response = await AuthService.register(payload);

      return response;
    } catch (error: any) {
      return error;
    }
  },
);

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registerUserThunk.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUserThunk.fulfilled, state => {
        state.loading = false;
        // state.user = action.payload;
      })
      .addCase(registerUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Login failed';
      });
  },
});

export default registerSlice.reducer;
