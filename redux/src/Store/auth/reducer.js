import { AUTH_ACTION_TYPES } from './action-types';

const initialState = {
  token: '',
  error: '',
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_ACTION_TYPES.SET_TOKEN:
      return {
        ...state,
        token: action.payload.token,
        error: false,
      };

    case AUTH_ACTION_TYPES.SET_ERROR:
      return {
        ...state,
        error: action.payload.message,
      };

    case AUTH_ACTION_TYPES.RESET_META:
      return {
        error: '',
      };

    default:
      return state;
  }
};
