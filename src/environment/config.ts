const config = {
  baseURL: 'http://127.0.0.1:8000/',
  auth: {
    localStorageKey: 'token',
    loginEndpoint: 'api/user/token',
    registerEndpoint: 'api/user/create',
  },
  products: {
    list: '/api/products/',
  },
};

export default config;
