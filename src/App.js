import React from 'react';
import { Route, BrowserRouter as Router, NavLink } from 'react-router-dom';
import './App.css';
import { Account, Basket, HeaderPage } from './components';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  AppstoreAddOutlined,
  DropboxOutlined
} from '@ant-design/icons';
import chipset from "./img/chipset.png"
import c from "./img/c.png"

const { Header, Sider, Content } = Layout;

class App extends React.Component {

  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div className="wrapper" >
        <Router>
          <Layout style={{ minHeight: "100vh" }}>
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
              {this.state.collapsed ? <img style={{ height: "50px", width: "auto", marginTop: "10px", marginLeft: "15px" }} src={c} /> : <img src={chipset} href="#" style={{ height: "50px", width: "auto", marginTop: "10px" }} />}
              <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
              >
                <Menu.Item key="1" icon={<AppstoreAddOutlined />}>
                  <NavLink to="/header" >Все чипсеты</NavLink>
                </Menu.Item>
                <Menu.Item key="2" icon={<UserOutlined />}>
                  <NavLink to="/account" >Мои заказы</NavLink>
                </Menu.Item>
                <Menu.Item key="3" icon={<DropboxOutlined />}>
                  <NavLink to="/basket" >Корзина</NavLink>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Header className="site-layout-background" style={{ padding: 0, color: "white" }}>
                {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'trigger',
                  onClick: this.toggle,
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
                <Route path="/header" component={HeaderPage} />
                <Route path="/account" component={Account} />
                <Route path="/basket" component={Basket} />
              </Content>
            </Layout>
          </Layout>
        </Router>
      </div >
    )
  }
}

export default App;



