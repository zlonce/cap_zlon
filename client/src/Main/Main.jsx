import React, { useState } from 'react';
import Modal from 'react-modal';  // react-modal 임포트
import './Main.css'; // 스타일 파일 임포트
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './MainMedia.css';

Modal.setAppElement('#root'); // 모달을 사용할 루트 엘리먼트 지정

function Main() {
  const [year, setYear] = useState("1학년");
  const [semester, setSemester] = useState("1학기");
  const [department, setDepartment] = useState("컴퓨터공학과");
  const [majorrequired, setMajorrequired] = useState(0); // 초기값을 숫자로 설정
  const [generalCredit, setGeneralCredit] = useState(0); // 초기값을 숫자로 설정
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 추가
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 메뉴 상태 추가

  const handleYearChange = (event) => setYear(event.target.value);
  const handleSemesterChange = (event) => setSemester(event.target.value);
  const handleDepartmentChange = (event) => setDepartment(event.target.value);

  // 전공학점, 교양학점 변경 핸들러
  const handleMajorrequiredChange = (credit) => setMajorrequired(credit);
  const handleGeneralCreditChange = (credit) => setGeneralCredit(credit);

  // 모달 열기
  const openModal = () => setIsModalOpen(true);

  // 모달 닫기
  const closeModal = () => setIsModalOpen(false);

  const navigate = useNavigate();

  const handleComplete = async () => {
    // 학년, 학기, 전공학점, 교양학점 변환
    const data = {
      year: year.replace("학년", "").trim(),  // "1학년" -> "1"
      semester: semester.replace("학기", "").trim(), // "1학기" -> "1"
      major: department.trim(),  // 학과 그대로 전송
      majorCredits: majorrequired, // 전공 학점
      electiveCredits: generalCredit // 교양 학점
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
            <button 
              className="menu-button" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              &#9776;
            </button>
          </div>
          
          <nav className={`nav-buttons ${isMenuOpen ? "open" : ""}`}>
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

          {/* 전공학점, 교양학점 모달 */}
          <div className="dropdown-grid-2">
            <div className="form-group">
              <label className="form-label">전공학점</label>
              <button className="creditselect-button" onClick={openModal}>전공학점 선택</button>
            </div>

            <div className="form-group">
              <label className="form-label">교양학점</label>
              <button className="creditselect-button" onClick={openModal}>교양학점 선택</button>
            </div>
          </div>

          <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="학점 선택" className="main-modal">
            <h2>학점 선택</h2>

            {/* 전공 학점 선택 */}
            <div className="credit-section">
              <label>전공학점</label>
              <div className="credit-buttons">
                {[0, 3, 6, 9, 12, 15, 18].map(credit => (
                  <button 
                    key={credit} 
                    className={`credit-button ${majorrequired === credit ? 'selected' : ''}`} 
                    onClick={() => handleMajorrequiredChange(credit)}
                  >
                    {credit}학점
                  </button>
                ))}
              </div>
            </div>

            {/* 교양 학점 선택 */}
            <div className="credit-section">
              <label>교양학점</label>
              <div className="credit-buttons">
                {[0, 3, 6, 9, 12, 15, 18].map(credit => (
                  <button 
                    key={credit} 
                    className={`credit-button ${generalCredit === credit ? 'selected' : ''}`} 
                    onClick={() => handleGeneralCreditChange(credit)}
                  >
                    {credit}학점
                  </button>
                ))}
              </div>
            </div>

            <button className="modal-button" onClick={closeModal}>닫기</button>
          </Modal>

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
