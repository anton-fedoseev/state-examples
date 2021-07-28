import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'some value',
  error: false,
};

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload.token;
    },
    setError: (state, action) => {
      state.error = action.payload.message;
    },
  },
});
