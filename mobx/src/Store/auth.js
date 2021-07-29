import { makeAutoObservable } from 'mobx';

import { login } from 'Api';

class AuthModel {
  token = '';

  error = '';

  constructor() {
    makeAutoObservable(this);
  }

  setToken(token) {
    this.token = token;
  }

  setError(error) {
    this.error = error;
  }

  resetMeta() {
    this.error = '';
  }

  * login(values) {
    try {
      const token = yield login(values);

      this.setToken(token);
    } catch (error) {
      this.setError(error.message);
    }
  }
}

export const authModel = new AuthModel();
