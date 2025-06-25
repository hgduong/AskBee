import "./Header.css";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useState } from "react";
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
      <nav>
        <ul>
          {isLoggedIn ? (
            <li id="user-info">
              <span>{username}</span>
              <button onClick={onLogout}>Đăng xuất</button>
            </li>
          ) : (
            <li id="login-register">
              <button onClick={handleLogin}>Đăng nhập</button>
              <button onClick={handleRegister}>Đăng ký</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
