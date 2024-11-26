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
    <Layout>
      <div className="app-header">
        <div className="app-title-container">
          <span className="app-title">시간표 자동 생성</span>
        </div>
      </div>
      <div className="partition"></div>
      <main className="main-content">
        <div className="content-section">
          <Dropdown
            label="학년"
            options={["1학년", "2학년", "3학년", "4학년"]}
            selectedOption={year}
            onChange={handleYearChange}
          />
          <Dropdown
            label="학기"
            options={["1학기", "2학기"]}
            selectedOption={semester}
            onChange={handleSemesterChange}
          />
          <Dropdown
            label="학과"
            options={["컴퓨터공학과", "도시계획학과", "게임소프트웨어학과"]}
            selectedOption={department}
            onChange={handleDepartmentChange}
          />
        </div>
        <div className="credit-section">
          <Dropdown
            label="전공학점"
            options={["0학점", "3학점", "6학점", "9학점"]}
            selectedOption={majorrequired}
            onChange={handleMajorrequiredChange}
          />
          <Dropdown
            label="교양학점"
            options={["0학점", "3학점", "6학점", "9학점"]}
            selectedOption={generalCredit}
            onChange={handleGeneralCreditChange}
          />
          <button className="preference-button" onClick={handleComplete}>키워드 선택</button>
        </div>
        <button className="complete-button" onClick={handleComplete}>시간표 추천</button>
      </main>
      <nav className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <Link to='/'>
          <button className="nav-button">
            <FaUnlock className="nav-icon" />
            로그아웃
          </button>
        </Link>
        <Link to='/Editprofile'>
          <button className="nav-button">
            <MdDriveFileRenameOutline className="nav-icon" />
            프로필 수정
          </button>
        </Link>
        <button className="nav-button">
          <IoNewspaperOutline className="nav-icon" />
          설명
        </button>
        <Link to='/Faq'>
          <button className="nav-button">
            <MdOutlineQuestionAnswer className="nav-icon" />
            문의하기
          </button>
        </Link>
      </nav>
      <button onClick={toggleSidebar} className="toggle-sidebar-button">
      <img src="/side.png" alt="메뉴" className="side" />
      </button>
    </Layout>
  );
}

export default Main;

