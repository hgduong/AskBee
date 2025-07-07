import "./LoginForm.css";
import { Button, message } from "antd";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    const usernameInput = document.querySelector(
      'input[type="text"]'
    ) as HTMLInputElement | null;
    const passwordInput = document.querySelector(
      'input[type="password"]'
    ) as HTMLInputElement | null;
    const username = usernameInput?.value;
    const password = passwordInput?.value;

    if (!username || !password) {
      message.error("Vui lòng nhập đầy đủ tài khoản và mật khẩu!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
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
        <form
          onSubmit={(e) => {
            e.preventDefault(); // Ngăn reload trang
            handleLogin();
          }}
        >
          <h1 className="title">🐝 Bee Login</h1>

          <div className="input-box">
            <label>Tài khoản</label>
            <input type="text" placeholder="Username" required />
          </div>

          <div className="input-box">
            <label>Mật khẩu</label>
            <input type="password" placeholder="Password" required />
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

          <Button
            type="primary"
            onClick={handleLogin}
            className="login-button"
            htmlType="submit" // Thêm để submit form
          >
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
