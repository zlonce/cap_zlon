import React from "react";
import { Routes, Route } from "react-router-dom";
import FirstScreen from "./FirstScreen/FirstScreen";
import Faq from "./Faq/Faq";
import InquiryForm from "./Inquiry/InquiryForm";
import Loading from "./Loading/Loading";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Editprofile from "./Editprofile/Editprofile";
import Main from "./Main/Main";
import TimetableDataSet from "./Timetable/TimetableDataSet";
import TimetableCheck from "./Timetable/TimetableCheck";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} /> {/* 로그인 페이지를 홈으로 설정 */}
      <Route path="FirstScreen" element={<FirstScreen />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/InquiryForm" element={<InquiryForm />} />
      <Route path="/editprofile" element={<Editprofile />} />
      <Route path="/main" element={<Main />} />
      <Route path="/timetable" element={<TimetableDataSet />} />
      <Route path="/timetablecheck" element={<TimetableCheck />} />
    </Routes>
  );
}

export default App;
