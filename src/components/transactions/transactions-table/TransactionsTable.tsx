import React, { useMemo } from 'react';
import { DashboardTable } from '../../dashboard';
import { ITransaction } from '../../../types/transaction';

type Props = {
  transactions: ITransaction[];
};
export function TransactionsTable({ transactions }: Props) {
  const columns = useMemo(() => {
    return [
      {
        key: 'id',
        title: 'ID',
        dataIndex: 'id',
        width: '25%',
      },
      {
        key: 'amount',
        title: 'Amount',
        dataIndex: 'amount',
        width: '25%',
      },
      {
        key: 'Type',
        title: 'Trx Type',
        dataIndex: 'trx_type',
        width: '25%',
      },
      {
        key: 'createdAt',
        title: 'Creation Date',
        dataIndex: 'created_at',
        width: '25%',
      },
    ];
  }, []);

  return <DashboardTable columns={columns} dataSource={transactions} />;
}
