import React from 'react';

const TimetableCell = ({ lecture }) => {
    // 강의가 있을 경우, gridRow를 사용하여 여러 셀을 차지하도록 설정
    const cellStyle = lecture
        ? {
              backgroundColor: lecture.color,
              gridRow: `span ${lecture.duration}`, // duration에 따라 행(span) 설정
              height: '100%', // 강의 블록이 셀 전체 높이를 차지
          }
        : {};

    return (
        <div className="timetable-cell" style={cellStyle}>
            {lecture && (
                <div className="lecture-block">
                    <span>{lecture.title}</span>
                    <span>{lecture.instructor}</span>
                </div>
            )}
        </div>
    );
};

export default TimetableCell;