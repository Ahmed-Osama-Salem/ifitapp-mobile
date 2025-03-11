import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorageHelper from '../../utils/AsyncStorageHelper';
import {deleteTokens} from 'utils/keyChain';

export interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
}

interface userState {
  user: User | null;
}

const initialState: userState = {
  user: null,
};

export const removeUser = createAsyncThunk(
  'user/logout',
  async (_, {dispatch, getState}) => {
    await AsyncStorageHelper.removeItem('user');
    await deleteTokens();
    // (getState() as RootState).favorites.favoriteSlugs = [];
    dispatch(setUser(initialState.user));
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User | null>) {
      state.user = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(removeUser.fulfilled, state => {
      state.user = initialState.user;
    });
  },
});

export const {setUser} = userSlice.actions;

export default userSlice.reducer;
