import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import React from 'react';

export function DashboardTable({ columns, dataSource, expandedRowRender, loading, onRowClick }) {
  const expandIcon = ({ expanded }) => (expanded ? <CaretUpOutlined /> : <CaretDownOutlined />);
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      rowClassName="pointer"
      expandable={expandedRowRender ? { expandedRowRender, expandIcon, expandRowByClick: true } : null}
      rowKey="id"
      loading={loading}
      notFoundContent={null}
      onRow={onRowClick ? record => ({ onClick: () => onRowClick(record) }) : null}
    />
  );
}
