import React from "react";
import "./InquiryForm.css";

export default function InquiryForm() {
  return (
    <div>
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
        <input
          type="email"
          className="input-field"
          placeholder="답변 받을 이메일을 입력해주세요."
        />
      </div>
      <div className="form-group">
        <label>문의 제목 *</label>
        <input
          type="text"
          className="input-field"
          placeholder="문의 제목을 작성해주세요."
        />
      </div>
      <div className="form-group">
        <label>문의 내용 *</label>
        <textarea
          className="input-field textarea"
          placeholder="문의 내용을 자세히 작성해주세요."
        ></textarea>
      </div>
      <button className="submit-btn">문의하기</button>
    </div>
  );
}
