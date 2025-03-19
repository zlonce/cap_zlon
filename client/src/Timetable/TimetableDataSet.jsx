import React, { useEffect, useState } from "react";
import axios from "axios";
import "./timetable.css";
import Layout from "../Layout/Layout";
import { useNavigate } from "react-router-dom";
import TimetableGrid from "./TimetableGrid";

const TimetableDataSet = () => {
  const [timetables, setTimetables] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTimetables = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/timetables"
        );
        console.log("받아온 시간표 데이터:", response.data);
        setTimetables(response.data);
      } catch (error) {
        console.error("시간표 데이터 가져오기 실패:", error);
        setTimetables([[], [], []]);
      }
    };

    fetchTimetables();
  }, []);

  const handleTimetableSelect = (selectedTimetable) => {
    navigate("/timetablecheck", {
      state: { selectedTimetable },
    });
  };

  return (
    <Layout>
      <main className="timetable-content">
        <div className="tables-wrapper">
          {timetables.map((timetable, index) => (
            <div className="timetable-container" key={index}>
              <h2>시간표 {index + 1}</h2>
              <TimetableGrid scheduleData={timetable} />

              {/* ✅ 버튼 클래스 통일 (스타일 충돌 해결) */}
              <button
                className="timetable-button"
                onClick={() => handleTimetableSelect(timetable)}
              >
                시간표 선택
              </button>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default TimetableDataSet;
