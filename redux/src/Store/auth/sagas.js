import {
  all,
  takeEvery,
  put,
  call,
} from 'redux-saga/effects';

import { login } from 'Api';

import { AUTH_ACTION_TYPES } from './action-types';
import { setToken, setError } from './actions';

export function* loginSaga({ payload }) {
  const { formValues } = payload;

  try {
    const token = yield call(login, formValues);

    yield put(setToken(token));
  } catch (error) {
    yield put(setError(error.message));
  }
}

export default function* authSagas() {
  yield all([
    takeEvery(AUTH_ACTION_TYPES.LOGIN, loginSaga),
  ]);
}
