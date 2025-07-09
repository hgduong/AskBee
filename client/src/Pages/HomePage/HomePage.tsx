import React from "react";
import { Flex, Layout } from "antd";
import "./HomePage.css";

const { Header, Footer, Sider, Content } = Layout;

const HomePage: React.FC = () => (
  <Flex gap="middle" wrap style={{ height: "100vh", width: "100vw" }}>
    <Layout className="layout" style={{ height: "100%", width: "100%" }}>
      <Sider width="25%" className="sider">
        Option cột trái
      </Sider>
      <Layout style={{ height: "100%", width: "75%" }}>
        <Header className="header">Chào mừng đến với AskBee</Header>
        <Content className="content"></Content>
        <Footer className="footer">Hỏi</Footer>
      </Layout>
    </Layout>
  </Flex>
);

export default HomePage;
