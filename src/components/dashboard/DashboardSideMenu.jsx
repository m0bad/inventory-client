import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React, { useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const routes = [
  {
    key: 'products',
    href: '/dashboard/products',
    icon: UserOutlined,
    title: 'Products',
  },
];

export function DashboardSideMenu({ toggleMenu, collapsed }) {
  const history = useHistory();
  const location = useLocation();

  const selectedKey = useMemo(() => {
    const selectedRoute = routes.find(route => route.href === location.pathname);
    return selectedRoute?.key;
  }, [location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  const menuItems = useMemo(
    () =>
      routes.map(route => (
        <Menu.Item
          key={route.key}
          onClick={() => {
            history.push(route.href);
          }}
        >
          <route.icon />
          <span>{route.title}</span>
        </Menu.Item>
      )),
    [history],
  );

  return (
    <>
      <Menu selectedKeys={[]} mode="inline">
        <Menu.Item key="collapse" onClick={toggleMenu}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          <span>{collapsed ? 'Expand' : 'Collapse'}</span>
        </Menu.Item>
        <Menu.Divider key="divider" />
      </Menu>
      <Menu selectedKeys={[selectedKey]} mode="inline">
        {menuItems}
      </Menu>
    </>
  );
}
