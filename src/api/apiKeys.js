import API from './baseClass';

class KeysAPI extends API {
  getKey({ email, jwtToken }) {
    return this.get('/api_keys/get_key', {
      customHeaders: {
        Authorization: `Bearer ${jwtToken}`,
      },
      queryParams: {
        email,
      },
    });
  }

  addKey({ email, jwtToken }) {
    return this.post('/api_keys/add_key', {
      body: { email },
      customHeaders: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }

  deleteKey({ email, jwtToken }) {
    return this.delete('/api_keys/delete_key', {
      body: { email },
      customHeaders: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
  }
}

export default new KeysAPI();
