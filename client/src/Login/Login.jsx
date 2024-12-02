import React from "react";
import { Link } from "react-router-dom"; 
import "./login.css";

export default function Login() {
  return (
    <div className="min-h-screen">
      <header className="header">
        <div className="header-container">
          <div className="logo-section">
            <img src="/logo2.png" alt="계명대학교" className="logo" />
            <div className="logo-text">
              <div className="university-name-ko">계명대학교</div>
              <div className="university-name-en">KEIMYUNG UNIVERSITY</div>
            </div>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="title-section">
          <h1 className="main-title">계명대학교 시간표 도우미</h1>
        </div>

        <div className="form-container">
          <div className="login-form">
            <div className="input-wrapper">
              <input type="text" placeholder="ID" className="login-input" />
              <input type="password" placeholder="Password" className="login-input" />
            </div>
            <Link to='/Main' className="login-button-link">
              <button className="submit-button">로그인</button>
            </Link>
            <div className="signup-link">
              처음이세요? <Link to="/Signup" className="signup-text">회원가입</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
