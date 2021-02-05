class API {
  constructor(baseURL) {
    this._baseUrl = baseURL || process.env.REACT_APP_API_BASE_URL;
  }

  _headers = ({ customHeaders = {}, disableDefaultHeaders = false }) => {
    if (disableDefaultHeaders) {
      return customHeaders;
    }

    const defaultHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    return {
      ...defaultHeaders,
      ...customHeaders,
    };
  };

  async get(
    route,
    { disableDefaultHeaders, customHeaders, queryParams, credentials } = {}
  ) {
    let queryString = new URLSearchParams(queryParams).toString();
    if (queryString) queryString = `?${queryString}`;

    const response = await fetch(`${this._baseUrl}${route}${queryString}`, {
      method: 'GET',
      headers: this._headers({ customHeaders, disableDefaultHeaders }),
      credentials: credentials || 'include',
    });

    if (!response.ok) throw new Error(response.statusText);

    return await response.json();
  }

  async post(
    route,
    { body, disableDefaultHeaders, customHeaders, credentials } = {}
  ) {
    const response = await fetch(`${this._baseUrl}${route}`, {
      method: 'POST',
      headers: this._headers({ customHeaders, disableDefaultHeaders }),
      credentials: credentials || 'include',
      ...(body && { body: JSON.stringify(body) }),
    });

    if (!response.ok) throw new Error(response.statusText);

    return await response.json();
  }

  async delete(
    route,
    { body, disableDefaultHeaders, customHeaders, credentials } = {}
  ) {
    const response = await fetch(`${this._baseUrl}${route}`, {
      method: 'DELETE',
      headers: this._headers({ customHeaders, disableDefaultHeaders }),
      credentials: credentials || 'include',
      ...(body && { body: JSON.stringify(body) }),
    });

    if (!response.ok) throw new Error(response.statusText);

    return await response.json();
  }
}

export default API;
