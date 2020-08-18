import { configureStore } from '@reduxjs/toolkit';

import authReducer from './users/authSlice';
import productReducer from './products/productSlice';
import transactionReducer from './transactions/transactionSlice';

const reducer = {
  auth: authReducer,
  products: productReducer,
  transactions: transactionReducer,
};

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
