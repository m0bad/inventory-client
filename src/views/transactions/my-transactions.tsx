import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ITransaction } from '../../types/transaction';
import { fetchMyTransactions, transactionsSelectors } from '../../store/transactions/transactionSlice';
import { TransactionsTable } from '../../components/transactions/transactions-table';

export const MyTransactions = () => {
  const dispatch = useDispatch();
  const myTransactions: ITransaction[] = useSelector(state => transactionsSelectors.selectAll(state));

  useEffect(() => {
    dispatch(fetchMyTransactions());
  }, [dispatch]);

  return <TransactionsTable transactions={myTransactions} />;
};
