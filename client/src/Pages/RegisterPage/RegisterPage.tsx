import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./RegisterPage.css";

const RegisterPage = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    confirmpassword: "",
  });
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!userData.username || !userData.password || !userData.confirmpassword) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    if (userData.password !== userData.confirmpassword) {
      alert("Mật khẩu không khớp!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: userData.username,
          password: userData.password,
          confirmpassword: userData.confirmpassword,
        }),
      });
      const data = await response.json();

      if (response.ok) {
        alert("Đăng ký thành công!");
        navigate("/login");
      } else {
        alert(data.error || "Đăng ký thất bại!");
      }
    } catch (error) {
      alert("Lỗi kết nối server!");
      console.error("Register error:", error);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <div>
        <label htmlFor="username">Tên đăng nhập</label>
        <input
          type="text"
          id="username"
          value={userData.username}
          onChange={(e) =>
            setUserData({ ...userData, username: e.target.value })
          }
          placeholder="Vui lòng nhập tên đăng nhập"
          required
        />
      </div>
      <div>
        <label htmlFor="password">Mật khẩu</label>
        <input
          type="password"
          id="password"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
          placeholder="Vui lòng nhập mật khẩu"
          required
        />
      </div>
      <div>
        <label htmlFor="confirm-password">Xác nhận mật khẩu</label>
        <input
          type="password"
          id="confirm-password"
          value={userData.confirmpassword}
          onChange={(e) =>
            setUserData({ ...userData, confirmpassword: e.target.value })
          }
          placeholder="Vui lòng nhập lại mật khẩu"
          required
        />
      </div>
      <div>
        <button type="submit">Lưu</button>
      </div>
    </form>
  );
};

export default RegisterPage;
