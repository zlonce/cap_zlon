import React from 'react';
import './timetable.css';

const TimetableGrid = ({ lectureData }) => {
    const hours = Array.from({ length: 12 }, (_, i) => 9 + i); // 9시부터 20시까지
    const days = ['월', '화', '수', '목', '금']; // 요일 배열

    // 시간 문자열을 분 단위로 변환하는 함수
    const timeToMinutes = (time) => {
        const [hour, minute] = time.split(':').map(Number);
        return hour * 60 + minute;
    };

    const predefinedColors = ['#ff9292', '#65b5b5', '#d28476', '#6f9ec5', '#90c690', '#ffdb82', '#87d4cf', '#ffcccc','#ffeecc', '#f7dad9', '#74a4c5'];
    // 랜덤 색상 생성 함수 (정해진 색상 중에서 선택)
    const getRandomColor = () => {
        const randomIndex = Math.floor(Math.random() * predefinedColors.length);
        return predefinedColors[randomIndex];
    };

    return (
        <div className="timetable">
            {/* 시간표 헤더 */}
            <div className="timetable-header">
                <div className="timetable-time"></div>
                {days.map((day, index) => (
                    <div key={index} className="timetable-day">{day}</div>
                ))}
            </div>

            {/* 시간표 그리드 */}
            {hours.map((hour) => (
                <React.Fragment key={hour}>
                    <div className="timetable-time">{`${hour}:00`}</div>
                    {days.map((_, dayIndex) => (
                        <div key={dayIndex} className="timetable-cell"></div>
                    ))}
                </React.Fragment>
            ))}

            {/* 강의 블록 렌더링 */}
            {lectureData.map((lecture, index) => {
                const startMinutes = timeToMinutes(lecture.startTime);
                const endMinutes = timeToMinutes(lecture.endTime);
                const durationMinutes = endMinutes - startMinutes;

                const top = ((startMinutes - 540) / 60) * 100 + 50; // 540 = 9:00 AM 기준
                const left = days.indexOf(lecture.day) * 150 + 100; // 요일 배열의 인덱스를 활용
                const height = (durationMinutes / 60) * 100; // 분 단위를 px로 변환

                return (
                    <div
                        key={index}
                        className="lecture-block"
                        style={{
                            position: 'absolute',
                            backgroundColor: getRandomColor(), // 랜덤 색상 적용
                            top: `${top}px`,
                            left: `${left}px`,
                            height: `${height}px`,
                            width: '145px', // 고정된 블록 너비
                        }}
                    >
                        <span>{lecture.title}</span>
                        <span>{lecture.instructor}</span>
                    </div>
                );
            })}
        </div>
    );
};

export default TimetableGrid;
