import { Table } from 'antd';
import React from 'react';

export function DashboardTable({ columns, dataSource, loading }: any) {
  return <Table columns={columns} dataSource={dataSource} rowClassName="pointer" rowKey="id" loading={loading} />;
}
