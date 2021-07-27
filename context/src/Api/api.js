const mockedUser = {
  login: 'User',
  password: 'pass',
};

export const login = (values) => {
  return new Promise((res, rej) => {
    if (values.login === mockedUser.login
      && values.password === mockedUser.password) {
      res();
    } else {
      rej('Credentials are invalid');
    }
  });
};
