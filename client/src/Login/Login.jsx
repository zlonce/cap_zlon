import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import Layout from "../Layout/Layout";

export default function Login() {
  return (
    <Layout>
      <main className="main-content">
        <div className="title-section">
          <h1 className="main-title">계명대학교 시간표 도우미</h1>
        </div>

        <div className="form-container">
          <div className="login-form">
            <div className="input-wrapper">
              <input type="text" placeholder="ID" className="login-input" />
              <input
                type="password"
                placeholder="Password"
                className="login-input"
              />
            </div>
            <Link to="/Main" className="login-button-link">
              <button className="submit-button">로그인</button>
            </Link>
            <div className="signup-link">
              처음이세요?{" "}
              <Link to="/Signup" className="signup-text">
                회원가입
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
