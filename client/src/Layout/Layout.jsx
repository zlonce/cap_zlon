import React from "react";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <header className="header">
        <div className="header-container">
          <div className="logo-section">
            <img src="/logo2.png" alt="대학 로고" className="logo" />
            <div className="logo-text">
              <span className="university-name-ko">계명대학교</span>
              <span className="university-name-en">KEIMYUNG UNIVERSITY</span>
            </div>
          </div>
        </div>
      </header>
      <main className="main-content">{children}</main>
    </div>
  );
};

export default Layout;
