import { Layout } from 'antd';
import React, { Suspense, useEffect, useState } from 'react';
import { Switch } from 'react-router-dom';
import { DashboardHeader, DashboardSideMenu } from '../../components/dashboard';
import { LoadingIndicator } from '../../components/loading-indicator';
import { AuthRoute } from '../../router/AuthRoute';
import { MyProducts, Products } from '../product';
import { UserAPi } from '../../api/users/user';
import { RegisterResponse, UserTypeEnum } from '../../types/user';

const { Sider, Content } = Layout;
const userAPi = new UserAPi();

export function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const [currentUser, setCurrentUser] = useState<RegisterResponse | null>(null);

  useEffect(() => {
    const user = userAPi.getUser();
    setCurrentUser(user);
  }, []);

  const toggleMenu = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <Layout className="height-100">
        <DashboardHeader />
        <Layout>
          <Sider theme="light" collapsible collapsed={collapsed} trigger={null}>
            <DashboardSideMenu collapsed={collapsed} toggleMenu={toggleMenu} currentUser={currentUser} />
          </Sider>
          <Content style={{ padding: '0 16px' }}>
            <Suspense fallback={<LoadingIndicator />}>
              <Switch>
                <AuthRoute path="/dashboard/products" Component={Products} />
                {currentUser?.user_type === UserTypeEnum.SUPPLIER && (
                  <AuthRoute path="/dashboard/my-products" Component={MyProducts} />
                )}{' '}
              </Switch>
            </Suspense>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}
