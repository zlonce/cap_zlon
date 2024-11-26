import React from 'react';
import { useNavigate } from 'react-router-dom';
import TimetableGrid from './TimetableGrid';
import './timetable.css';

const TimetableDataSet = () => {
    const navigate = useNavigate();

    // 더미 데이터
    const timetableData = [
        [
            { day: "월", startTime: "09:00", endTime: "10:30", title: '컴퓨터네트워크', instructor: '주홍택' },
            { day: "수", startTime: "11:00", endTime: "16:00", title: '데이터베이스프로그래밍', instructor: '홍동권' },
            { day: "화", startTime: "11:00", endTime: "16:00", title: '데이터베이스', instructor: '홍동권' },
        ],
        [
            { day: "금", startTime: "15:00", endTime: "17:00", title: '프로그래밍기초', instructor: '사공상욱' },
            { day: "화", startTime: "12:30", endTime: "16:00", title: '컴퓨터공학캡스톤디자인(1)', instructor: '홍동권' },
        ],
        [
            { day: "월", startTime: "13:00", endTime: "14:15", title: '데이터베이스', instructor: '홍동권' },
        ],
    ];

    const handleSelect = (index) => {
        navigate('/timetablecheck', { state: { selectedTimetable: timetableData[index] } });
    };

    return (
        <div className="tables-wrapper">
            {timetableData.map((data, index) => (
                <div className="timetable-container" key={index}>
                    <button onClick={() => handleSelect(index)}>시간표 {index + 1} 선택하기</button>
                    <TimetableGrid lectureData={data} />
                </div>
            ))}
        </div>
    );
};

export default TimetableDataSet;
