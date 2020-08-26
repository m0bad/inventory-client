import React, { useMemo } from 'react';
import { DashboardTable } from '../../dashboard';
import { ITransaction } from '../../../types/transaction';
import { IStore } from '../../../types/store';
import { IUser } from '../../../types/user';

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
        width: '20%',
      },
      {
        key: 'amount',
        title: 'Amount',
        dataIndex: 'amount',
        width: '20%',
      },
      {
        key: 'Type',
        title: 'Trx Type',
        dataIndex: 'trx_type',
        width: '10%',
      },
      {
        key: 'Store',
        title: 'Store',
        dataIndex: 'store',
        width: '10%',
        render: (store: IStore) => store.name,
      },
      {
        key: 'created_by',
        title: 'Created By',
        dataIndex: 'created_by',
        width: '10%',
        render: (user: IUser) => user.email,
      },
      {
        key: 'party_id',
        title: 'Party',
        dataIndex: 'party',
        width: '10%',
        render: (party: IUser) => party.email,
      },

      {
        key: 'createdAt',
        title: 'Creation Date',
        dataIndex: 'created_at',
        width: '20%',
      },
    ];
  }, []);

  return <DashboardTable columns={columns} dataSource={transactions} />;
}
