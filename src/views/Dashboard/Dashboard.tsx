import { Layout } from 'antd';
import React, { Suspense, useState } from 'react';
import { Switch } from 'react-router-dom';
import { DashboardHeader, DashboardSideMenu } from '../../components/dashboard';
import { LoadingIndicator } from '../../components/loading-indicator';
import { AuthRoute } from '../../router/AuthRoute';
import { Products } from '../product';

const { Sider, Content } = Layout;

export function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleMenu = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <Layout className="height-100">
        <DashboardHeader />
        <Layout>
          <Sider theme="light" collapsible collapsed={collapsed} trigger={null}>
            <DashboardSideMenu collapsed={collapsed} toggleMenu={toggleMenu} />
          </Sider>
          <Content style={{ padding: '0 16px' }}>
            <Suspense fallback={<LoadingIndicator />}>
              <Switch>
                <AuthRoute path="/dashboard/products" Component={Products} />
              </Switch>
            </Suspense>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}
