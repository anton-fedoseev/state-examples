import { GENERAL_ACTION_TYPES } from './action-types';

export const generalInitialState = {
  value: 'some value',
  error: false,
};

export const generalReducer = (state, action) => {
  switch (action.type) {
    case GENERAL_ACTION_TYPES.SET_VALUE:
      return {
        ...state,
        token: action.payload.token,
      };

    case GENERAL_ACTION_TYPES.SET_ERROR:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};
