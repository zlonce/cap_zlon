const axios = require('axios');

// FastAPI 서버 URL
const majorAPIUrl = 'https://55fb-34-48-196-60.ngrok-free.app/recommend'; //전공
const generalAPIUrl = 'https://2ec6-35-232-8-119.ngrok-free.app/recommend2'; //교양



// 전공 추천 요청 함수
const recommendMajor = async (year, semester, major) => {
  try {
    const response = await axios.post(majorAPIUrl, {
      year: parseInt(year),
      semester: parseInt(semester),
      major: major.trim(),
    });
    return response.data.recommendations; // 추천 결과 반환
  } catch (error) {
    console.error('전공 추천 오류:', error.message);
    throw new Error('전공 추천 처리 중 오류가 발생했습니다.');
  }
};

// 교양 추천 요청 함수
const recommendGeneral = async (semester, major) => {
  try {
    const response = await axios.post(generalAPIUrl, {
      semester: parseInt(semester),
      major: major.trim(),
    });
    return response.data.recommendations; // 추천 결과 반환
  } catch (error) {
    console.error('교양 추천 오류:', error.message);
    throw new Error('교양 추천 처리 중 오류가 발생했습니다.');
  }
};

module.exports = { recommendMajor, recommendGeneral };