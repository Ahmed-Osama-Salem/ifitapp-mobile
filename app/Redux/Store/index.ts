import {configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import userSlice from 'Redux/Slices/userSlice';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import BlogReducer from '../Slices/Blog/BlogSlice';

const userPersistConfig = {
  key: 'user',
  storage: AsyncStorage,
  whitelist: ['user'], // Optional: Persist only specific keys
};

const persistedReducer = persistReducer(userPersistConfig, userSlice);

// Manually configure middleware array
const middleware = [thunk]; // Add other middleware here if needed

// Use configureStore from Redux Toolkit
const store = configureStore({
  reducer: {
    user: persistedReducer,
    blogs: BlogReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // Ignore persist actions
      },
    }),
});

const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export {persistor, store};
