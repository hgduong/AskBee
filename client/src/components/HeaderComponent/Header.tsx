import "./Header.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
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
    navigate("/");
  };
  const gotoProfile = () => {
    if (isLoggedIn) {
      navigate("/profile");
    }
  };
  return (
    <header>
      <div className="logo">
        <Bee />
      </div>
      <nav className="navbar">
        <div className="nav-list">
          <div className="nav-item">
            <Link to="/">Trang chủ</Link>
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

          <div>
            {isLoggedIn ? (
              <div className="logout">
                <span>{username}</span>
                <div onClick={onLogout}>Đăng xuất</div>
              </div>
            ) : (
              <div id="login-register">
                <div className="lg">
                  <div onClick={handleLogin}>Đăng nhập</div>
                </div>
                <div className="rg">
                  <div onClick={handleRegister}>Đăng ký</div>
                </div>
              </div>
            )}
          </div>
          <div className="iconavt">
            <UserOutlined onClick={gotoProfile} style={{ cursor: "pointer" }} />
          </div>
        </div>
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
