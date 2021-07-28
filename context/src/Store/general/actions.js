import {
  setValue,
  setError,
} from './action-creators';

export const getGeneralHandlers = (dispatch) => ({
  setValue: (value) => {
    dispatch(setValue(value));
  },
  setError: (message) => {
    dispatch(setError(message));
  },
});
