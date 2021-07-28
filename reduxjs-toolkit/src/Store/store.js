import thunk from 'redux-thunk';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  authSlice,
  generalSlice,
} from './slices';

const reducer = combineReducers({
  auth: authSlice.reducer,
  general: generalSlice.reducer,
});

export const store = configureStore({
  reducer,
  middleware: [thunk],
});
