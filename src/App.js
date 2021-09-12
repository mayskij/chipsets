import React, { setState } from 'react';
import { Route, BrowserRouter as Router, NavLink } from 'react-router-dom';
import './App.css';
import { Account, Basket, HeaderPage, Likes } from './components';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined, AppstoreAddOutlined, DropboxOutlined } from '@ant-design/icons';


function App() {

  const { Header, Sider, Content } = Layout;

  let state = {
    collapsed: false,
  };

  let toggle = () => {
    setState = ({
      collapsed: !state.collapsed,
    });
  };

  return (
    <div className="wrapper">
      <Router>
        <Layout>
          <Sider trigger={null} collapsible collapsed={state.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" icon={<AppstoreAddOutlined />}>
                <NavLink to="/header">Все чипсеты</NavLink>
              </Menu.Item>
              <Menu.Item key="2" icon={<UserOutlined />}>
                <NavLink to="/account">Аккаунт</NavLink>
              </Menu.Item>
              <Menu.Item key="3" icon={<DropboxOutlined />}>
                <NavLink to="/basket">Корзина</NavLink>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: toggle,
              })}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >
              <Route path="/header" component={HeaderPage} exact />
              <Route path="/account" render={() => <Account />} />
              <Route path="/likes" render={() => <Likes />} />
              <Route path="/basket" render={() => <Basket />} />
            </Content>
          </Layout>
        </Layout>
      </Router>
    </div>
  )
}

export default App;
