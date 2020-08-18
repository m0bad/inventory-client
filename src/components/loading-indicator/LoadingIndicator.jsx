import React from 'react';
import { Spin } from 'antd';
import './LoadingIndicator.scss';

export function LoadingIndicator() {
  return (
    <div className="loading-container">
      <Spin />
    </div>
  );
}
