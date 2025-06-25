import "./Header.css";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom";
import { UserOutlined } from '@ant-design/icons';
const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const onLogout = () => {
    setUsername("");
    setIsLoggedIn(false);
  };
  return (
    <header>
      <div className="logo">Website Logo</div>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item"><Link to='/'>Trang trủ</Link></li>
          <li className="nav-item"><Link to='/about'>Giới thiệu</Link></li>
          <li className="nav-item"><Link to='/contact'>Liên hệ</Link></li>
          <li className="nav-item"><Link to='/donate'>Ủng hộ</Link></li>
          
          {isLoggedIn ? (
            <div id="user-info">
              <span>{username}</span>
              <button onClick={onLogout}>Đăng xuất</button>
            </div>
          ) : (
            <div id="login-register">
              <div className="lg">
              <button onClick={handleLogin}>Đăng nhập</button>
              </div>
              <div className="rg">
              <button onClick={handleRegister}>Đăng ký</button>
              </div>
            </div>
          )}
        <div className="iconavt"><UserOutlined/></div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
