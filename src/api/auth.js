import API from './baseClass';

class AuthAPI extends API {
  checkToken({ jwtToken }) {
    return this.get('/check_token', {
      customHeaders: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }

  authorize({ email, password }) {
    return this.post('/login', {
      body: {
        email,
        password,
      },
    });
  }
}

export default new AuthAPI();
