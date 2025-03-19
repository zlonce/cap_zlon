import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TimetableGrid from "./TimetableGrid";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./timetable.css";
import Layout from "../Layout/Layout";

const TimetableCheck = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedTimetable } = location.state || {};

  if (!selectedTimetable) {
    return <div>선택된 시간표가 없습니다.</div>;
  }

  const handleBack = () => {
    navigate("/timetable");
  };

  const handleSaveAsPDF = async () => {
    const element = document.querySelector(".timetable-container");
    if (!element) return;

    try {
      const canvas = await html2canvas(element);
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * pageWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

      pdf.save("timetable.pdf");
    } catch (error) {
      console.error("PDF 저장 중 오류 발생:", error);
    }
  };

  return (
    <Layout>
      <main className="timetable-content">
        <div className="tables-wrapper">
          <div className="timetable-container">
            <h2
              style={{
                fontSize: "1rem",
                marginBottom: "15px",
                color: "#333",
              }}
            >
              선택된 시간표
            </h2>
            <TimetableGrid scheduleData={selectedTimetable} />
            <div
              className="button-container"
              style={{
                display: "flex",
                gap: "8px",
                marginTop: "15px",
              }}
            >
              <button
                className="select-button"
                onClick={handleBack}
                style={{
                  flex: 1,
                  maxWidth: "150px",
                  fontSize: "0.6rem",
                  padding: "6px 0",
                  height: "28px",
                  lineHeight: "1",
                }}
              >
                시간표 다시 선택하기
              </button>
              <button
                className="select-button"
                onClick={handleSaveAsPDF}
                style={{
                  flex: 1,
                  maxWidth: "150px",
                  fontSize: "0.6rem",
                  padding: "6px 0",
                  height: "28px",
                  lineHeight: "1",
                }}
              >
                PDF로 저장하기
              </button>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default TimetableCheck;
