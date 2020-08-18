import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { TransactionApi } from '../../api/transactions/transaction';
import { ITransaction } from '../../types/transaction';

const transactionApi = new TransactionApi();
const transactionAdapter = createEntityAdapter({
  selectId: (transaction: ITransaction) => transaction.id,
});

const initialState = transactionAdapter.getInitialState({
  loading: false,
  error: null,
  transactions: [],
});

export const fetchMyTransactions = createAsyncThunk('my-transactions/fetch', async () => {
  return transactionApi.getMyTransactions();
});

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {},
  // @ts-ignore
  extraReducers: {
    [fetchMyTransactions.pending.type]: state => {
      return { ...state, loading: true, error: false };
    },
    [fetchMyTransactions.fulfilled.type]: (state, { payload }) => {
      return {
        ...transactionAdapter.setAll({ ...state }, payload),
        loading: false,
        error: null,
      };
    },
    [fetchMyTransactions.rejected.type]: state => {
      return { ...state, loading: false, error: true };
    },
  },
});

// @ts-ignore
export const transactionsSelectors = transactionAdapter.getSelectors(state => state.transactions);

// @ts-ignore
export default transactionsSlice.reducer;
