const config = {
  baseURL: 'http://127.0.0.1:8000/',
  auth: {
    localStorageKey: 'token',
    loginEndpoint: 'api/user/token',
    registerEndpoint: 'api/user/create',
  },
  user: {
    localStorageKey: 'user',
    currentUser: 'api/user/me/',
  },
  products: {
    list: '/api/products/',
    my: '/api/products/my-products/',
  },
  transaction: {
    my: '/api/transactions/my-transactions/',
  },
};

export default config;
