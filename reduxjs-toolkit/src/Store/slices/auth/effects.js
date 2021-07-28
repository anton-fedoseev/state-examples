import { createAsyncThunk } from '@reduxjs/toolkit';

import { login as loginRequest } from 'Api';

export const login = createAsyncThunk(
  'auth/login',
  async (values, thunkApi) => {
    try {
      const token = await loginRequest(values);

      return token;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
