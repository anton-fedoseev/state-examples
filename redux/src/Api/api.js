const mockedUser = {
  login: 'User',
  password: 'pass',
};

export const login = (values) => new Promise((res, rej) => {
  if (values.login === mockedUser.login
    && values.password === mockedUser.password) {
    res('some token');
  } else {
    rej(new Error('Credentials are invalid'));
  }
});
