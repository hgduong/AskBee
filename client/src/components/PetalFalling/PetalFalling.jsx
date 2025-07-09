import React, { useEffect } from "react";
import "./PetalFalling.css";

const PetalFalling = () => {
  useEffect(() => {
    const createPetal = () => {
      const petal = document.createElement("div");
      petal.className = "petal";

      // Random kích thước
      const size = Math.random() * 20 + 10;
      petal.style.width = `${size}px`;
      petal.style.height = `${size}px`;

      // Random vị trí bắt đầu
      petal.style.left = `${Math.random() * window.innerWidth}px`;

      // Random màu sắc (có thể thay bằng hình ảnh cánh hoa)
      const colors = ["#ffb6c1", "#ffc0cb", "#ff69b4", "#ff1493", "#db7093"];
      petal.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];

      // Random thời gian rơi và độ xoay
      const duration = Math.random() * 5 + 5;
      petal.style.animation = `fall ${duration}s linear infinite`;

      // Thêm vào DOM
      document.body.appendChild(petal);

      // Tự động xóa khi animation kết thúc
      setTimeout(() => {
        petal.remove();
      }, duration * 1000);
    };

    // Tạo cánh hoa mới mỗi 300ms
    const interval = setInterval(createPetal, 300);

    // Dọn dẹp khi component unmount
    return () => clearInterval(interval);
  }, []);

  return null; // Component này không render gì cả
};

export default PetalFalling;
