import React from 'react';
import { Layout, Menu, theme } from 'antd';
import './Header.css';
import { UserOutlined, ArrowRightOutlined} from '@ant-design/icons';
import { Dropdown, Avatar } from 'antd';

const menu = (
  <Menu
    items={[
      { key: '1', label: 'Trang cá nhân' },
      { key: '2', label: 'Đăng xuất' },
    ]}
  />
);

<Dropdown overlay={menu} placement="bottomRight">
  <Avatar icon={<UserOutlined />} style={{ cursor: 'pointer' }} />
</Dropdown>

const { Header} = Layout;

const items = Array.from({ length: 12 }).map((_, index) => ({
  key: index + 1,
  label: `Lớp ${index + 1}`,
}));

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    
    <>
    <div className="shiny-banner">
  <div className="marquee-container">
    <div className="marquee-text">
      Thắc Mắc Chi Đã Có Bee — Thắc Mắc Chi Đã Có Bee —
    </div>
  </div>
</div>
    <Layout style={{ width: '100vw', padding: 0, margin: 0 }}>
      
      <Header className="custom-header" style={{ width: '100vw' }}>
        <div className="demo-logo" />
        <div>Công Thức | Tài liệu học tập</div>
        <ArrowRightOutlined />
        <Menu
          
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          className="custom-menu"
        />
        {/* Thêm nút Đăng nhập/Đăng ký */}
  <div className="auth-buttons">
    <button className="login-btn">Đăng nhập</button>
    <button className="register-btn">Đăng ký</button>
  </div>
  <Dropdown overlay={menu} placement="bottomRight">
  <Avatar icon={<UserOutlined />} style={{ cursor: 'pointer' }} />
</Dropdown>
      </Header>
    </Layout>
    </>
  );
};

export default App;
