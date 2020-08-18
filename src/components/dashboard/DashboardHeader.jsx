import React, { useCallback } from 'react';
import { Button, PageHeader } from 'antd';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logoutUser } from '../../store/users/authSlice';

export function DashboardHeader() {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = useCallback(async () => {
    await dispatch(logoutUser());
    history.push('/');
  }, [dispatch, history]);

  return (
    <PageHeader
      ghost
      title="Inventory System"
      subTitle="Reliance"
      extra={[
        <Button key="logout" type="danger" onClick={handleLogout}>
          LOGOUT
        </Button>,
      ]}
    />
  );
}
