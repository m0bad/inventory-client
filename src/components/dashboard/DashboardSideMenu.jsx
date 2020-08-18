import { GoldTwoTone, MenuFoldOutlined, MenuUnfoldOutlined, TagTwoTone } from '@ant-design/icons';
import { Menu } from 'antd';
import React, { useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const routes = [
  {
    key: 'products',
    href: '/dashboard/products',
    icon: GoldTwoTone,
    title: 'Products',
    forType: ['Supplier', 'Customer', 'Admin'],
  },
  {
    key: 'my-products',
    href: '/dashboard/my-products',
    icon: TagTwoTone,
    title: 'My Products',
    forType: ['Supplier'],
  },
  {
    key: 'my-transactions',
    href: '/dashboard/my-transactions',
    icon: TagTwoTone,
    title: 'Transactions History',
    forType: ['Supplier', 'Customer', 'Admin'],
  },
];

export function DashboardSideMenu({ toggleMenu, collapsed, currentUser }) {
  const history = useHistory();
  const location = useLocation();

  const selectedKey = useMemo(() => {
    const selectedRoute = routes.find(route => route.href === location.pathname);
    return selectedRoute?.key;
  }, [location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  const menuItems = useMemo(
    () =>
      routes.map(
        route =>
          route.forType.includes(currentUser?.user_type) && (
            <Menu.Item
              key={route.key}
              onClick={() => {
                history.push(route.href);
              }}
            >
              <route.icon />
              <span>{route.title}</span>
            </Menu.Item>
          ),
      ),
    [history, currentUser],
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
