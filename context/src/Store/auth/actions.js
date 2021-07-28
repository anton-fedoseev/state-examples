import { login } from 'Api';

import {
  setToken,
  setError,
  resetMeta,
} from './action-creators';

export const getAuthHandlers = (dispatch) => ({
  login: async (formValues) => {
    try {
      const token = await login(formValues);

      dispatch(setToken(token));
    } catch (error) {
      dispatch(setError(error.message));
    }
  },
  resetMeta: () => {
    dispatch(resetMeta());
  },
});
