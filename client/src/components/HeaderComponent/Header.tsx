import "./Header.css";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Bee from "../HeaderComponent/Bee";
import { UserOutlined } from "@ant-design/icons";

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
      <div className="logo">
        <Bee />
      </div>
      <nav className="navbar">
        <ul className="nav-list">
          <div className="nav-item">
            <Link to="/">Trang trủ</Link>
          </div>
          <div className="nav-item">
            <Link to="/about">Giới thiệu</Link>
          </div>
          <div className="nav-item">
            <Link to="/contact">Liên hệ</Link>
          </div>
          <div className="nav-item">
            <Link to="/donate">Ủng hộ</Link>
          </div>

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
          <div className="iconavt">
            <UserOutlined />
          </div>
        </ul>
      </nav>
      <div className="grid-container">
        <Link to="/class1" className="grid-item">
          Lớp 1
        </Link>
        <Link to="/class2" className="grid-item">
          Lớp 2
        </Link>
        <Link to="/class3" className="grid-item">
          Lớp 3
        </Link>
        <Link to="/class4" className="grid-item">
          Lớp 4
        </Link>
        <Link to="/class5" className="grid-item">
          Lớp 5
        </Link>
        <Link to="/class6" className="grid-item">
          Lớp 6
        </Link>
        <Link to="/class7" className="grid-item">
          Lớp 7
        </Link>
        <Link to="/class8" className="grid-item">
          Lớp 8
        </Link>
        <Link to="/class9" className="grid-item">
          Lớp 9
        </Link>
        <Link to="/class10" className="grid-item">
          Lớp 10
        </Link>
        <Link to="/class11" className="grid-item">
          Lớp 11
        </Link>
        <Link to="/class12" className="grid-item">
          Lớp 12
        </Link>
      </div>
    </header>
  );
};

export default Header;
