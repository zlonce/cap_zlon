import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TimetableGrid from './TimetableGrid';
import './timetable.css';

const TimetableCheck = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { selectedTimetable } = location.state || {};

    if (!selectedTimetable) {
        return <div>선택된 시간표가 없습니다.</div>;
    }

    const handleBack = () => {
        navigate('/timetable');
    };

    return (
        <div className="min-h-screen">
            <header className="header">
                <div className="header-container">
                    <div className="logo-section">
                        <img src="/logo2.png" alt="계명대학교 로고" className="logo" />
                        <div className="logo-text">
                            <div className="university-name-ko">계명대학교</div>
                            <div className="university-name-en">KEIMYUNG UNIVERSITY</div>
                        </div>
                    </div>
                </div>
            </header>
            
            <main className="main-content">
                <div className="tables-wrapper">
                    <div className="timetable-container">
                        <h2 style={{ 
                            fontSize: '1rem',
                            marginBottom: '15px',
                            color: '#333'
                        }}>선택된 시간표</h2>
                        <TimetableGrid scheduleData={selectedTimetable} />
                        <div className="button-container" style={{ 
                            display: 'flex', 
                            gap: '8px',
                            marginTop: '15px'
                        }}>
                            <button 
                                className="select-button" 
                                onClick={handleBack}
                                style={{
                                    flex: 1,
                                    maxWidth: '150px',
                                    fontSize: '0.6rem',
                                    padding: '6px 0',
                                    height: '28px',
                                    lineHeight: '1'
                                }}
                            >
                                시간표 다시 선택하기
                            </button>
                            <button 
                                className="select-button"
                                style={{
                                    flex: 1,
                                    maxWidth: '150px',
                                    fontSize: '0.6rem',
                                    padding: '6px 0',
                                    height: '28px',
                                    lineHeight: '1'
                                }}
                            >
                                PDF로 저장하기
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default TimetableCheck;