import { makeAutoObservable } from 'mobx';

class GeneralModel {
  value = '';

  error = '';

  constructor() {
    makeAutoObservable(this);
  }

  setValue(value) {
    this.value = value;
  }

  setError(error) {
    this.error = error;
  }
}

export const generalModel = new GeneralModel();
