import { AUTH_ACTION_TYPES } from './action-types';

export const login = (formValues) => ({
  type: AUTH_ACTION_TYPES.LOGIN,
  payload: { formValues },
});

export const setToken = (token) => ({
  type: AUTH_ACTION_TYPES.SET_TOKEN,
  payload: { token },
});

export const setError = (message) => ({
  type: AUTH_ACTION_TYPES.SET_ERROR,
  payload: { message },
});

export const resetMeta = () => ({
  type: AUTH_ACTION_TYPES.RESET_META,
});
