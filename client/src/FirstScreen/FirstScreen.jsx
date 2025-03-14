import React from "react";
import { Link } from "react-router-dom";
import "./FirstScreen.css";
import "./FirstScreenMedia.css";

const FirstScreen = () => {
  return (
    <main className="first-screen">
      <div className="first-container">
        <img src="/logo2.png" className="first-logo"></img>
        <div className="first-title">계명대학교 시간표 도우미</div>
        <div className="first-content">최적의 시간표를 만들어드릴게요!</div>
        <Link to="/Main">
          <button className="start-button">서비스 시작하기</button>
        </Link>
      </div>
    </main>
  );
};

export default FirstScreen;
