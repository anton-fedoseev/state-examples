import { GENERAL_ACTION_TYPES } from './action-types';

export const setValue = (value) => ({
  type: GENERAL_ACTION_TYPES.SET_VALUE,
  payload: { value },
});

export const setError = () => ({
  type: GENERAL_ACTION_TYPES.SET_ERROR,
});
