import React, { useMemo } from 'react';
import { IProduct } from '../../../types/product';
import { DashboardTable } from '../../dashboard';

type Porps = {
  products: IProduct[];
};
export function ProductsTable({ products }: Porps) {
  const columns = useMemo(() => {
    return [
      {
        key: 'id',
        title: 'ID',
        dataIndex: 'id',
        width: '10%',
      },
      {
        key: 'name',
        title: 'Name',
        dataIndex: 'name',
        width: '20%',
      },
      {
        key: 'supplier',
        title: 'Supplier Id',
        dataIndex: 'supplier_id',
        width: '10%',
      },
      {
        key: 'price',
        title: 'Price',
        dataIndex: 'price',
        width: '10%',
      },
      {
        key: 'image',
        title: 'image',
        dataIndex: 'image',
        width: '10%',
      },
      {
        key: 'createdAt',
        title: 'Creation Date',
        dataIndex: 'created_at',
        width: '20%',
      },
      {
        key: 'updatedAt',
        title: 'Last Update',
        dataIndex: 'updated_at',
        width: '20%',
      },
    ];
  }, []);

  return <DashboardTable columns={columns} dataSource={products} />;
}
