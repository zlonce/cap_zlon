import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TimetableGrid from './TimetableGrid';
import './timetable.css';

const TimetableCheck = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { selectedTimetable } = location.state || {}; // 선택된 시간표 데이터

    if (!selectedTimetable) {
        return <div>선택된 시간표가 없습니다.</div>;
    }

    const handleBack = () => {
        navigate('/timetable'); // 이전 페이지로 이동
    };

    return (
        <div className="timetable-check-container">
            <div className="timetable-check-content">
                {/* 돌아가기 버튼 */}
                <button className="timetable-check-close-button" onClick={handleBack}>시간표 다시 선택하기</button>
                <button className="timetable-check-pdf-button">PDF로 저장하기</button>
                {/* 선택된 시간표 제목 */}
                <h2>선택된 시간표</h2> {/* h1 -> h2로 변경 */}
                
                {/* 시간표 렌더링 */}
                <TimetableGrid lectureData={selectedTimetable} />
            </div>
        </div>
    );
};

export default TimetableCheck;