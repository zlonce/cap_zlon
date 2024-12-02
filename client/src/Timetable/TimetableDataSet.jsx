import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TimetableGrid from './TimetableGrid'; // 이건 시간표 그리드를 렌더링하는 컴포넌트
import './timetable.css';

const TimetableDataSet = () => {
    const [timetableData, setTimetableData] = useState([]);  // 시간표 데이터 상태
    const [loading, setLoading] = useState(true);  // 로딩 상태 관리

    // 시간표 데이터를 서버로부터 가져오는 함수
    const fetchTimetableData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/timetables');  // GET 요청
            setTimetableData(response.data);  // 받은 시간표 데이터를 상태에 저장
            setLoading(false);  // 로딩 완료
        } catch (error) {
            console.error('시간표 데이터를 가져오는 데 실패했습니다.', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTimetableData();  // 컴포넌트가 마운트될 때 데이터 가져오기
    }, []);  // 컴포넌트가 한 번만 실행될 수 있도록 빈 배열

    if (loading) {
        return <p>시간표를 로딩 중입니다...</p>;  // 로딩 중일 때 표시할 내용
    }

    return (
        <div className="tables-wrapper">
            {timetableData.length > 0 ? (
                timetableData.map((data, index) => (
                    <div className="timetable-container" key={index}>
                        <button onClick={() => handleSelect(index)}>시간표 {index + 1} 선택하기</button>
                        <TimetableGrid lectureData={data} />  {/* 각 시간표를 그리드로 표시 */}
                    </div>
                ))
            ) : (
                <p>저장된 시간표가 없습니다.</p>  // 데이터가 없을 때 표시할 내용
            )}
        </div>
    );
};

export default TimetableDataSet;