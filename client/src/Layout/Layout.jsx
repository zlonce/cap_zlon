import React from "react";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout-background">
      <div className="layout-content">
        <div className="logo-container">
        <img src="/logo.png" alt="계명대학교 로고" className="logo" />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
