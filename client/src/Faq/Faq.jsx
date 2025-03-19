import React, { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import InquiryForm from "./InquiryForm/InquiryForm";
import Description from "./Description/Description";
import FaqList from "./FaqList/FaqList";
import "./Faq.css";
import "./FaqMedia.css";

export default function Faq() {
  const [activeTab, setActiveTab] = useState("자주 묻는 질문");
  const [content, setContent] = useState(<FaqList />);

  useEffect(() => {
    switch (activeTab) {
      case "자주 묻는 질문":
        setContent(<FaqList />);
        break;
      case "문의하기":
        setContent(<InquiryForm />);
        break;
      case "서비스 설명":
        setContent(<Description />);
        break;
      default:
        setContent(<InquiryForm />);
    }
  }, [activeTab]);

  return (
    <Layout>
      <div className="faq-header">
        <button
          className={`tab-button ${
            activeTab === "자주 묻는 질문" ? "active" : ""
          }`}
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
          className={`tab-button ${
            activeTab === "서비스 설명" ? "active" : ""
          }`}
          onClick={() => setActiveTab("서비스 설명")}
        >
          서비스 설명
        </button>
      </div>
      <div className="faq-container">
        <div className="main-content">{content}</div>
      </div>
    </Layout>
  );
}
