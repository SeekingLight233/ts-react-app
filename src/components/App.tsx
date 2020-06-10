import React from "react"
// import { Route, Link } from 'react-router-dom';
import { Layout, Menu, ConfigProvider } from "antd"
import zh_CN from "antd/lib/locale-provider/zh_CN"

import Employee from "./employee"
import Setting from "./setting"
import "./App.css"

const { Header, Content, Footer } = Layout

const App = ({ match }: any) => {
  // let defaultKey = match.url.replace("/", "") || "employee"
  return (
    <ConfigProvider locale={zh_CN}>
      <Layout>
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            // defaultSelectedKeys={[defaultKey]}
            className="menu"
          >
            <Menu.Item key="employee">
              <span>员工管理</span>
            </Menu.Item>
            <Menu.Item key="setting">
              <span>系统设置</span>
            </Menu.Item>
          </Menu>
        </Header>
        <Content className="contentWrap">
          <div className="content">
            <Employee></Employee>
          </div>
        </Content>
        <Footer className="footer">TypeScript in Action</Footer>
      </Layout>
    </ConfigProvider>
  )
}

export default App
