import React, { useState } from "react";
import "./InquiryForm.css";
import Layout from "../Layout/Layout";
import { useNavigate } from "react-router-dom";

export default function InquiryForm() {
  const [activeTab, setActiveTab] = useState("문의하기");
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="inquiry-container">
        {/* 탭 버튼 */}
        <div className="inquiry-header">
          <button
            className={`tab-button ${activeTab === "자주 묻는 질문" ? "active" : ""}`}
            onClick={() => setActiveTab("자주 묻는 질문")}
          >
            자주 묻는 질문
          </button>
          <button
            className={`tab-button ${activeTab === "문의하기" ? "active" : ""}`}
            onClick={() => setActiveTab("문의하기")}
          >
            문의하기
          </button>
          <button
            className={`tab-button ${activeTab === "서비스 설명" ? "active" : ""}`}
            onClick={() => setActiveTab("서비스 설명")}
          >
            서비스 설명
          </button>
        </div>

        {/* 탭 내용 */}
        <div className="form-box">
          {activeTab === "자주 묻는 질문" && <p>여기에 자주 묻는 질문 내용을 표시합니다.</p>}
          {activeTab === "문의하기" && (
            <>
              <h2 className="form-title">문의하기</h2>
              <div className="form-group">
                <label>문의 분류 *</label>
                <select className="input-field">
                  <option>문의 분류를 선택해주세요.</option>
                  <option>일반 문의</option>
                  <option>기술 지원</option>
                </select>
              </div>
              <div className="form-group">
                <label>이메일 *</label>
                <input type="email" className="input-field" placeholder="답변 받을 이메일을 입력해주세요." />
              </div>
              <div className="form-group">
                <label>문의 제목 *</label>
                <input type="text" className="input-field" placeholder="문의 제목을 작성해주세요." />
              </div>
              <div className="form-group">
                <label>문의 내용 *</label>
                <textarea className="input-field textarea" placeholder="문의 내용을 자세히 작성해주세요."></textarea>
              </div>
              <button className="submit-btn">문의하기</button>
            </>
          )}
          {activeTab === "서비스 설명" && <p>여기에 서비스 설명 내용을 표시합니다.</p>}
        </div>
      </div>
    </Layout>
  );
}