import "./LoginForm.css";
import { Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!credentials.username || !credentials.password) {
      message.error("Vui lòng nhập đầy đủ tài khoản và mật khẩu!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        message.success("Đăng nhập thành công!");
        navigate("/");
      } else {
        message.error(data.error || "Đăng nhập thất bại!");
      }
    } catch (error) {
      message.error("Lỗi kết nối server!");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="login-page">
      <div className="bg-image"></div>
      <div className="login-content"></div>
      <div className="login-content">
        <form onSubmit={handleLogin}>
          <h1 className="title">🐝 Bee Login</h1>

          <div className="input-box">
            <label>Tài khoản</label>
            <input
              type="text"
              value={credentials.username}
              onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })
              }
              placeholder="Username"
              required
            />
          </div>

          <div className="input-box">
            <label>Mật khẩu</label>
            <input
              type="password"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
              placeholder="Password"
              required
            />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Ghi nhớ
            </label>
            <span
              onClick={() => navigate("/forgot-password")}
              style={{ cursor: "pointer", color: "#1890ff" }}
            >
              Quên mật khẩu?
            </span>
          </div>

          <Button type="primary" className="login-button" htmlType="submit">
            Đăng nhập
          </Button>

          <div className="register">
            <p>
              Chưa có tài khoản?{" "}
              <span
                onClick={() => navigate("/register")}
                style={{ cursor: "pointer", color: "#1890ff" }}
              >
                Đăng ký
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
