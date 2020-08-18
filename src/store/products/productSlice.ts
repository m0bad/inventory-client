import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { IProduct, IProductPayload } from '../../types/product';
import { ProductsApi } from '../../api/products/product';

const productsApi = new ProductsApi();
const productsAdapter = createEntityAdapter({
  selectId: (product: IProduct) => product.id,
});

const initialState = productsAdapter.getInitialState({
  loading: false,
  error: null,
  products: [],
});

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  return productsApi.getAllProducts();
});

export const fetchMyProducts = createAsyncThunk('my-products/fetch', async () => {
  return productsApi.getMyProducts();
});

export const createProduct = createAsyncThunk('products/create', async (payload: IProductPayload) => {
  return productsApi.createProduct(payload);
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  // @ts-ignore
  extraReducers: {
    [fetchProducts.pending.type]: state => {
      return { ...state, loading: true, error: false };
    },
    [fetchProducts.fulfilled.type]: (state, { payload }) => {
      return {
        ...productsAdapter.setAll({ ...state }, payload),
        loading: false,
        error: null,
      };
    },
    [fetchProducts.rejected.type]: state => {
      return { ...state, loading: false, error: true };
    },
    [fetchMyProducts.pending.type]: state => {
      return { ...state, loading: true, error: false };
    },
    [fetchMyProducts.fulfilled.type]: (state, { payload }) => {
      return {
        ...productsAdapter.setAll({ ...state }, payload),
        loading: false,
        error: null,
      };
    },
    [fetchMyProducts.rejected.type]: state => {
      return { ...state, loading: false, error: true };
    },
    [createProduct.pending.type]: state => {
      return { ...state, loading: true, error: false };
    },
    [createProduct.fulfilled.type]: state => {
      return {
        ...state,
        loading: false,
        error: null,
      };
    },
    [createProduct.rejected.type]: state => {
      return { ...state, loading: false, error: true };
    },
  },
});

// @ts-ignore
export const productsSelectors = productsAdapter.getSelectors(state => state.products);

// @ts-ignore
export default productsSlice.reducer;
