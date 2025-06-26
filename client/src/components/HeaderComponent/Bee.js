// Bee.js
import React, { useEffect, useState } from "react";
import "./Bee.css"; // Nhập file CSS

const Bee = () => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const moveBee = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const newTop = Math.random() * (windowHeight - 100); // Giảm 100 để tránh tràn ra ngoài
      const newLeft = Math.random() * (windowWidth - 100); // Giảm 100 để tránh tràn ra ngoài

      setPosition({ top: newTop, left: newLeft });
    };

    const interval = setInterval(moveBee, 1000); // Di chuyển mỗi giây

    return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
  }, []);

  return (
    <svg
      className="bee"
      style={{ position: "absolute", top: position.top, left: position.left }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width="100"
      height="100"
    >
      <defs>
        <filter id="blur" x="0" y="0">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
        </filter>
      </defs>
      <g fill="none" stroke="black" strokeWidth="2">
        <ellipse cx="100" cy="100" rx="50" ry="30" fill="yellow" />
        <ellipse cx="100" cy="100" rx="30" ry="20" fill="black" />
        <ellipse cx="70" cy="90" rx="10" ry="15" fill="black" />
        <ellipse cx="130" cy="90" rx="10" ry="15" fill="black" />
        <ellipse cx="100" cy="130" rx="40" ry="20" fill="black" />
        <path
          d="M 100 70 C 80 60, 80 40, 100 40 C 120 40, 120 60, 100 70 Z"
          fill="black"
        />
        <path
          d="M 100 70 C 120 60, 120 40, 100 40 C 80 40, 80 60, 100 70 Z"
          fill="yellow"
        />
        {/* Cánh với hiệu ứng mờ */}
        <ellipse
          cx="70"
          cy="90"
          rx="10"
          ry="15"
          fill="black"
          filter="url(#blur)"
        />
        <ellipse
          cx="130"
          cy="90"
          rx="10"
          ry="15"
          fill="black"
          filter="url(#blur)"
        />
      </g>
    </svg>
  );
};

export default Bee;
