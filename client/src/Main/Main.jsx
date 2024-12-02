import React, { useState } from 'react';
import './Main.css'; // 스타일 파일 임포트
import { Link } from "react-router-dom";
import { FaUnlock } from 'react-icons/fa';
import { MdDriveFileRenameOutline, MdOutlineQuestionAnswer } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import Layout from '../Layout/Layout';
import Dropdown from '../Dropdown/Dropdown';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Main() {
  const [year, setYear] = useState("1학년");
  const [semester, setSemester] = useState("1학기");
  const [department, setDepartment] = useState("컴퓨터공학과");
  const [majorrequired, setMajorrequired] = useState("0학점");
  const [generalCredit, setGeneralCredit] = useState("0학점");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // 사이드바 상태 추가

  const handleYearChange = (event) => setYear(event.target.value);
  const handleSemesterChange = (event) => setSemester(event.target.value);
  const handleDepartmentChange = (event) => setDepartment(event.target.value);
  const handleMajorrequiredChange = (event) => setMajorrequired(event.target.value);
  const handleGeneralCreditChange = (event) => setGeneralCredit(event.target.value);

  const navigate = useNavigate();

  const handleComplete = async () => {
    // 학년, 학기, 전공학점, 교양학점 변환
    const data = {
      year: year.replace("학년", "").trim(),  // "1학년" -> "1"
      semester: semester.replace("학기", "").trim(), // "1학기" -> "1"
      major: department.trim(),  // 학과 그대로 전송
      majorCredits: parseInt(majorrequired.replace("학점", "").trim()), // 전공 학점
      electiveCredits: parseInt(generalCredit.replace("학점", "").trim()) // 교양 학점
    };

    try {
      // 백엔드 API에 데이터 전송
      const response = await axios.post('http://localhost:8000/api/recommend', data);
      navigate("/timetable"); // 결과 페이지로 이동
    } catch (error) {
      console.error('추천 요청 중 오류:', error.message);
      alert('원하시는 시간표가 존재하지 않습니다');
    }
  };

  
  

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // 사이드바 열기/닫기
  };

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
          <nav className="nav-buttons">
            <button className="nav-button">로그인</button>
            <button className="nav-button">프로필 수정</button>
            <button className="nav-button">설명</button>
            <button className="nav-button">문의하기</button>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <div className="title-section">
          <h1 className="main-title">시간표 자동 생성</h1>
          <p className="subtitle">원하는 조건을 선택하시면 최적의 시간표를 추천해드립니다.</p>
        </div>

        <div className="form-container">
          <div className="dropdown-grid">
            <div className="form-group">
              <label className="form-label">학년</label>
              <select value={year} onChange={handleYearChange}>
                <option>1학년</option>
                <option>2학년</option>
                <option>3학년</option>
                <option>4학년</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">학기</label>
              <select value={semester} onChange={handleSemesterChange}>
                <option>1학기</option>
                <option>2학기</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">학과</label>
              <select value={department} onChange={handleDepartmentChange}>
                <option>컴퓨터공학과</option>
                <option>도시계획학과</option>
                <option>게임소프트웨어학과</option>
              </select>
            </div>
          </div>

          <div className="dropdown-grid-2">
            <div className="form-group">
              <label className="form-label">전공학점</label>
              <select value={majorrequired} onChange={handleMajorrequiredChange}>
                {[0, 3, 6, 9, 12, 15, 18].map(credit => (
                  <option key={credit}>{credit}학점</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">교양학점</label>
              <select value={generalCredit} onChange={handleGeneralCreditChange}>
                {[0, 3, 6, 9, 12, 15, 18].map(credit => (
                  <option key={credit}>{credit}학점</option>
                ))}
              </select>
            </div>
          </div>

          <div className="submit-container">
            <button className="submit-button" onClick={handleComplete}>
              시간표 추천
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;