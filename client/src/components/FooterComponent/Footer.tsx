import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer" style={{ textAlign: "center" }}>
      AskBee ©{new Date().getFullYear()} Created by AskBee
    </div>
  );
};
export default Footer;
