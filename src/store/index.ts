import { configureStore } from '@reduxjs/toolkit';

import authReducer from './users/authSlice';
import productReducer from './products/productSlice';

const reducer = {
  auth: authReducer,
  products: productReducer,
};

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
