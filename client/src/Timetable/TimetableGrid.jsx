import React from 'react';

const TimetableGrid = ({ scheduleData = [] }) => {
    const hours = Array.from({ length: 11 }, (_, i) => 9 + i);
    const days = ['월', '화', '수', '목', '금'];

    // 그리드 상수
    const CELL_WIDTH = 65;
    const CELL_HEIGHT = 40;
    const TIME_COLUMN_WIDTH = 35;
    const HEADER_HEIGHT = 25;
    const MINUTES_PER_CELL = 60;

    // 시간을 픽셀로 변환하는 함수 (분 단위 정확도)
    const timeToPixels = (timeString) => {
        const [hours, minutes] = timeString.split(':').map(Number);
        const totalMinutes = (hours - 9) * 60 + minutes;
        return (totalMinutes * CELL_HEIGHT) / MINUTES_PER_CELL;
    };

    // 요일 인덱스를 픽셀로 변환하는 함수
    const dayToPixels = (day) => {
        const dayIndex = days.indexOf(day);
        return TIME_COLUMN_WIDTH + (dayIndex * CELL_WIDTH);
    };

    return (
        <div className="timetable" style={{ 
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: `${TIME_COLUMN_WIDTH}px repeat(5, ${CELL_WIDTH}px)`,
            gridTemplateRows: `${HEADER_HEIGHT}px repeat(${hours.length}, ${CELL_HEIGHT}px)`,
            gap: '0px',
            border: '1px solid #e0e0e0'
        }}>
            {/* 요일 헤더 */}
            <div className="timetable-time"></div>
            {days.map((day, index) => (
                <div key={index} className="timetable-day" style={{
                    borderBottom: '1px solid #e0e0e0',
                    borderRight: '1px solid #e0e0e0',
                    textAlign: 'center',
                    padding: '4px'
                }}>
                    {day}
                </div>
            ))}

            {/* 시간 그리드 */}
            {hours.map((hour) => (
                <React.Fragment key={hour}>
                    <div className="timetable-time" style={{
                        borderRight: '1px solid #e0e0e0',
                        textAlign: 'right',
                        fontSize: '9px',
                        color: '#666',
                        fontWeight: '400',
                        height: '40px',
                        lineHeight: '40px',
                        boxSizing: 'border-box',
                        paddingRight: '8px',
                        position: 'relative',
                        top: '-10px'
                    }}>
                        {`${hour}:00`}
                    </div>
                    {days.map((_, dayIndex) => (
                        <div key={dayIndex} className="timetable-cell" style={{
                            borderRight: '1px solid #e0e0e0',
                            borderBottom: '1px solid #e0e0e0',
                            position: 'relative'
                        }}></div>
                    ))}
                </React.Fragment>
            ))}

            {/* 수업 블록 */}
            {scheduleData.map((classInfo, index) => {
                const top = timeToPixels(classInfo.startTime);
                const height = timeToPixels(classInfo.endTime) - top;
                const left = dayToPixels(classInfo.day);

                const formatText = (text) => {
                    return text.match(/.{1,5}/g)?.join('\n') || text;
                };

                return (
                    <div 
                        key={index}
                        style={{
                            position: 'absolute',
                            top: `${top + HEADER_HEIGHT}px`,
                            left: `${left + 1}px`,
                            height: `${height - 1}px`,
                            width: `${CELL_WIDTH - 3}px`,
                            background: 'linear-gradient(135deg, #4A6FA5 0%, #6B8CC7 100%)',
                            color: 'white',
                            padding: '4px 4px',
                            fontSize: '9px',
                            borderRadius: '3px',
                            zIndex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            opacity: 0.95,
                            boxSizing: 'border-box',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                            overflow: 'hidden',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}
                    >
                        <div style={{
                            fontWeight: '500',
                            fontSize: '9px',
                            lineHeight: '1.2',
                            whiteSpace: 'pre-line',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            marginBottom: '1px',
                            maxHeight: `${height - 20}px`
                        }}>
                            {formatText(classInfo.title)}
                        </div>
                        <div style={{
                            fontSize: '8px',
                            lineHeight: '1.1',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            opacity: 0.9
                        }}>
                            {classInfo.instructor}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default TimetableGrid;
