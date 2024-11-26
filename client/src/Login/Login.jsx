import React from "react";
import { Link } from "react-router-dom"; 
import "./login.css";
import Layout from "../Layout/Layout";

export default function Login() {
  return (
    <Layout>
      <div className="service-name">서비스 이름(수업 추천 웹)</div>
      <div className="input-container">
        <input type="text" placeholder="ID" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
      </div>
      <Link to='/Main'>
      <button className="login-button">로그인</button>
      <div className="signup-link">처음이세요?<Link to="/Signup"> 회원가입</Link>
      </div>
      </Link>
    </Layout>
  );
}
