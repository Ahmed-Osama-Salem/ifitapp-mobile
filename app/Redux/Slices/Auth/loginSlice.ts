import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AuthService from 'server/auth/AuthService';
import {setUser} from '../userSlice';
import {saveTokensInKeyChain} from 'utils/keyChain';

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

export const loginUserThunk = createAsyncThunk(
  'auth/loginUser',
  async ({email, password}: {email: string; password: string}, {dispatch}) => {
    const response = await AuthService.login(email, password);
    dispatch(setUser(response.data.data.data));
    const token = response.data.data.tokens.access;
    const refreshToken = response.data.data.tokens.refresh;

    await saveTokensInKeyChain(token, refreshToken);
    return response.data;
  },
);

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginUserThunk.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUserThunk.rejected, state => {
        state.loading = false;
        state.error = null;
      });
  },
});

export default loginSlice.reducer;
