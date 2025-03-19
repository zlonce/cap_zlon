import React from "react";
import "./FaqList.css";

export default function FaqList() {
  return (
    <div>
      <h2 className="faq-title">자주 묻는 질문</h2>
      <div className="faq-search">
        <input type="text" className="faq-search-input" placeholder="검색..." />
      </div>
      <table className="faq-table">
        <thead>
          <tr>
            <th>분류</th>
            <th>제목</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>일반</td>
            <td>사이트 이용 방법</td>
          </tr>
          <tr>
            <td>기술</td>
            <td>버그 리포트 방법</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
