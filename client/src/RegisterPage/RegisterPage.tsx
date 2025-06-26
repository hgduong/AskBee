import React from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.css";
const RegisterPage = () => {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/");
  };
  return (
    <>
      <form>
        <div>
          <label htmlFor="username">Tên đăng nhập</label>
          <input
            type="text"
            id="username"
            placeholder="Vui lòng nhập tên đăng nhập"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Mật khẩu</label>
          <input
            type="password"
            id="password"
            placeholder="Vui lòng nhập mật khẩu"
            required
          />
        </div>
        <div>
          <label htmlFor="confirm-password">Mật khẩu</label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Vui lòng nhập lại mật khẩu"
            required
          />
        </div>
        <div>
          <button onClick={handleRegister}>Lưu</button>
        </div>
      </form>
    </>
  );
};

export default RegisterPage;
