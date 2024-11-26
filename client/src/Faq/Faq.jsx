import React from 'react';
import './Faq.css';
import { Link } from "react-router-dom"; 
import Layout from "../Layout/Layout";

function Faq() {
  return (
    <Layout>
      <div className="faq-page">
        {/* 상단 네비게이션 바 */}
        <div className="faq-navbar">
          <div className="faq-navbar-title">문의하기</div>
        </div>

        {/* 가로 구분선 */}
        <div className="faq-divider-horizontal"></div>
        
        {/* FAQ 콘텐츠 영역 */}
        <div className="faq-content">
          {/* 자주 묻는 질문 섹션 */}
          <div className="faq-section">
            <h2>자주 묻는 질문</h2>
            <div className="faq-search-bar">
              <input type="text" placeholder="검색할 키워드를 입력해주세요" />
              <button>🔍</button>
            </div>
            <div className="faq-list">
              <div className="faq-item">키워드 1</div>
              <div className="faq-item">키워드 2</div>
              <div className="faq-item">키워드 3</div>
              <div className="faq-item">키워드 4</div>
            </div>
          </div>

          {/* 세로 구분선 */}
          <div className="faq-divider"></div>

          {/* 사용자 정보 및 서비스 진행도 */}
            <div className="faq-user-info">
            <div className="faq-user-profile">
              <p>사용자 님</p>
              <Link to= '/'>
              <button className="faq-logout-button">로그아웃</button>
              </Link>
            </div>


            {/* 서비스 진행도 */}
            <div className="faq-service-progress">
              <h2>서비스 진행도</h2>
              <div className="faq-service-status">
                <div className="faq-status-item">항목 1</div>
                <div className="faq-status-item">항목 2</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Layout>
  );
}

export default Faq;